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
         

    let public runNonQuery command databaseConnection = // table = 
//        let command = "USE [UsabilityTesting]\n"
//                      + "SET IDENTITY_INSERT " + table + " ON\n" 
//                      + command + "\n"
//                      + "SET IDENTITY_INSERT " + table + " OFF\n"
        use sqlCommand = new SqlCommand ((command + "\n"), databaseConnection)
        sqlCommand.ExecuteNonQuery () |> ignore 


module Server =
    open DBOperations
    [<Rpc>]
    let getAll = 
        let connection = establishConnection ()
        let query = "select dbo.Status.name, success, summary from dbo.Main join dbo.Status on Status.id = statusId"
        let reader = runQuery query connection
        reader
    [<Rpc>]    
    let statusList () : List<string * int> =
        [
            "все категории", 0
            "учеников", 1 
            "студентов", 2
            "учителей", 3
        ];
    [<Rpc>]
    let writeToFile str = 
        System.IO.File.AppendAllText("D:/log.txt", str)
    [<Rpc>]
    let checking (t : UserInfo) = 
        let connection = establishConnection ()
        let query = "DECLARE @ans bit; EXEC @ans = dbo.checkingUp " + (string t.login) + ", " + (string t.passw) + "; SELECT @ans"
        let reader = runQuery query connection
        if reader.Read() then 
            (reader.GetBoolean(0))
        else false
    [<Rpc>]
    let createQuery (t : requestData) = 
        match (t.status, t.success) with
        | (0, 2) -> ("select AVG(summary) from dbo.Main where data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "'")
        | (0, a) -> ("select AVG(summary) from dbo.Main where success = " + (string a) + " and data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "'")
        | (a, 2) -> ("select AVG(summary) from dbo.Main where statusId = " + (string a) + " and data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "'")
        | (a, b) -> ("select AVG(summary) from dbo.Main where statusId = " + (string a) + " and success = " + (string b) + " and data >= '" + (t.beginning) + "' and data < '" + (t.ending) + "'")
    
    [<Rpc>]
    let getData (t : requestData) : string = 
        let connection = establishConnection ()
        let query = createQuery t
        let reader = runQuery query connection
        if reader.Read() then 
            (string (reader.GetDouble(0)))
            else "Error"   
     
    [<Rpc>]
    let logUser (t : UserInfo) : string =
        if (checking t = true) then 
            UserSession.LoginUser t.login
            "Success!"
        else "Fail!"

        


module Client =
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
            |> Enhance.WithLegend "Status"  
        let second =   
            Controls.RadioButtonGroup None ["не имеет значения", 2; "справился", 0; "не справился", 1]
            |> Formlet.Horizontal
            |> Enhance.WithLegend "Успешность выполнения задачи:"                    
            
        let third = 
            Controls.Input "YYYY-MM-DD"
            |> Enhance.WithTextLabel "Укажите дату начала"
        let fourth = 
            Controls.Input "YYYY-MM-DD"
            |> Enhance.WithTextLabel "Ending date" 
        Formlet.Yield (fun ff fs s t -> {status = ff; success = fs; beginning = s; ending = t})
        <*> first
        <*> second
        <*> third
        <*> fourth
        |> Enhance.WithSubmitButton
        |> Enhance.WithFormContainer
//    [<JavaScript>]
//    let stat = 
//        Div [Text "Status-----Success-----Summary"] |> ignore
//        let reader = Server.getAll
//        while reader.Read() do
//            Div [Text ((string reader.["statusId"]) + "    " + (string reader.["success"]) + "    " + (string reader.["summary"])) ] |> ignore
    
    type MyControl() =
        inherit IntelliFactory.WebSharper.Web.Control ()
        [<JavaScript>]
        override this.Body =
//            Div [ LoginFormlet.Run (fun login -> Skin.oncl login) ]:> IPagelet
            Div [ LoginFormlet.Run (fun userInformation -> JavaScript.Alert (Server.logUser userInformation) ) ]:> IPagelet
             
    type Request() =
        inherit IntelliFactory.WebSharper.Web.Control ()
        [<JavaScript>]
//        override this.Body = requestFormlet () :> _
        override this.Body = Div [  requestFormlet.Run (fun t -> JavaScript.Alert (Server.getData t) ) ] :> _ 
     
//    type Stat() =
//        inherit IntelliFactory.WebSharper.Web.Control ()
//        [<JavaScript>]
//        override this.Body =      
                


module Site =

    let ( => ) text url =
        A [HRef url] -< [Text text]

    let Links (ctx: Context<Action>) =
        UL [
            LI ["Home" => ctx.Link Home]
            LI ["Statistics" => ctx.Link Statistics]
            LI ["Authorization" => ctx.Link Authorization]
            LI ["General" => ctx.Link General]
        ]

    let HomePage =
        Skin.WithTemplate "HomePage" <| fun ctx ->
            [
                Div [Text "HOME"]
                Links ctx
            ]
//
//    let AboutPage =
//        Skin.WithTemplate "AboutPage" <| fun ctx ->
//            [
//                Div [Text "ABOUT"]
//                Links ctx
//            ]
    let AuthorizationPage = 
        Skin.WithTemplate "Authorization page" <| fun ctx -> 
            [
//                 Div [ Input [ Text "a" ] ]
                 Div [ new Client.MyControl() ]
                 Links ctx
            ]
    let StatisticsPage =
        Skin.WithTemplate "Statistics Page" <| fun ctx ->
            [
                Div [ new Client.Request() ]
                Links ctx
            ]
    let ryh = //: seq <Element<string> > =
        let reader = Server.getAll
        seq {while reader.Read() do yield (
            Div [ Text (string (unbox reader.["name"]) + ", " + (if (unbox reader.["success"]) = 0 then "решил" else "не решил") + " задачу, средний бал анкеты: " + string (unbox reader.["summary"])) ] ) } |> Seq.toList
        
                
    let GeneralStatistics = 
        Skin.WithTemplate "General Statistics" <| fun ctx ->
            List.concat  [ ryh; [ Links ctx ]  ]
   

    let Main =
        let filter : Sitelet.Filter<Action> =
            {
                VerifyUser = fun _ -> true
                LoginRedirect = fun _ -> Action.Authorization
            }
        let r = Sitelet.Protect filter (Sitelet.Content "/Statistics" Statistics StatisticsPage)
        let rt = Sitelet.Protect filter (Sitelet.Content "/General" General GeneralStatistics)
        //UserSession.LoginUser "dgfdbhgf"
        Sitelet.Sum [
            Sitelet.Content "/" Home HomePage
            r
            rt
            Sitelet.Content "/Authorization" Authorization AuthorizationPage
        ]
//        UserSession.Logout

type Website() =
    interface IWebsite<Action> with
        member this.Sitelet = Site.Main
        member this.Actions = [Home; Authorization]



[<assembly: WebsiteAttribute(typeof<Website>)>]
do ()
