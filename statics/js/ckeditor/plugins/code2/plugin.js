(function() {
    CKEDITOR.plugins.add("code2", {
        requires: ["dialog"],
        init: function(a) {
            a.addCommand("code1", new CKEDITOR.dialogCommand("code2"));
            a.ui.addButton("code2", {
                label: "插入表格模型二头部",//调用dialog时显示的名称
                command: "code2",
				width:"40px",
                icon: this.path + "code2.gif"//在toolbar中的图标
 
            });
            CKEDITOR.dialog.add("code2", this.path + "dialogs/code.js")
 
        }
 
    })
 
})();