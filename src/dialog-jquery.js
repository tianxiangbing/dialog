/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-03-18
 * Time: 11:28:29
 * Contact: 55342775@qq.com
 */
;
(function($) {
	$.fn.Dialog = function(settings) {
		var list = [];
		$(this).each(function() {
			var dialog = new Dialog();
			var options = $.extend({
				trigger: $(this)
			}, settings);
			dialog.init(options);
			list.push(dialog);
		});
		return list;
	};
	$.Dialog = function(settings) {
		if (settings.type = "alert") {
			var dialog = new Dialog();
			var html = '<div class="ui-alert-title">' + settings.content + '</div>';
			var action = '';
			if (settings.button) {
				action = '<p class="ui-dialog-action"><button class="ui-alert-submit  js-dialog-close">确定</button></p>';
			} else if (!settings.timer) {
				settings.timer = 3000;
			}
			html += action;
			var options = $.extend({
				target: html,
				animate: true,
				show: true,
				mask: true,
				className: "ui-alert",
				afterHide: function(c) {
					this.dispose();
					settings.callback && settings.callback();
				}
			}, settings);
			dialog.init(options);
			if (settings.timer) {
				setTimeout(function() {
					dialog.dispose();
					settings.callback && settings.callback();
				}, settings.timer);
			}
		}
	};
	/*alert*/
	$.alert = function(content, button, timer, callback) {
		$.Dialog({
			content: content,
			button: button,
			timer: timer,
			callback: callback
		});
	}
})(jQuery);