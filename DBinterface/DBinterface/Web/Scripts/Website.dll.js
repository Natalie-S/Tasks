(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,Universe,WebSharper,Formlet,Controls,Remoting,Formlet1,Enhance,List,Data,FormContainerConfiguration,Client,alert;
 Runtime.Define(Global,{
  Website:{
   MyControl:Runtime.Class({
    get_Body:function()
    {
     return Universe.Main();
    }
   }),
   Universe:{
    Client:{
     requestFormlet:function()
     {
      var first,x,x1,f,f1,second,x2,x3,f2,f3,third,x4,f4,fourth,x5,f5,x6,x7,x8,f6,f7;
      first=(x=(x1=Controls.RadioButtonGroup({
       $:0
      },Remoting.Call("Website:0",[])),(f=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f(x1))),(f1=function(formlet)
      {
       return Enhance.WithLegend("Status",formlet);
      },f1(x)));
      second=(x2=(x3=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["\u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",2],["\u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0441\u044f",0],["\u043d\u0435 \u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0441\u044f",1]])),(f2=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f2(x3))),(f3=function(formlet)
      {
       return Enhance.WithLegend("\u0423\u0441\u043f\u0435\u0448\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438:",formlet);
      },f3(x2)));
      third=(x4=Controls.Input("YYYY-MM-DD"),(f4=function(formlet)
      {
       return Enhance.WithTextLabel("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043d\u0430\u0447\u0430\u043b\u0430",formlet);
      },f4(x4)));
      fourth=(x5=Controls.Input("YYYY-MM-DD"),(f5=function(formlet)
      {
       return Enhance.WithTextLabel("Ending date",formlet);
      },f5(x5)));
      x6=(x7=Data.$(Data.$(Data.$(Data.$((x8=function(ff)
      {
       return function(fs)
       {
        return function(s)
        {
         return function(t)
         {
          return{
           status:ff,
           success:fs,
           beginning:s,
           ending:t
          };
         };
        };
       };
      },Formlet1.Return(x8)),first),second),third),fourth),(f6=function(formlet)
      {
       return Enhance.WithSubmitButton(formlet);
      },f6(x7)));
      f7=function(formlet)
      {
       return Enhance.WithFormContainer(formlet);
      };
      return f7(x6);
     }
    },
    Main:function()
    {
     var fc,inputRecord,Description,x,f,f1,x1,f2,f3,f4,x2,f5;
     fc=(inputRecord=FormContainerConfiguration.get_Default(),(Description=(x=(f=function(arg0)
     {
      return{
       $:0,
       $0:arg0
      };
     },f("\u0423\u043aa\u0436\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0435 \u0412\u0430\u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(f1=function(arg0)
     {
      return{
       $:1,
       $0:arg0
      };
     },f1(x))),Runtime.New(FormContainerConfiguration,{
      Header:(x1=(f2=function(arg0)
      {
       return{
        $:0,
        $0:arg0
       };
      },f2("\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u0430")),(f3=function(arg0)
      {
       return{
        $:1,
        $0:arg0
       };
      },f3(x1))),
      Padding:inputRecord.Padding,
      Description:Description,
      BackgroundColor:inputRecord.BackgroundColor,
      BorderColor:inputRecord.BorderColor,
      CssClass:inputRecord.CssClass,
      Style:inputRecord.Style
     })));
     f4=(x2=Client.requestFormlet(),(f5=function(formlet)
     {
      return Enhance.WithCustomFormContainer(fc,formlet);
     },f5(x2)));
     return f4.Run(function(order)
     {
      return alert(Remoting.Call("Website:3",[order]));
     });
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  Website=Runtime.Safe(Global.Website);
  Universe=Runtime.Safe(Website.Universe);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Controls=Runtime.Safe(Formlet.Controls);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Enhance=Runtime.Safe(Formlet.Enhance);
  List=Runtime.Safe(WebSharper.List);
  Data=Runtime.Safe(Formlet.Data);
  FormContainerConfiguration=Runtime.Safe(Enhance.FormContainerConfiguration);
  Client=Runtime.Safe(Universe.Client);
  return alert=Runtime.Safe(Global.alert);
 });
 Runtime.OnLoad(function()
 {
 });
}());
