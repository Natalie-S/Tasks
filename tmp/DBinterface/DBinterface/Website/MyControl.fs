namespace Website

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.Formlet.Base
open IntelliFactory.WebSharper.Formlet
open System.Data.SqlClient
open System.Data

module Universe= 

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
    type wtf =
        {
            lp : UserInfo
            req : requestData
        }
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

//            [<Rpc>]
//            let checking (t : UserInfo) = 
//                let connection = establishConnection ()
//                let request = "
//                let reader = runQuery 
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


    
    module Client = 
//        [<JavaScript>]
//        let LoginFormlet () =
//            let login  = 
//                Controls.Input ""
//                |> Validator.IsNotEmpty "Введите Ваш логин"
//                |> Enhance.WithValidationIcon
//                |> Enhance.WithTextLabel "Логин"
//            let pass = 
//                Controls.Password ""
//                |> Validator.IsNotEmpty "Введите пароль"
//                |> Enhance.WithValidationIcon
//                |> Enhance.WithTextLabel "Пароль"
//            Formlet.Yield (fun log pass -> {login = log; passw = pass }) 
//            <*> login
//            <*> pass
//            |> Enhance.WithSubmitAndResetButtons
//            |> Enhance.WithFormContainer

       
        [<JavaScript>]
        let requestFormlet () =
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
    [<JavaScript>]
    let Main () =
            let fc = {
                Enhance.FormContainerConfiguration.Default with
                    Header = "Параметры запроса" |> Enhance.FormPart.Text |> Some
                    Description = "Укaжите интересующие Вас параметры" |> Enhance.FormPart.Text |> Some
                }
            let f = 
                Client.requestFormlet ()
                |> Enhance.WithCustomFormContainer fc
            f.Run (fun order -> JavaScript.Alert(Server.getData order))          
        


type MyControl() =
    inherit Web.Control()

    [<JavaScript>]
    override this.Body = Universe.Main () :> _

