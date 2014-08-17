(function() {
    CKEDITOR.dialog.add("code", 
    function(a) {
        return {
            title: "code",
            minWidth: "500px",
            minHeight:"500px",
            contents: [{
                id: "tab00",
                label: "",
                title: "",
                expand: true,
                width: "500px",
                height: "500px",
                padding: 0,
                elements: [{
                    type: "html",
                    style: "width:500;height:500",
                    html: "插入表格模型一"
                }]
            }],
            onOk: function() {
                //点击确定按钮后的操作
				 a.insertHtml("<table width='900' height='191' border='1' cellpadding='0' cellspacing='0'><tr> <td rowspan='6' width='175'><div style='width:175px; height:175px; overflow:hidden'><img src='' width='175' height='175' /></div></td> <td height='27' width='146'>&nbsp;</td> <td width='124'>&nbsp;</td> <td width='99'>&nbsp;</td> <td width='97'>&nbsp;</td>  <td width='73'>&nbsp;</td> <td width='85'>&nbsp;</td> <td width='83'>&nbsp;</td> </tr> <tr> <td height='26'>&nbsp;</td> <td>&nbsp;</td>  <td>&nbsp;</td>   <td>&nbsp;</td>   <td>&nbsp;</td>   <td>&nbsp;</td>  <td>&nbsp;</td> </tr><tr>  <td height='29'>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td height='29'>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td>   <td>&nbsp;</td>  <td>&nbsp;</td>   <td>&nbsp;</td></tr> <tr>  <td height='29'>&nbsp;</td>  <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td>  <td>&nbsp;</td> </tr></table>");     }     }  })})();