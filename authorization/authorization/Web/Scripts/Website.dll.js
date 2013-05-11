(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Formlet,Controls,Data,Enhance,Formlet1,Html,Default,List,Website,Client,alert,Remoting;
 Runtime.Define(Global,{
  Website:{
   Client:{
    LoginFormlet:Runtime.Field(function()
    {
     var log,x,x1,x2,f,f1,f2,pas,x3,x4,x5,f3,f4,f5,x6,x7,x8,f6,f7;
     log=(x=(x1=(x2=Controls.Input(""),(f=function(arg10)
     {
      return Data.Validator().IsNotEmpty("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d",arg10);
     },f(x2))),(f1=function(formlet)
     {
      return Enhance.WithValidationIcon(formlet);
     },f1(x1))),(f2=function(formlet)
     {
      return Enhance.WithTextLabel("\u041b\u043e\u0433\u0438\u043d",formlet);
     },f2(x)));
     pas=(x3=(x4=(x5=Controls.Password(""),(f3=function(arg10)
     {
      return Data.Validator().IsNotEmpty("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",arg10);
     },f3(x5))),(f4=function(formlet)
     {
      return Enhance.WithValidationIcon(formlet);
     },f4(x4))),(f5=function(formlet)
     {
      return Enhance.WithTextLabel("\u041f\u0430\u0440\u043e\u043b\u044c",formlet);
     },f5(x3)));
     x6=(x7=Data.$(Data.$((x8=function(l)
     {
      return function(p)
      {
       return{
        login:l,
        passw:p
       };
      };
     },Formlet1.Return(x8)),log),pas),(f6=function(formlet)
     {
      return Enhance.WithSubmitButton(formlet);
     },f6(x7)));
     f7=function(formlet)
     {
      return Enhance.WithFormContainer(formlet);
     };
     return f7(x6);
    }),
    MyControl:Runtime.Class({
     get_Body:function()
     {
      return Default.Div(List.ofArray([Client.LoginFormlet().Run(function(userInformation)
      {
       return alert(Remoting.Call("Website:5",[userInformation]));
      })]));
     }
    }),
    Request:Runtime.Class({
     get_Body:function()
     {
      return Default.Div(List.ofArray([Client.requestFormlet().Run(function(t)
      {
       return alert(Remoting.Call("Website:4",[t]));
      })]));
     }
    }),
    requestFormlet:Runtime.Field(function()
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
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Controls=Runtime.Safe(Formlet.Controls);
  Data=Runtime.Safe(Formlet.Data);
  Enhance=Runtime.Safe(Formlet.Enhance);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  Website=Runtime.Safe(Global.Website);
  Client=Runtime.Safe(Website.Client);
  alert=Runtime.Safe(Global.alert);
  return Remoting=Runtime.Safe(WebSharper.Remoting);
 });
 Runtime.OnLoad(function()
 {
  Client.requestFormlet();
  Client.LoginFormlet();
 });
}());
