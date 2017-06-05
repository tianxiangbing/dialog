# dialog
js dialog弹窗
例子见[DEMO](http://www.lovewebgames.com/jsmodule/dialog.html)  

# 用法

	<link rel="stylesheet" type="text/css" href="../dist/dialog.css">
	<input type="button" id="btn_dialog" value="打开浮层"/>
	<div id="dialog-content" style="display:none;">这是内容</div>
	<script src="../src/jquery-1.9.1.min.js"></script>
	<script src="../src/dialog.js"></script>
	<script>
		var dialog = new Dialog();
		dialog.init({target:"#dialog-content",trigger:"#btn_dialog",mask:true,width:500,height:300,title:'标题'});
	</script>
## 或者用jquery方式调用:

	<link rel="stylesheet" type="text/css" href="../dist/dialog.css">
	<input type="button" id="btn_dialogjquery" value="jq打开浮层"/>
	<div id="dialog-contentjq" style="display:none;">这是内容22</div>
	<script src="../src/dialog-jquery.js"></script>
	<script>
	$('#btn_dialogjquery').Dialog({target:"#dialog-contentjq",mask:true,width:500,height:300,title:'标题'})
	</script>
# 继承类alert和confirm提示(jquery模式下)：

	*html:
	<link rel="stylesheet" type="text/css" href="../dist/dialog.css">
	<input type="button" id="btn_alert" value="alert"/>
	<input type="button" id="btn_alert2" value="alert定时关闭"/>
	<input type="button" id="btn_confirm" value="confirm三种按钮"/>
	<input type="button" id="btn_confirmdefault" value="confirm默认"/>
	*js:
	$('#btn_alert').click(function(){
		$.alert('选好商品才能上传素材哦',true,function(){
			alert('你点击了ok')
		})
	});
	$('#btn_alert2').click(function(){
		$.alert('选好商品才能上传素材哦')
	});
	$('#btn_confirm').click(function(){
		$.confirm('下载全部 9 张图片至本地相册?<div class="confirm-title2">文字内容已复制</div>',[{yes:"是"},{no:'否'},{close:'关闭'}],function(type){
			$.alert('您点击了'+type);
			this.hide();
		});
	})
	$('#btn_confirmdefault').click(function(){
		$.confirm('你确定要删除这条消息吗? ',null,function(type){
			$.alert('您点击了'+type);
			this.hide();
		});
	})
# 属性或方法
## 属性
### trigger:

	触发对象
### target:

	弹出内容，可以为#id,或者jquery对象
### mask:

	是否有遮罩层
### title:

	标题
### zIndex:

	z-index
### closeTpl:

	关闭html(默认:<span class="ui-dialog-close js-dialog-close">x</span>)
### titleTpl:

	标题html(默认：<div class="ui-dialog-title"></div>) 
### fixed:`bool`

	是否固定位置，默认不固定
### position:'bottom'

	固定底部显示,目前仅支持'bottom'值
## 方法及回调

### show:

	显示弹层
### hide:

	隐藏
### beforeShow：function(content)

	显示前的方法回调,content是浮层内容对象
### beforeHide：function(content)

	隐藏前的方法回调,content是浮层内容对象
### setPosition:function()

	设置位置居中
## 事件
### hide:

	$('.ui-dialog').trigger('hide');触发弹窗的隐藏事件.
	
*2016.4.29* v2.0.0

	修改弹窗样式
