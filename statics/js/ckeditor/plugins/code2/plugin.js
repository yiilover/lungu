(function() {
    CKEDITOR.plugins.add("code2", {
        requires: ["dialog"],
        init: function(a) {
            a.addCommand("code1", new CKEDITOR.dialogCommand("code2"));
            a.ui.addButton("code2", {
                label: "������ģ�Ͷ�ͷ��",//����dialogʱ��ʾ������
                command: "code2",
				width:"40px",
                icon: this.path + "code2.gif"//��toolbar�е�ͼ��
 
            });
            CKEDITOR.dialog.add("code2", this.path + "dialogs/code.js")
 
        }
 
    })
 
})();