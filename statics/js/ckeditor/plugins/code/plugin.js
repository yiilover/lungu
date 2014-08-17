(function(){
//Section 1:按下自定义按钮时执行的代码
var a= { exec:function(editor){editor.insertHtml("<table width='900' height='191' border='1' cellpadding='0' cellspacing='0'><tr> <td rowspan='6' width='175'><div style='width:175px; height:175px; overflow:hidden'><img src='' width='175' height='175' /></div></td> <td height='27' width='146'>&nbsp;</td> <td width='124'>&nbsp;</td> <td width='100'>&nbsp;</td> <td width='97'>&nbsp;</td>  <td width='76'>&nbsp;</td> <td width='90'>&nbsp;</td> <td width='83'>&nbsp;</td> </tr> <tr> <td height='26'>&nbsp;</td> <td>&nbsp;</td>  <td>&nbsp;</td>   <td>&nbsp;</td>   <td>&nbsp;</td>   <td>&nbsp;</td>  <td>&nbsp;</td> </tr><tr>  <td height='29'>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td height='29'>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td>   <td>&nbsp;</td>  <td>&nbsp;</td>   <td>&nbsp;</td></tr> <tr>  <td height='29'>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td>  <td>&nbsp;</td> </tr></table>&nbsp;");}},//Section 2 : 创建自定义按钮、绑定方法
 b='code';CKEDITOR.plugins.add(b,{init:function(editor){editor.addCommand(b,a);editor.ui.addButton('code',{label:'code',icon:this.path+'code.gif',command:b });  } 

    }); 

})();