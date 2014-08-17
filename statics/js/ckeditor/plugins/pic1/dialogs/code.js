(function() {
    CKEDITOR.dialog.add("pic1", 
    function(a) {
        return {
            title: "pic1",
            minWidth: "500px",
            minHeight:"500px",
            contents: [{
                id: "tab13",
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
                a.insertHtml("<table width='900' border='1' height='175'><tr><td width='175'><img src='' width='175' height='175' /></td><td width='175'><img src='' width='175' height='175' /></td><td width='175'><img src='' width='175' height='175' /></td><td width='170'><img src='' width='175' height='170' /></td><td width='170'><img src='' width='170' height='175' /></td></tr></table>");
            }
        }
    })
})();