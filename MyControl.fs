namespace Website

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.Formlet.Base
open IntelliFactory.WebSharper.Formlet

module HelloWorld = 
    [<JavaScript>]

     
    let main () =
        let listResult = List.concat [ 
                                        [
                                            P [Text "1) Я бы хотел(а) еще поработать с этой программой."]
                                            Input [Attr.Type "radio"; Attr.Class CssConstants.InputRadioClass; Attr.Name "q1"; Attr.Value "1"]
                                            Input [Attr.Type "radio"; Attr.Class CssConstants.InputRadioClass; Attr.Name "q1"; Attr.Value "2"]
//                                            Input [Attr.Type "radio"; Attr.Class CssConstants.InputRadioClass]
//                                            Input [Attr.Type "radio"; Attr.Class CssConstants.InputRadioClass]
//                                            Input [Attr.Type "radio"; Attr.Class CssConstants.InputRadioClass]
                                        ]
                                        [
                                            P [Text "2) Программа слишком сложная."]
                                            Input [Attr.Type "radio"; Attr.Class CssConstants.InputRadioClass]
                                            Input [Attr.Type "radio"; Attr.Class CssConstants.InputRadioClass]
//                                            Input [Attr.Type "radio"; Attr.Class CssConstants.InputRadioClass]
//                                            Input [Attr.Type "radio"; Attr.Class CssConstants.InputRadioClass]
//                                            Input [Attr.Type "radio"; Attr.Class CssConstants.InputRadioClass]
                                        ]
                                     ]
        let arg = [Form listResult]
        Div arg 

type MyControl() =
    inherit Web.Control()

    [<JavaScript>]
    override this.Body = HelloWorld.main ()  :> Html.IPagelet