namespace Website

open IntelliFactory.Html
open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Sitelets
open IntelliFactory.Formlet.Base
open IntelliFactory.WebSharper.Formlet



type Action =
    | Home
    | Authorization
    | Statistics
    | General

type UserInfo =
        {
                login : string
                passw : string
        }
type requestData = 
        {
            status : int
            success : int
            beginning : string
            ending : string
        }
    

module Skin =
    open System.Web

    let TemplateLoadFrequency =
        #if DEBUG
        Content.Template.PerRequest
        #else
        Content.Template.Once
        #endif

    type Page =
        {
            Title : string
            Body : list<Content.HtmlElement>
        }

    let MainTemplate =
        let path = HttpContext.Current.Server.MapPath("~/Main.html")
        Content.Template<Page>(path, TemplateLoadFrequency)
            .With("title", fun x -> x.Title)
            .With("body", fun x -> x.Body)

    let WithTemplate title body : Content<Action> =
        Content.WithTemplate MainTemplate <| fun context ->
            {
                Title = title
                Body = body context
            }
module DBOperations =
    open System.Data.SqlClient
    open System.Data
    
    let establishConnection () = 
        let login = "UsabilityTestingSite"
        let password = "1"
        let databaseConnectionString = System.String.Format ("data source=.\SQLEXPRESS;persist security info=True;user id={0};password={1};multipleactiveresultsets=True", login, password)
        let databaseConnection = new SqlConnection (databaseConnectionString) 
        databaseConnection.Open () 
        databaseConnection

    let public runQuery query databaseConnection = 
        let query = "USE [UsabilityTesting]\n" + query
        use sqlCommand = new SqlCommand (query, databaseConnection)
        let reader = sqlCommand.ExecuteReader ()
        reader         

    let public runNonQuery command databaseConnection =
//        let command = "USE [UsabilityTesting]\n"
//                      + "SET IDENTITY_INSERT " + table + " ON\n" 
//                      + command + "\n"
//                      + "SET IDENTITY_INSERT " + table + " OFF\n"
        use sqlCommand = new SqlCommand ((command + "\n"), databaseConnection)
        sqlCommand.ExecuteNonQuery () |> ignore 


