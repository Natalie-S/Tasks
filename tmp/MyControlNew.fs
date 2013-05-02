namespace Website

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.Formlet.Base
open IntelliFactory.WebSharper.Formlet

module Manager =
    type Result =
        {
            status : int
            success : int
            answers : List<int>
        }

    module Server = 
        [<Rpc>]    
        let statusList () : List<string * int> = 
                    [
                        "Ученик", 1 
                        "Студент", 2
                        "Учитель", 3
                     ];
        [<Rpc>]
        let writeToFile string =
            System.IO.File.AppendAllText("D:/log.txt", string + " | ")
       
        [<Rpc>]
        let rec calculateResult (answerList : List<int>) (sum : float) currentPosition = //: unit= 
            match answerList with
            | head :: tail ->   if (currentPosition % 2 = 1) 
                                then calculateResult tail (sum + ((float)head - 1.0) * 2.5) (currentPosition + 1)
                                else calculateResult tail (sum + (5.0 - (float)head) * 2.5) (currentPosition + 1)
            | _ -> string sum
            
    module Client = 
        [<JavaScript>]
        let TasksFormlet () =
            let StateForm =
                let stat = Server.statusList () 
                Formlet.Controls.Select 0 stat 
                |> Enhance.WithTextLabel "Выберите Ваш статус"
            let TaskWindow = 
                //Formlet.Sequence [
                    Controls.RadioButtonGroup None ["Получилось!", 0; "Не получилось", 1] 
                    |> Enhance.WithLegend "Напишите программу, при исполнении которой робот остановится в 10 см от стены"
                    |> Enhance.WithTextLabel "Задание"
                 //   Controls.Button "Попробовать другую задачу."// |> OnClick
               // ]       
            let QestionnaireFormlet =
                Formlet.Sequence [
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5] 
                    |> Enhance.WithLegend "1) Я бы хотел(а) еще поработать с этой программой.";
                    Controls.RadioButtonGroup None ["1", 1; "2", 2; "3", 3; "4", 4;"5", 5] 
                    |> Enhance.WithLegend "2) Программа слишком сложная."
                ]

            Formlet.Yield 
                (fun x a [c; d] -> {status = x; success = a; answers = [c; d]})
            <*> StateForm
            <*> TaskWindow
            <*> QestionnaireFormlet

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
            Client.TasksFormlet ()
            |> Enhance.WithCustomFormContainer formContainer
            |> Enhance.WithSubmitButton
        Div [ f.Run (fun y ->  Server.writeToFile ((string y.status) + " " + (string y.success) + " " + Server.calculateResult y.answers 0. 1) )]

type MyControl() =
    inherit Web.Control()
    [<JavaScript>]
    override this.Body = Manager.Main () :> _
    


