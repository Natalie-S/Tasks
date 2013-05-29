namespace Website

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.Formlet.Base
open IntelliFactory.WebSharper.Formlet
open System.Data.SqlClient
open System.Data

module Manager =
    type TestType = 
        {
            id : int
            statusId : int
            success : int
        }
    type Result =
        {
            status : int
            success : int
            answers : List<int>
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
         

    let public runNonQuery command databaseConnection =
//        let command = "USE [UsabilityTesting]\n"
//                      + "SET IDENTITY_INSERT " + table + " ON\n" 
//                      + command + "\n"
//                      + "SET IDENTITY_INSERT " + table + " OFF\n" 

        use sqlCommand = new SqlCommand ((command + "\n"), databaseConnection)
        sqlCommand.ExecuteNonQuery () |> ignore           

  


    module Server =
        [<Rpc>] 
        let wtf str = System.IO.File.AppendAllText("D:/log.txt", str)

        [<Rpc>]    
        let statusList () : List<string * int> = 
                    [
                        "Ученик", 1 
                        "Студент", 2
                        "Учитель", 3
                     ];
        [<Rpc>]
        let rec calculateResult (answerList : List<int>) (sum : float) currentPosition = //: unit= 
            match answerList with
            | head :: tail ->   if (currentPosition % 2 = 1) 
                                then calculateResult tail (sum + ((float)head - 1.0) * 2.5) (currentPosition + 1)
                                else calculateResult tail (sum + (5.0 - (float)head) * 2.5) (currentPosition + 1)
            | _ -> string sum    
   


        [<Rpc>]
        let writeToFile (d : Result) =
            let u = d.answers |> List.toArray
            let connection = establishConnection ()
            let reader = runQuery ("select ISNULL(max(id), 0) from dbo.Main") connection
            if reader.Read() then 
                runNonQuery ("insert into dbo.Main (id, statusId, success, summary, data) values (" + string (reader.GetInt32(0) + 1) + ", " + (string d.status) + ", " + (string d.success) + ", " + (string (calculateResult d.answers 0. 1)) + ", getdate())") connection
                for i in 0 .. 9 do
                    runNonQuery ("insert into dbo.Questionnaire (questionnaireId, questionId, answer) values (" + string (reader.GetInt32(0) + 1)  + ", " +  (string (i + 1)) + ", " + (string u.[i]) + ")") connection 
            else
                runNonQuery ("insert into dbo.Main (id, statusId, success) values (1, " + (string d.status) + ", " + (string d.success) + ")") connection
                for i in 0 .. 9 do
                    runNonQuery ("insert into dbo.Questionnaire (questionnaireId, questionId, answer) values (1, " +  (string (i + 1)) + ", " + (string u.[i]) + ")") connection
            
              
        
            
    module Client = 
        [<JavaScript>]
        let StateForm =
                let stat = Server.statusList () 
                Formlet.Controls.Select 0 stat 
                |> Enhance.WithTextLabel "Выберите Ваш статус"
        [<JavaScript>]
        let TaskWindow task= 
                    Controls.RadioButtonGroup None ["Получилось!", 0; "Не получилось", 1]
                    |> Formlet.Horizontal 
                    |> Enhance.WithLegend task 
                    |> Enhance.WithTextLabel "Задание"
        [<JavaScript>]
        let QuestionnaireFormlet =
                Formlet.Sequence [ 
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5]
                    |> Formlet.Horizontal
                    |> Enhance.WithValidationIcon
                    |> Enhance.WithLegend "1) Я бы хотел(а) еще поработать с этой программой."

                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5]
                    |> Formlet.Horizontal
                    |> Enhance.WithValidationIcon
                    |> Enhance.WithLegend "2) Программа слишком сложная."
                    
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5]
                    |> Formlet.Horizontal
                    |> Enhance.WithValidationIcon 
                    |> Enhance.WithLegend "3) Этой программой легко пользоваться."
                    
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5]
                    |> Formlet.Horizontal
                    |> Enhance.WithValidationIcon 
                    |> Enhance.WithLegend "4) Мне понадобится помощь, чтобы научиться пользоваться этой программой."
                    
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5]
                    |> Formlet.Horizontal
                    |> Enhance.WithValidationIcon 
                    |> Enhance.WithLegend "5) Разные функции в этом приложении правильно сгруппированы."
                    
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5]
                    |> Formlet.Horizontal
                    |> Enhance.WithValidationIcon 
                    |> Enhance.WithLegend "6) В приложении слишком много несоответствий."
                    
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5]
                    |> Formlet.Horizontal
                    |> Enhance.WithValidationIcon 
                    |> Enhance.WithLegend "7) БольшАя часть людей очень быстро научится пользоваться этой программой."
                    
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5]
                    |> Formlet.Horizontal
                    |> Enhance.WithValidationIcon 
                    |> Enhance.WithLegend "8) Это приложение очень трудно использовать."
                    
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5]
                    |> Formlet.Horizontal
                    |> Enhance.WithValidationIcon 
                    |> Enhance.WithLegend "9) Я уверенно себя чувтвовал(а), используя это приложение."
                    
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5]
                    |> Formlet.Horizontal
                    |> Enhance.WithValidationIcon 
                    |> Enhance.WithLegend "10) Мне пришлось многому научиться, прежде чем я смог(ла) работать с приложением."
                ]
                |> Enhance.WithFormContainer
                |> Enhance.WithLegend "Укажите степень Вашего согласия с утверждениями анкеты, где 1 - полностью не согласен(сна), 5 - абсолютно согласна."

        [<JavaScript>]
        let gen =
            let basis =
                Controls.RadioButtonGroup None ["другую зачаду", 0; "перейти к анкете", 1]
                |> Formlet.Horizontal 
                |> Enhance.WithLegend "Хотите ли Вы попробовать решить другую задачу или перейти к анкете?"
            Formlet.Do {
                let! ch = basis
                if ch = 0 then return! TaskWindow "Напишите программу, чтобы робот проехал по линии."
                    else return 1 
            }

        [<JavaScript>]
        let taskChallenger () =
            Formlet.Do {
                let! task = TaskWindow "Напишите программу, чтобы робот доехал до стенки и остановился."
                match task with
                | 0 -> return 0
                | a -> return! gen
            }

            |> Formlet.Flowlet
        [<JavaScript>]
        let Resulting =
            Formlet.Do {
                let! stat = StateForm
                let! taskF = taskChallenger ()
                let! questF = QuestionnaireFormlet                
                return!
                    Formlet.OfElement (fun () -> Div [ Text "Спасибо! Нам важно Ваше мнение." ])
                    |> Formlet.Map ( fun () ->
                        {
                            status = stat
                            success = taskF
                            answers = questF
                        }
                    )                    
            }

    [<JavaScript>]
    let Main () =
        let formContainer = {
            Enhance.FormContainerConfiguration.Default with
                Header = "Анкетирование" |> Enhance.FormPart.Text |> Some
                Description = "Анкета для исследования юзабилити проекта QReal:Robots"
                    |> Enhance.FormPart.Text
                    |> Some
            }
        let f =
            Client.Resulting 
            |> Enhance.WithCustomFormContainer formContainer
        Div [ f.Run (fun y ->  Server.writeToFile y)]

type MyControl() =
    inherit Web.Control()
    [<JavaScript>]
    override this.Body = Manager.Main () :> _
    


