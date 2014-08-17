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
                    html: "插入表格模型一头部"
                }]
            }],
            onOk: function() {
                //点击确定按钮后的操作
                a.insertHtml("<table width='900' height='30' border='1' cellpadding='0' cellspacing='0'><tr><td width='175' height='31' align='center'>产品图</td><td width='146' align='center'>产品编号</td><td width='124' align='center'>尺寸</td><td width='99' align='center'>ET</td><td width='97' align='center'>PCD</td><td width='73' align='center'>CB</td>   <td width='85' align='center'>颜色工艺</td>  <td width='83' align='center'>库存</td> </tr> </table>");
            }
        }
    })
})();