module Server =
    open DBOperations
    
    [<Rpc>]    
    let statusList () : List<string * int> =
        [
            "все категории", 0
            "ученики", 1 
            "студенты", 2
            "преподаватели", 3
        ];

    // getting data
    [<Rpc>]
    let getAll () = 
        let connection = establishConnection ()
        let query = "select dbo.Status.name, success, summary from dbo.Main join dbo.Status on Status.id = statusId"
        let reader = runQuery query connection
        seq {while reader.Read() do 
                yield (
                    string <| unbox reader.["name"],
                    int <| unbox reader.["success"],
                    string <| unbox reader.["summary"]
                )
            } |> Seq.toList 

    let createQuery (t : requestData) =
        if t.ending = "сегодня" then 
            match (t.status, t.success) with
            | (0, 2) -> ("select dbo.Status.name, success, summary, AVG(summary) as av from dbo.Main join dbo.Status on Status.id = statusId where data >= '" + (t.beginning) + "' group by dbo.Status.name, success, summary")
            | (0, a) -> ("select dbo.Status.name, success, summary, AVG(summary) as av from dbo.Main join dbo.Status on Status.id = statusId where success = " + (string a) + " and data >= '" + (t.beginning) + "' group by dbo.Status.name, success, summary")
            | (a, 2) -> ("select dbo.Status.name, success, summary, AVG(summary) as av from dbo.Main join dbo.Status on Status.id = statusId where statusId = " + (string a) + " and data >= '" + (t.beginning) +  "' group by dbo.Status.name, success, summary")
            | (a, b) -> ("select dbo.Status.name, success, summary, AVG(summary) as av from dbo.Main join dbo.Status on Status.id = statusId where statusId = " + (string a) + " and success = " + (string b) + " and data >= '" + (t.beginning) + "' group by dbo.Status.name, success, summary")
        else
            match (t.status, t.success) with
            | (0, 2) -> ("select dbo.Status.name, success, summary, AVG(summary) as av from dbo.Main join dbo.Status on Status.id = statusId where data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "' group by dbo.Status.name, success, summary")
            | (0, a) -> ("select dbo.Status.name, success, summary, AVG(summary) as av from dbo.Main join dbo.Status on Status.id = statusId where success = " + (string a) + " and data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "' group by dbo.Status.name, success, summary")
            | (a, 2) -> ("select dbo.Status.name, success, summary, AVG(summary) as av from dbo.Main join dbo.Status on Status.id = statusId where statusId = " + (string a) + " and data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "' group by dbo.Status.name, success, summary")
            | (a, b) -> ("select dbo.Status.name, success, summary, AVG(summary) as av from dbo.Main join dbo.Status on Status.id = statusId where statusId = " + (string a) + " and success = " + (string b) + " and data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "' group by dbo.Status.name, success, summary")
    
    let average (t : requestData) =
        if t.ending = "сегодня" then 
            match (t.status, t.success) with
            | (0, 2) -> ("select AVG(summary) as av from dbo.Main where data >= '" + (t.beginning) + "'")
            | (0, a) -> ("select AVG(summary) as av from dbo.Main where success = " + (string a) + " and data >= '" + (t.beginning) + "'")
            | (a, 2) -> ("select AVG(summary) as av from dbo.Main where statusId = " + (string a) + " and data >= '" + (t.beginning) +  "'")
            | (a, b) -> ("select AVG(summary) as av from dbo.Main where statusId = " + (string a) + " and success = " + (string b) + " and data >= '" + (t.beginning) + "'")
        else
            match (t.status, t.success) with
            | (0, 2) -> ("select AVG(summary) as av from dbo.Main where data >= '" + (t.beginning)  + "' and data < '" + (t.ending) + "'")
            | (0, a) -> ("select AVG(summary) as av from dbo.Main where success = " + (string a) + " and data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "'")
            | (a, 2) -> ("select AVG(summary) as av from dbo.Main where statusId = " + (string a) + " and data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "'")
            | (a, b) -> ("select AVG(summary) as av from dbo.Main where statusId = " + (string a) + " and success = " + (string b) + " and data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "'")
     
    [<Rpc>]
    let getAverage (t : requestData) =
        let connection = establishConnection ()
        let avg = average t
        let reader = runQuery avg connection
        if reader.Read() then (string <| unbox reader.["av"])
            else "error!"    
    
    [<Rpc>]
    let getData (t : requestData) =
        let connection = establishConnection ()
        let query = createQuery t
        let reader = runQuery query connection
        seq {while reader.Read() do 
                yield (
                    string <| unbox reader.["name"],
                    int <| unbox reader.["success"],
                    string <| unbox reader.["summary"]
                )
            } |> Seq.toList
    [<Rpc>]
    let getGeneralAverage () =
        let query = "select AVG(summary) as av from dbo.Main"
        let connection = establishConnection ()
        let reader = runQuery query connection
        if reader.Read () then (string <| reader.GetDouble(0))
            else "error!"

    [<Rpc>]
    let checking (t : UserInfo) = 
        let connection = establishConnection ()
        let query = "DECLARE @ans bit; EXEC @ans = dbo.checkingUp " + (string t.login) + ", " + (string t.passw) + "; SELECT @ans"
        let reader = runQuery query connection
        if reader.Read() then 
            (reader.GetBoolean(0))
        else false   
     
    [<Rpc>]
    let logUser (t : UserInfo) : string =
        if (checking t = true) then 
            UserSession.LoginUser t.login
            "Success!"
        else "Fail!"
    
    [<Rpc>]
    let loginU (t : UserInfo) = UserSession.LoginUser t.login

    //auxiliary
    [<Rpc>]
    let writeToFile str = 
        System.IO.File.AppendAllText("D:/log.txt", str)


module Client =
    open DBOperations
    open IntelliFactory.WebSharper.Html

                  
    
    [<JavaScript>]
    let LoginFormlet =
        let log = 
            Controls.Input ""
            |> Validator.IsNotEmpty "Введите Ваш логин"
            |> Enhance.WithValidationIcon
            |> Enhance.WithTextLabel "Логин"
        let pas = 
            Controls.Password ""
            |> Validator.IsNotEmpty "Введите пароль"
            |> Enhance.WithValidationIcon
            |> Enhance.WithTextLabel "Пароль"
        Formlet.Yield ( fun l p -> {login = l; passw = p})
        <*> log
        <*> pas
        |> Enhance.WithSubmitButton
        |> Enhance.WithFormContainer
    

    [<JavaScript>]
    let requestFormlet = 
        let first = 
            Controls.RadioButtonGroup None (Server.statusList())
            |> Formlet.Horizontal
            |> Enhance.WithLegend "Выберите статус интересующих Вас участников"  
        let second =   
            Controls.RadioButtonGroup None ["не имеет значения", 2; "справился", 0; "не справился", 1]
            |> Formlet.Horizontal
            |> Enhance.WithLegend "Успешность выполнения задачи:" 
        let third = 
            Controls.Input "YYYY-MM-DD"
            |> Enhance.WithLabelAndInfo "Укажите дату начала" "Дата заполнения первой анкеты - 2013-05-27"
        let fourth = 
            Controls.Input "сегодня"
            |> Enhance.WithTextLabel "Укажите дату окончания" 
        Formlet.Yield (fun ff fs s t -> {status = ff; success = fs; beginning = s; ending = t})
        <*> first
        <*> second
        <*> third
        <*> fourth
        |> Enhance.WithSubmitButton
        |> Enhance.WithFormContainer

    [<JavaScript>]
    let RequiredData () =
        Formlet.Do {
            let! x = requestFormlet
            let r = Server.getData x
            let avg = Server.getAverage x
            let divs = 
                r 
                |> List.map (
                    fun (name, success, summary) -> 
                        TR [
                            TD [ Text name ]; 
                            (if success = 0 then TD [ Text "решил" ] else TD [ Text "не решил" ]); 
                            TD [ Text summary ]
                        ]
                   )
            let average =
                TR [
                    TD [ Text "Средний бал: " ]
                    TD [ Text "" ]
                    TD [Text avg]
                ]
            let header = ((TR [TH[ Text "Статус"]; TH [Text "Успешность"]; TH[Text "Бал анкеты"] ]) :: divs @ [ average ]) |> List.toSeq
           
            return! Formlet.OfElement (fun () -> Table header)
        }


    [<JavaScript>]
    let allData () =
        Formlet.Do {
            let r = Server.getAll ()
            let divs = 
                    r 
                    |> List.map (
                        fun (name, success, summary) -> 
                            TR [
                                TD [ Text name ]; 
                                (if success = 0 then TD[ Text "решил" ] else TD [ Text "не решил" ]); 
                                TD [ Text summary ] 
                            ]
                       )
            let y = Server.getGeneralAverage ()
            let average =
                TR[
                    TD [ Text "Средний бал: " ]
                    TD [ Text "" ]
                    TD [Text y]                    
                ]
            let all = ((TR [TH[ Text "Статус"]; TH [Text "Успешность"]; TH[Text "Бал анкеты"] ]) :: divs @ [ average ]) |> List.toSeq
            return! Formlet.OfElement (fun () -> Table all)
        }
    [<JavaScript>]
    let Dep () =
        Formlet.Do {
            let! t = LoginFormlet
            let boo = Server.checking t
            if boo = true
                then
                    Server.loginU t 
                    return! allData () 
                        else return!  Formlet.OfElement(fun () -> Div[ Text "Введены неверные данные. Повторите попытку!" ])
        }
        |> Formlet.Flowlet

    type MyControl() =
        inherit IntelliFactory.WebSharper.Web.Control ()
        [<JavaScript>]
        override this.Body = Dep () :> _
             
    type Request() =
        inherit IntelliFactory.WebSharper.Web.Control ()
        [<JavaScript>]
        override this.Body = RequiredData () :> _

    type All() =
        inherit IntelliFactory.WebSharper.Web.Control ()
        [<JavaScript>]
        override this.Body = allData () :> _


 module Site =

    let ( => ) text url =
        A [HRef url] -< [Text text]

    let Links (ctx: Context<Action>) =
        UL [
            LI ["Домашняя страница" => ctx.Link Home]
            LI ["Авторизация" => ctx.Link Authorization]
            LI ["Общая статистика" => ctx.Link General]
            LI ["Выбор параметров" => ctx.Link Statistics]            
            
        ]

    let HomePage =
        Skin.WithTemplate "Домашняя страница" <| fun ctx ->
            [
                Div [Text "Добро пожаловать! Чтобы ознакомится со статистикой, пройдите авторизацию."]
                Links ctx
            ]

    let AuthorizationPage = 
        Skin.WithTemplate "Авторизация" <| fun ctx -> 
            [
                 Div [ new Client.MyControl() ]
                 Links ctx
            ]

    let StatisticsPage =
        Skin.WithTemplate "Статистика с параметрами" <| fun ctx ->
            [
                Div [ new Client.Request() ]
                Links ctx
            ]
                
    let GeneralStatistics = 
        Skin.WithTemplate "Общая статистика" <| fun ctx -> 
            [
                Div [ new Client.All()]
                Links ctx
            ]

    let Main =
        let filter : Sitelet.Filter<Action> =
            {
                VerifyUser = fun _ -> true
                LoginRedirect = fun _ -> Action.Authorization
            }
        let r = Sitelet.Protect filter (Sitelet.Content "/Statistics" Statistics StatisticsPage)
        let rt = Sitelet.Protect filter (Sitelet.Content "/General" General GeneralStatistics)
        Sitelet.Sum [
            Sitelet.Content "/" Home HomePage
            r
            rt
            Sitelet.Content "/Authorization" Authorization AuthorizationPage
        ]
type Website() =
    interface IWebsite<Action> with
        member this.Sitelet = Site.Main
        member this.Actions = [Home; Authorization]



[<assembly: WebsiteAttribute(typeof<Website>)>]
do ()
