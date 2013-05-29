(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Formlet,Formlet1,List,Controls,Enhance,Website,Manager,Client,Html,Default,Remoting,FormContainerConfiguration;
 Runtime.Define(Global,{
  Website:{
   Manager:{
    Client:{
     QuestionnaireFormlet:Runtime.Field(function()
     {
      var x,x1,x2,x3,x4,f,f1,f2,x5,x6,x7,f3,f4,f5,x8,x9,xa,f6,f7,f8,xb,xc,xd,f9,fa,fb,xe,xf,x10,fc,fd,fe,x11,x12,x13,ff,f10,f11,x14,x15,x16,f12,f13,f14,x17,x18,x19,f15,f16,f17,x1a,x1b,x1c,f18,f19,f1a,x1d,x1e,x1f,f1b,f1c,f1d,f1e,f1f;
      x=(x1=Formlet1.Sequence(List.ofArray([(x2=(x3=(x4=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1",1],["2",2],["3",3],["4",4],["5",5]])),(f=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f(x4))),(f1=function(formlet)
      {
       return Enhance.WithValidationIcon(formlet);
      },f1(x3))),(f2=function(formlet)
      {
       return Enhance.WithLegend("1) \u042f \u0431\u044b \u0445\u043e\u0442\u0435\u043b(\u0430) \u0435\u0449\u0435 \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439.",formlet);
      },f2(x2))),(x5=(x6=(x7=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1",1],["2",2],["3",3],["4",4],["5",5]])),(f3=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f3(x7))),(f4=function(formlet)
      {
       return Enhance.WithValidationIcon(formlet);
      },f4(x6))),(f5=function(formlet)
      {
       return Enhance.WithLegend("2) \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0441\u043b\u043e\u0436\u043d\u0430\u044f.",formlet);
      },f5(x5))),(x8=(x9=(xa=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1",1],["2",2],["3",3],["4",4],["5",5]])),(f6=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f6(xa))),(f7=function(formlet)
      {
       return Enhance.WithValidationIcon(formlet);
      },f7(x9))),(f8=function(formlet)
      {
       return Enhance.WithLegend("3) \u042d\u0442\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439 \u043b\u0435\u0433\u043a\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f.",formlet);
      },f8(x8))),(xb=(xc=(xd=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1",1],["2",2],["3",3],["4",4],["5",5]])),(f9=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f9(xd))),(fa=function(formlet)
      {
       return Enhance.WithValidationIcon(formlet);
      },fa(xc))),(fb=function(formlet)
      {
       return Enhance.WithLegend("4) \u041c\u043d\u0435 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u043f\u043e\u043c\u043e\u0449\u044c, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439.",formlet);
      },fb(xb))),(xe=(xf=(x10=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1",1],["2",2],["3",3],["4",4],["5",5]])),(fc=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },fc(x10))),(fd=function(formlet)
      {
       return Enhance.WithValidationIcon(formlet);
      },fd(xf))),(fe=function(formlet)
      {
       return Enhance.WithLegend("5) \u0420\u0430\u0437\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u044b.",formlet);
      },fe(xe))),(x11=(x12=(x13=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1",1],["2",2],["3",3],["4",4],["5",5]])),(ff=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },ff(x13))),(f10=function(formlet)
      {
       return Enhance.WithValidationIcon(formlet);
      },f10(x12))),(f11=function(formlet)
      {
       return Enhance.WithLegend("6) \u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u043d\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0439.",formlet);
      },f11(x11))),(x14=(x15=(x16=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1",1],["2",2],["3",3],["4",4],["5",5]])),(f12=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f12(x16))),(f13=function(formlet)
      {
       return Enhance.WithValidationIcon(formlet);
      },f13(x15))),(f14=function(formlet)
      {
       return Enhance.WithLegend("7) \u0411\u043e\u043b\u044c\u0448\u0410\u044f \u0447\u0430\u0441\u0442\u044c \u043b\u044e\u0434\u0435\u0439 \u043e\u0447\u0435\u043d\u044c \u0431\u044b\u0441\u0442\u0440\u043e \u043d\u0430\u0443\u0447\u0438\u0442\u0441\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439.",formlet);
      },f14(x14))),(x17=(x18=(x19=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1",1],["2",2],["3",3],["4",4],["5",5]])),(f15=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f15(x19))),(f16=function(formlet)
      {
       return Enhance.WithValidationIcon(formlet);
      },f16(x18))),(f17=function(formlet)
      {
       return Enhance.WithLegend("8) \u042d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0447\u0435\u043d\u044c \u0442\u0440\u0443\u0434\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c.",formlet);
      },f17(x17))),(x1a=(x1b=(x1c=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1",1],["2",2],["3",3],["4",4],["5",5]])),(f18=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f18(x1c))),(f19=function(formlet)
      {
       return Enhance.WithValidationIcon(formlet);
      },f19(x1b))),(f1a=function(formlet)
      {
       return Enhance.WithLegend("9) \u042f \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e \u0441\u0435\u0431\u044f \u0447\u0443\u0432\u0442\u0432\u043e\u0432\u0430\u043b(\u0430), \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u044d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.",formlet);
      },f1a(x1a))),(x1d=(x1e=(x1f=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["1",1],["2",2],["3",3],["4",4],["5",5]])),(f1b=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f1b(x1f))),(f1c=function(formlet)
      {
       return Enhance.WithValidationIcon(formlet);
      },f1c(x1e))),(f1d=function(formlet)
      {
       return Enhance.WithLegend("10) \u041c\u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u043c\u043d\u043e\u0433\u043e\u043c\u0443 \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u044f \u0441\u043c\u043e\u0433(\u043b\u0430) \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c.",formlet);
      },f1d(x1d)))])),(f1e=function(formlet)
      {
       return Enhance.WithFormContainer(formlet);
      },f1e(x1)));
      f1f=function(formlet)
      {
       return Enhance.WithLegend("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0412\u0430\u0448\u0435\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u0441 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f\u043c\u0438 \u0430\u043d\u043a\u0435\u0442\u044b, \u0433\u0434\u0435 1 - \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d(\u0441\u043d\u0430), 5 - \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u0430.",formlet);
      };
      return f1f(x);
     }),
     Resulting:Runtime.Field(function()
     {
      var _builder_;
      _builder_=Formlet1.Do();
      return _builder_.Delay(function()
      {
       return _builder_.Bind(Client.StateForm(),function(_arg5)
       {
        return _builder_.Bind(Client.taskChallenger(),function(_arg4)
        {
         return _builder_.Bind(Client.QuestionnaireFormlet(),function(_arg3)
         {
          var x,f,f1;
          return _builder_.ReturnFrom((x=Formlet1.OfElement(function()
          {
           return Default.Div(List.ofArray([Default.Text("\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u041d\u0430\u043c \u0432\u0430\u0436\u043d\u043e \u0412\u0430\u0448\u0435 \u043c\u043d\u0435\u043d\u0438\u0435.")]));
          }),(f=(f1=function()
          {
           return{
            status:_arg5,
            success:_arg4,
            answers:_arg3
           };
          },function(formlet)
          {
           return Formlet1.Map(f1,formlet);
          }),f(x))));
         });
        });
       });
      });
     }),
     StateForm:Runtime.Field(function()
     {
      var stat,x,f;
      stat=Remoting.Call("Website:1",[]);
      x=Controls.Select(0,stat);
      f=function(formlet)
      {
       return Enhance.WithTextLabel("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0412\u0430\u0448 \u0441\u0442\u0430\u0442\u0443\u0441",formlet);
      };
      return f(x);
     }),
     TaskWindow:function(task)
     {
      var x,x1,x2,f,f1,f2;
      x=(x1=(x2=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["\u041f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c!",0],["\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c",1]])),(f=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f(x2))),(f1=function(formlet)
      {
       return Enhance.WithLegend(task,formlet);
      },f1(x1)));
      f2=function(formlet)
      {
       return Enhance.WithTextLabel("\u0417\u0430\u0434\u0430\u043d\u0438\u0435",formlet);
      };
      return f2(x);
     },
     gen:Runtime.Field(function()
     {
      var basis,x,x1,f,f1,_builder_;
      basis=(x=(x1=Controls.RadioButtonGroup({
       $:0
      },List.ofArray([["\u0434\u0440\u0443\u0433\u0443\u044e \u0437\u0430\u0447\u0430\u0434\u0443",0],["\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0430\u043d\u043a\u0435\u0442\u0435",1]])),(f=function(formlet)
      {
       return Formlet1.Horizontal(formlet);
      },f(x1))),(f1=function(formlet)
      {
       return Enhance.WithLegend("\u0425\u043e\u0442\u0438\u0442\u0435 \u043b\u0438 \u0412\u044b \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0448\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0430\u043d\u043a\u0435\u0442\u0435?",formlet);
      },f1(x)));
      _builder_=Formlet1.Do();
      return _builder_.Delay(function()
      {
       return _builder_.Bind(basis,function(_arg1)
       {
        if(_arg1===0)
         {
          return _builder_.ReturnFrom(Client.TaskWindow("\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443, \u0447\u0442\u043e\u0431\u044b \u0440\u043e\u0431\u043e\u0442 \u043f\u0440\u043e\u0435\u0445\u0430\u043b \u043f\u043e \u043b\u0438\u043d\u0438\u0438."));
         }
        else
         {
          return _builder_.Return(1);
         }
       });
      });
     }),
     taskChallenger:function()
     {
      var x,_builder_,f;
      x=(_builder_=Formlet1.Do(),_builder_.Delay(function()
      {
       return _builder_.Bind(Client.TaskWindow("\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443, \u0447\u0442\u043e\u0431\u044b \u0440\u043e\u0431\u043e\u0442 \u0434\u043e\u0435\u0445\u0430\u043b \u0434\u043e \u0441\u0442\u0435\u043d\u043a\u0438 \u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0441\u044f."),function(_arg2)
       {
        if(_arg2===0)
         {
          return _builder_.Return(0);
         }
        else
         {
          return _builder_.ReturnFrom(Client.gen());
         }
       });
      }));
      f=function(formlet)
      {
       return Formlet1.Flowlet(formlet);
      };
      return f(x);
     }
    },
    Main:function()
    {
     var formContainer,inputRecord,Description,x,f,f1,x1,f2,f3,f4,x2,f5;
     formContainer=(inputRecord=FormContainerConfiguration.get_Default(),(Description=(x=(f=function(arg0)
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
     f4=(x2=Client.Resulting(),(f5=function(formlet)
     {
      return Enhance.WithCustomFormContainer(formContainer,formlet);
     },f5(x2)));
     return Default.Div(List.ofArray([f4.Run(function(y)
     {
      return Remoting.Call("Website:3",[y]);
     })]));
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
  Website=Runtime.Safe(Global.Website);
  Manager=Runtime.Safe(Website.Manager);
  Client=Runtime.Safe(Manager.Client);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  return FormContainerConfiguration=Runtime.Safe(Enhance.FormContainerConfiguration);
 });
 Runtime.OnLoad(function()
 {
  Client.gen();
  Client.StateForm();
  Client.Resulting();
  Client.QuestionnaireFormlet();
 });
}());
