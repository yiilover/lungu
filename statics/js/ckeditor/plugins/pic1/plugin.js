(function(){
//Section 1:�����Զ��尴ťʱִ�еĴ���
var a= { exec:function(editor){editor.insertHtml("<table width='900' border='1' cellpadding='0' cellspacing='0'  height='175'><tr><td width='175'><img src='' width='175' height='175' /></td><td width='175'><img src='' width='175' height='175' /></td><td width='175'><img src='' width='175' height='175' /></td><td width='175'><img src='' width='175' height='170' /></td><td width='170'><img src='' width='170' height='175' /></td></tr></table>&nbsp;");}},//Section 2 : �����Զ��尴ť���󶨷���
 b='pic1';CKEDITOR.plugins.add(b,{init:function(editor){editor.addCommand(b,a);editor.ui.addButton('pic1',{label:'pic1',icon:this.path+'code2.gif',command:b });  } 

    }); 

})();