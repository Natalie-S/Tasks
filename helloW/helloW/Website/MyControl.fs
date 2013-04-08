namespace Website

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.Formlet.Base
open IntelliFactory.WebSharper.Formlet

module Manager = 

    module Server = 
        [<Rpc>]
    //    
    //    let count questionNumber chosenValue = if (questionNumber % 2 = true) then (chosenValue - 1) else (5 - chosenValue)
        let status () : List<string * int> = 
                    [
                        "Ученик", 1 
                        "Студент", 2
                        "Учитель", 3
                     ];
        let fff = 2;
    

    module Client = 
        [<JavaScript>]
        //let task = "Напишите программу, при исполнении которой робот остановится в 10 см от стены" 
        let TasksFormlet () = 
//            let fc = {
//                Enhance.FormContainerConfiguration.Default with
//                    Header = "Анкетирование" |> Enhance.FormPart.Text |> Some
//                    Description = "Анкета для исследования юзабилити проекта QReal:Robots"
//                        |> Enhance.FormPart.Text
//                        |> Some
//            }
            let TaskWindow = 
                Formlet.Sequence [
                    Controls.RadioButtonGroup None ["Получилось!", 0; "Не получилось", 1] 
                    |> Enhance.WithLegend "Напишите программу, при исполнении которой робот остановится в 10 см от стены"
                    |> Enhance.WithTextLabel "Задание"
                ]
//                |> Enhance.WithCustomFormContainer {
//                       fc with Description = "Step 1 - Name" |> Enhance.FormPart.Text |> Some
//                       }
            let ChoiceWindow = 
                Formlet.Sequence [ 
                    Controls.Button "Попробовать другую задачу."
                    Controls.Button "Перейти к анкете."
                ] |> Formlet.Horizontal
                  //|> Enhance.WithFormContainer
//                  |> Enhance.WithCustomFormContainer {
//                       fc with Description = "Step 1 - Name" |> Enhance.FormPart.Text |> Some
//                       }
            let StateForm =
                let stat = Server.status () 
                Formlet.Controls.Select 0 stat 
                |> Enhance.WithTextLabel "Выберите Ваш статус"
//                |> Enhance.WithCustomFormContainer {
//                       fc with Description = "Step 1 - Name" |> Enhance.FormPart.Text |> Some
////                       }
            let QestionnaireFormlet =
                Formlet.Sequence [
                    Controls.RadioButtonGroup None ["1", "1"; "2", "2"; "3", "3"; "4", "4";"5", "5"] 
                    |> Enhance.WithLegend "1) Я бы хотел(а) еще поработать с этой программой.";
                    Controls.RadioButtonGroup None ["1", "1"; "2", "2"; "3", "3"; "4", "4";"5", "5"] 
                    |> Enhance.WithLegend "2) Программа слишком сложная."
                ]
//                |> Enhance.WithCustomFormContainer {
//                       fc with Description = "Step 1 - Name" |> Enhance.FormPart.Text |> Some
//                       }
//      


            Formlet.Yield (fun _ _ _ _ -> "hello")
            <*> StateForm
            <*> TaskWindow
            <*> ChoiceWindow
            <*> QestionnaireFormlet
//            Formlet.Do {
//                 return! 
//                    Formlet.OfElement (fun () -> Div [Text "Спасибо за Ваши ответы!"])
//                
//                }
//                |> Formlet.Flowlet  


    [<JavaScript>]
    let Main () =
        let fc = {
            Enhance.FormContainerConfiguration.Default with
                Header = "Анкетирование" |> Enhance.FormPart.Text |> Some
                Description = "Анкета для исследования юзабилити проекта QReal:Robots"
                    |> Enhance.FormPart.Text
                    |> Some
            }
        let f =
            Client.TasksFormlet ()
            |> Enhance.WithCustomFormContainer fc
        Formlet.Run (fun order -> ()) f
      

type MyControl() =
    inherit Web.Control()
    [<JavaScript>]
//    override this.Body = Manager.Client.TasksFormlet () :> Html.IPagelet



    override this.Body = Manager.Main () // :> Html.IPagelet
    


