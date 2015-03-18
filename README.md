# dialog
js dialog弹窗
#用法
		<input type="button" id="btn_dialog" value="打开浮层"/>
		<div id="dialog-content" style="display:none;">这是内容</div>
		<script src="../src/jquery-1.9.1.min.js"></script>
		<script src="../src/dialog.js"></script>
		<script>
		var dialog = new Dialog();
		dialog.init({target:"#dialog-content",trigger:"#btn_dialog",mask:true,width:500,height:300});
		</script>