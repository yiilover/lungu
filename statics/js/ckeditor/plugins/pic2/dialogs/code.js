(function() {
    CKEDITOR.dialog.add("pic2", 
    function(a) {
        return {
            title: "pic2",
            minWidth: "500px",
            minHeight:"500px",
            contents: [{
                id: "tab14",
                label: "",
                title: "",
                expand: true,
                width: "500px",
                height: "500px",
                padding: 0,
                elements: [{
                    type: "html",
                    style: "width:500px;height:500px",
                    html: "插入整列图片"
                }]
            }],
            onOk: function() {
                //点击确定按钮后的操作
                a.insertHtml("<table width='900' border='1' height='175'><tr><td width='350'><img src='' width='350' height='175' /></td><td width='300'><img src='' width='300' height='175' /></td><td width='250'><img src='' width='250' height='170' /></td></tr></table>");
            }
        }
    })
})();