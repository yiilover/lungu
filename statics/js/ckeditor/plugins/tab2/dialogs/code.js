(function() {
    CKEDITOR.dialog.add("tab2", 
    function(a) {
        return {
            title: "tab2",
            minWidth: "500px",
            minHeight:"500px",
            contents: [{
                id: "tab4",
                label: "",
                title: "",
                expand: true,
                width: "500px",
                height: "500px",
                padding: 0,
                elements: [{
                    type: "html",
                    style: "width:500px;height:500px",
                    html: "������ģ��һͷ��"
                }]
            }],
            onOk: function() {
                //���ȷ����ť��Ĳ���
                a.insertHtml("<table width='900' height='30' border='1' cellpadding='0' cellspacing='0'><tr><td width='175' height='31' align='center'>��Ʒͼ</td><td width='146' align='center'>��Ʒ���</td><td width='124' align='center'>�ߴ�</td><td width='99' align='center'>ET</td><td width='97' align='center'>PCD</td><td width='73' align='center'>CB</td>   <td width='85' align='center'>��ɫ����</td>  <td width='83' align='center'>���</td> </tr> </table>");
            }
        }
    })
})();