# dialog
js dialog弹窗
例子见[DEMO](http://www.lovewebgames.com/jsmodule/dialog.html)  
#用法
		<input type="button" id="btn_dialog" value="打开浮层"/>
		<div id="dialog-content" style="display:none;">这是内容</div>
		<script src="../src/jquery-1.9.1.min.js"></script>
		<script src="../src/dialog.js"></script>
		<script>
			var dialog = new Dialog();
			dialog.init({target:"#dialog-content",trigger:"#btn_dialog",mask:true,width:500,height:300,title:'标题'});
		</script>
##或者用jquery方式调用:
		<input type="button" id="btn_dialogjquery" value="jq打开浮层"/>
		<div id="dialog-contentjq" style="display:none;">这是内容22</div>
		<script src="../src/dialog-jquery.js"></script>
		<script>
		$('#btn_dialogjquery').Dialog({target:"#dialog-contentjq",mask:true,width:500,height:300,title:'标题'})
		</script>
#属性或方法
##属性
###trigger:
		触发对象
###target:
		弹出内容，可以为#id,或者jquery对象
###mask:
		是否有遮罩层
###title:
		标题
###zIndex:
		z-index
###closeTpl:
		关闭html(默认:<span class="ui-dialog-close js-dialog-close">x</span>)
###titleTpl:
		标题html(默认：<div class="ui-dialog-title"></div>) 
##方法及回调
###show:
		显示弹层
###hide:
		隐藏
###beforeShow：function(content)
		显示前的方法回调,content是浮层内容对象
###beforeHide：function(content)
		隐藏前的方法回调,content是浮层内容对象
###setPosition:function()
		设置位置居中