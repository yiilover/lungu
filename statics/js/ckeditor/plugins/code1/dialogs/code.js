(function() {
    CKEDITOR.dialog.add("code1", 
    function(a) {
        return {
            title: "code1",
            minWidth: "500px",
            minHeight:"500px",
            contents: [{
                id: "tab2",
                label: "",
                title: "",
                expand: true,
                width: "500px",
                height: "500px",
                padding: 0,
                elements: [{
                    type: "html",
                    style: "width:500;height:500",
                    html: "插入表格模型二"
                }]
            }],
            onOk: function() {
                //点击确定按钮后的操作
                a.insertHtml("<table width='900' height='191' border='1' cellpadding='0' cellspacing='0'> <tr>  <td height='27'>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td height='26'>&nbsp;</td> <td>&nbsp;</td>  <td>&nbsp;</td>   <td>&nbsp;</td>   <td>&nbsp;</td>   <td>&nbsp;</td>  <td>&nbsp;</td> </tr><tr>  <td height='29'>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td height='29'>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td>   <td>&nbsp;</td>  <td>&nbsp;</td>   <td>&nbsp;</td></tr> <tr>  <td height='29'>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td>  <td>&nbsp;</td> </tr></table>");
            }
        }
    })
})();