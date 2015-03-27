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
		if (settings.type === "alert") {
			var alert = new Dialog();
			var html = '<div class="ui-alert-title">' + settings.content + '</div>';
			var action = '';
			if (settings.button) {
				if (typeof settings.button == 'boolean') {
					settings.button = '确定';
				};
				action = '<p class="ui-dialog-action"><button class="ui-alert-submit  js-dialog-close">' + settings.button + '</button></p>';
			} else if (!settings.timer) {
				settings.timer = 3000;
			}
			html += action;
			var alertOptions = $.extend({
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
			alert.init(alertOptions);
			if (settings.timer) {
				setTimeout(function() {
					alert.dispose();
					settings.callback && settings.callback();
				}, settings.timer);
			}
		}
		if (settings.type === "confirm") {
			var dialog = new Dialog();
			var html = '<div class="ui-confirm-title">' + settings.content + '</div>';
			var action = '';
			if (!settings.buttons) {
				settings.buttons = [{
					'yes': '确定'
				}, {
					'no': '取消'
				}];
			};
			var btnstr = '';
			for (var i = 0, l = settings.buttons.length; i < l; i++) {
				var item = settings.buttons[i];
				if (item.yes) {
					btnstr += '<button class="ui-confirm-submit " data-type="yes">' + item.yes + '</button>';
				}
				if (item.no) {
					btnstr += '<button class="ui-confirm-no" data-type="no">' + item.no + '</button>';
				}
				if (item.close) {
					btnstr += '<button class="ui-confirm-close js-dialog-close" data-type="close">' + item.close + '</button>';
				}
			}
			action = '<p class="ui-dialog-action">' + btnstr + '</p>';
			html += action;
			var options = $.extend({
				target: html,
				animate: true,
				show: true,
				mask: true,
				className: "ui-alert",
				afterHide: function(c) {
					this.dispose();
				},
				beforeShow: function(c) {
					dialog.touch($('.ui-confirm-submit', c), function() {
						settings.callback && settings.callback.call(dialog, 'yes', c);
					});
					dialog.touch($('.ui-confirm-no', c), function() {
						settings.callback && settings.callback.call(dialog, 'no', c);
					});
					dialog.touch($('.ui-confirm-close', c), function() {
						settings.callback && settings.callback.call(dialog, 'close', c);
					});
				}
			}, settings);
			dialog.init(options);
		}
	};
	/*alert*/
	$.alert = function(content, button, callback, timer) {
		$.Dialog({
			content: content,
			button: button,
			timer: timer,
			callback: callback,
			zIndex:100,
			type: 'alert'
		});
	}
	/*
	buttons :[{yes:"确定"},{no:'取消'},{close:'关闭'}]
	*/
	$.confirm = function(content, buttons, callback) {
		$.Dialog({
			content: content,
			buttons: buttons,
			callback: callback,
			zIndex:100,
			type: 'confirm'
		});
	}
})($);