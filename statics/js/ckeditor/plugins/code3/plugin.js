(function() {
    CKEDITOR.plugins.add("code3", {
        requires: ["dialog"],
        init: function(a) {
            a.addCommand("code3", new CKEDITOR.dialogCommand("code3"));
            a.ui.addButton("code3", {
                label: "插入表格模型一头部",//调用dialog时显示的名称
                command: "code3",
				width:"40px",
                icon: this.path + "code3.gif"//在toolbar中的图标
 
            });
            CKEDITOR.dialog.add("code3", this.path + "dialogs/code.js")
 
        }
 
    })
 
})();