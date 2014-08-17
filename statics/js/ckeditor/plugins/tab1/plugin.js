(function(){
//Section 1:按下自定义按钮时执行的代码
var a= { exec:function(editor){editor.insertHtml("<table width='900' height='30' border='1' cellpadding='0' cellspacing='0'><tr><td width='125' align='center'>产品编号</td><td width='125' align='center'>尺寸</td><td width='125' align='center'>ET</td><td width='125' align='center'>PCD</td><td width='125' align='center'>CB</td>   <td width='125' align='center'>颜色工艺</td>  <td width='125' align='center'>库存</td> </tr> </table>");}},//Section 2 : 创建自定义按钮、绑定方法
 b='tab1';CKEDITOR.plugins.add(b,{init:function(editor){editor.addCommand(b,a);editor.ui.addButton('tab1',{label:'tab1',icon:this.path+'code2.gif',command:b });  } 

    }); 

})();