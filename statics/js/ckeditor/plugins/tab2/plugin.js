(function(){
//Section 1:�����Զ��尴ťʱִ�еĴ���
var a= { exec:function(editor){editor.insertHtml("<table width='900' height='30' border='1' cellpadding='0' cellspacing='0'><tr><td width='175' height='31' align='center'>��Ʒͼ</td><td width='146' align='center'>��Ʒ���</td><td width='124' align='center'>�ߴ�</td><td width='100' align='center'>ET</td><td width='97' align='center'>PCD</td><td width='76' align='center'>CB</td>   <td width='90' align='center'>��ɫ����</td>  <td width='83' align='center'>���</td> </tr> </table>&nbsp;&nbsp;");}},//Section 2 : �����Զ��尴ť���󶨷���
 b='tab2';CKEDITOR.plugins.add(b,{init:function(editor){editor.addCommand(b,a);editor.ui.addButton('tab2',{label:'tab2',icon:this.path+'code3.gif',command:b });  } 

    }); 

})();