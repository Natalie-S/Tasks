(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Formlet,Formlet1,List,Controls,Enhance,Remoting,Data,FormContainerConfiguration,Website,Manager,Client;
 Runtime.Define(Global,{
  Website:{
   Manager:{
    Client:{
     TasksFormlet:function()
     {
      var TaskWindow,x,x1,f,f1,ChoiceWindow,x2,f2,StateForm,stat,x3,f3,QestionnaireFormlet,x4,f4,x5,f5,x6;
      TaskWindow=Formlet1.Sequence(List.ofArray([(x=(x1=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["\u041f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c!",0],["\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c",1]])),(f=function(formlet)
      {
       return Enhance.WithLegend("\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443, \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0440\u043e\u0431\u043e\u0442 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0432 10 \u0441\u043c \u043e\u0442 \u0441\u0442\u0435\u043d\u044b",formlet);
      },f(x1))),(f1=function(formlet)
      {
       return Enhance.WithTextLabel("\u0417\u0430\u0434\u0430\u043d\u0438\u0435",formlet);
      },f1(x)))]));
      ChoiceWindow=(x2=Formlet1.Sequence(List.ofArray([Controls.Button("\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443."),Controls.Button("\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0430\u043d\u043a\u0435\u0442\u0435.")])),(f2=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f2(x2)));
      StateForm=(stat=Remoting.Call("Website:0",[]),(x3=Controls.Select(0,stat),(f3=function(formlet)
      {
       return Enhance.WithTextLabel("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0412\u0430\u0448 \u0441\u0442\u0430\u0442\u0443\u0441",formlet);
      },f3(x3))));
      QestionnaireFormlet=Formlet1.Sequence(List.ofArray([(x4=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1","1"],["2","2"],["3","3"],["4","4"],["5","5"]])),(f4=function(formlet)
      {
       return Enhance.WithLegend("1) \u042f \u0431\u044b \u0445\u043e\u0442\u0435\u043b(\u0430) \u0435\u0449\u0435 \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439.",formlet);
      },f4(x4))),(x5=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1","1"],["2","2"],["3","3"],["4","4"],["5","5"]])),(f5=function(formlet)
      {
       return Enhance.WithLegend("2) \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0441\u043b\u043e\u0436\u043d\u0430\u044f.",formlet);
      },f5(x5)))]));
      return Data.$(Data.$(Data.$(Data.$((x6=function()
      {
       return function()
       {
        return function()
        {
         return function()
         {
          return"hello";
         };
        };
       };
      },Formlet1.Return(x6)),StateForm),TaskWindow),ChoiceWindow),QestionnaireFormlet);
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
     },f("\u0410\u043d\u043a\u0435\u0442\u0430 \u0434\u043b\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u044e\u0437\u0430\u0431\u0438\u043b\u0438\u0442\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 QReal:Robots")),(f1=function(arg0)
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
      },f2("\u0410\u043d\u043a\u0435\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")),(f3=function(arg0)
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
     f4=(x2=Client.TasksFormlet(),(f5=function(formlet)
     {
      return Enhance.WithCustomFormContainer(fc,formlet);
     },f5(x2)));
     return Formlet1.Run(function()
     {
      return null;
     },f4);
    }
   },
   MyControl:Runtime.Class({
    get_Body:function()
    {
     return Manager.Main();
    }
   })
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  List=Runtime.Safe(WebSharper.List);
  Controls=Runtime.Safe(Formlet.Controls);
  Enhance=Runtime.Safe(Formlet.Enhance);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Data=Runtime.Safe(Formlet.Data);
  FormContainerConfiguration=Runtime.Safe(Enhance.FormContainerConfiguration);
  Website=Runtime.Safe(Global.Website);
  Manager=Runtime.Safe(Website.Manager);
  return Client=Runtime.Safe(Manager.Client);
 });
 Runtime.OnLoad(function()
 {
 });
}());
