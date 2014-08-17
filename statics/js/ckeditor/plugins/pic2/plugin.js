(function(){
//Section 1:按下自定义按钮时执行的代码
var a= { exec:function(editor){editor.insertHtml("<table width='900' cellpadding='0' cellspacing='0' border='1' height='175'><tr><td width='350'><img src='' width='350' height='175' /></td><td width='300'><img src='' width='300' height='175' /></td><td width='240'><img src='' width='240' height='170' /></td></tr></table>&nbsp;");}},//Section 2 : 创建自定义按钮、绑定方法
 b='pic2';CKEDITOR.plugins.add(b,{init:function(editor){editor.addCommand(b,a);editor.ui.addButton('pic2',{label:'pic2',icon:this.path+'code3.gif',command:b });  } 

    }); 

})();