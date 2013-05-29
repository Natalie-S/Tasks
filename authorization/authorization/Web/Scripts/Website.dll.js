(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,Client,WebSharper,Formlet,Formlet1,Remoting,Unchecked,Html,Default,List,Controls,Data,Enhance,T;
 Runtime.Define(Global,{
  Website:{
   Client:{
    All:Runtime.Class({
     get_Body:function()
     {
      return Client.allData();
     }
    }),
    Dep:function()
    {
     var x,_builder_,f;
     x=(_builder_=Formlet1.Do(),_builder_.Delay(function()
     {
      return _builder_.Bind(Client.LoginFormlet(),function(_arg2)
      {
       var boo;
       boo=Remoting.Call("Website:5",[_arg2]);
       if(Unchecked.Equals(boo,true))
        {
         Remoting.Call("Website:7",[_arg2]);
         return _builder_.ReturnFrom(Client.allData());
        }
       else
        {
         return _builder_.ReturnFrom(Formlet1.OfElement(function()
         {
          return Default.Div(List.ofArray([Default.Text("\u0412\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443!")]));
         }));
        }
      });
     }));
     f=function(formlet)
     {
      return Formlet1.Flowlet(formlet);
     };
     return f(x);
    },
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
      return Client.Dep();
     }
    }),
    Request:Runtime.Class({
     get_Body:function()
     {
      return Client.RequiredData();
     }
    }),
    RequiredData:function()
    {
     var _builder_;
     _builder_=Formlet1.Do();
     return _builder_.Delay(function()
     {
      return _builder_.Bind(Client.requestFormlet(),function(_arg1)
      {
       var r,avg,divs,f,mapping,average,header,x,a,b,f1;
       r=Remoting.Call("Website:3",[_arg1]);
       avg=Remoting.Call("Website:2",[_arg1]);
       divs=(f=(mapping=Runtime.Tupled(function(tupledArg)
       {
        var name,success,summary;
        name=tupledArg[0];
        success=tupledArg[1];
        summary=tupledArg[2];
        return Default.TR(List.ofArray([Default.TD(List.ofArray([Default.Text(name)])),success===0?Default.TD(List.ofArray([Default.Text("\u0440\u0435\u0448\u0438\u043b")])):Default.TD(List.ofArray([Default.Text("\u043d\u0435 \u0440\u0435\u0448\u0438\u043b")])),Default.TD(List.ofArray([Default.Text(summary)]))]));
       }),function(list)
       {
        return List.map(mapping,list);
       }),f(r));
       average=Default.TR(List.ofArray([Default.TD(List.ofArray([Default.Text("\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0431\u0430\u043b: ")])),Default.TD(List.ofArray([Default.Text("")])),Default.TD(List.ofArray([Default.Text(avg)]))]));
       header=(x=(a=Runtime.New(T,{
        $:1,
        $0:Default.TR(List.ofArray([Default.TH(List.ofArray([Default.Text("\u0421\u0442\u0430\u0442\u0443\u0441")])),Default.TH(List.ofArray([Default.Text("\u0423\u0441\u043f\u0435\u0448\u043d\u043e\u0441\u0442\u044c")])),Default.TH(List.ofArray([Default.Text("\u0411\u0430\u043b \u0430\u043d\u043a\u0435\u0442\u044b")]))])),
        $1:divs
       }),(b=List.ofArray([average]),List.append(a,b))),(f1=function(list)
       {
        return list;
       },f1(x)));
       return _builder_.ReturnFrom(Formlet1.OfElement(function()
       {
        return Default.Table(header);
       }));
      });
     });
    },
    allData:function()
    {
     var _builder_;
     _builder_=Formlet1.Do();
     return _builder_.Delay(function()
     {
      var r,divs,f,mapping,y,average,all,x,a,b,f1;
      r=Remoting.Call("Website:1",[]);
      divs=(f=(mapping=Runtime.Tupled(function(tupledArg)
      {
       var name,success,summary;
       name=tupledArg[0];
       success=tupledArg[1];
       summary=tupledArg[2];
       return Default.TR(List.ofArray([Default.TD(List.ofArray([Default.Text(name)])),success===0?Default.TD(List.ofArray([Default.Text("\u0440\u0435\u0448\u0438\u043b")])):Default.TD(List.ofArray([Default.Text("\u043d\u0435 \u0440\u0435\u0448\u0438\u043b")])),Default.TD(List.ofArray([Default.Text(summary)]))]));
      }),function(list)
      {
       return List.map(mapping,list);
      }),f(r));
      y=Remoting.Call("Website:4",[]);
      average=Default.TR(List.ofArray([Default.TD(List.ofArray([Default.Text("\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0431\u0430\u043b: ")])),Default.TD(List.ofArray([Default.Text("")])),Default.TD(List.ofArray([Default.Text(y)]))]));
      all=(x=(a=Runtime.New(T,{
       $:1,
       $0:Default.TR(List.ofArray([Default.TH(List.ofArray([Default.Text("\u0421\u0442\u0430\u0442\u0443\u0441")])),Default.TH(List.ofArray([Default.Text("\u0423\u0441\u043f\u0435\u0448\u043d\u043e\u0441\u0442\u044c")])),Default.TH(List.ofArray([Default.Text("\u0411\u0430\u043b \u0430\u043d\u043a\u0435\u0442\u044b")]))])),
       $1:divs
      }),(b=List.ofArray([average]),List.append(a,b))),(f1=function(list)
      {
       return list;
      },f1(x)));
      return _builder_.ReturnFrom(Formlet1.OfElement(function()
      {
       return Default.Table(all);
      }));
     });
    },
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
      return Enhance.WithLegend("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0445 \u0412\u0430\u0441 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432",formlet);
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
     fourth=(x5=Controls.Input("\u0441\u0435\u0433\u043e\u0434\u043d\u044f"),(f5=function(formlet)
     {
      return Enhance.WithTextLabel("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",formlet);
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
  Website=Runtime.Safe(Global.Website);
  Client=Runtime.Safe(Website.Client);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Unchecked=Runtime.Safe(WebSharper.Unchecked);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  Controls=Runtime.Safe(Formlet.Controls);
  Data=Runtime.Safe(Formlet.Data);
  Enhance=Runtime.Safe(Formlet.Enhance);
  return T=Runtime.Safe(List.T);
 });
 Runtime.OnLoad(function()
 {
  Client.requestFormlet();
  Client.LoginFormlet();
 });
}());
