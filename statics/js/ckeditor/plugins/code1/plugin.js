(function(){
//Section 1:按下自定义按钮时执行的代码
var a= { exec:function(editor){editor.insertHtml("<table width='900' height='191' border='1' cellpadding='0' cellspacing='0'> <tr>  <td height='27' width='125'>&nbsp;</td> <td width='125'>&nbsp;</td> <td width='125'>&nbsp;</td> <td width='125'>&nbsp;</td>  <td width='125'>&nbsp;</td> <td width='125'>&nbsp;</td> <td width='125'>&nbsp;</td> </tr> <tr> <td height='26'>&nbsp;</td> <td>&nbsp;</td>  <td>&nbsp;</td>   <td>&nbsp;</td>   <td>&nbsp;</td>   <td>&nbsp;</td>  <td>&nbsp;</td> </tr><tr>  <td height='29'>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td height='29'>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td>   <td>&nbsp;</td>  <td>&nbsp;</td>   <td>&nbsp;</td></tr> <tr>  <td height='29'>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td>  <td>&nbsp;</td> </tr></table>&nbsp;");}},//Section 2 : 创建自定义按钮、绑定方法
 b='code1';CKEDITOR.plugins.add(b,{init:function(editor){editor.addCommand(b,a);editor.ui.addButton('code1',{label:'code1',icon:this.path+'code1.gif',command:b });  } 

    }); 

})();