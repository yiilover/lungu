(function() {
    CKEDITOR.plugins.add("code3", {
        requires: ["dialog"],
        init: function(a) {
            a.addCommand("code3", new CKEDITOR.dialogCommand("code3"));
            a.ui.addButton("code3", {
                label: "������ģ��һͷ��",//����dialogʱ��ʾ������
                command: "code3",
				width:"40px",
                icon: this.path + "code3.gif"//��toolbar�е�ͼ��
 
            });
            CKEDITOR.dialog.add("code3", this.path + "dialogs/code.js")
 
        }
 
    })
 
})();