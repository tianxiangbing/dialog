/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-03-18
 * Time: 11:28:29
 * Contact: 55342775@qq.com
 */
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
	}
})(jQuery);