(function(){
//Section 1:�����Զ��尴ťʱִ�еĴ���
var a= { exec:function(editor){editor.insertHtml("<table width='900' height='30' border='1' cellpadding='0' cellspacing='0'><tr><td width='125' align='center'>��Ʒ���</td><td width='125' align='center'>�ߴ�</td><td width='125' align='center'>ET</td><td width='125' align='center'>PCD</td><td width='125' align='center'>CB</td>   <td width='125' align='center'>��ɫ����</td>  <td width='125' align='center'>���</td> </tr> </table>");}},//Section 2 : �����Զ��尴ť���󶨷���
 b='tab1';CKEDITOR.plugins.add(b,{init:function(editor){editor.addCommand(b,a);editor.ui.addButton('tab1',{label:'tab1',icon:this.path+'code2.gif',command:b });  } 

    }); 

})();