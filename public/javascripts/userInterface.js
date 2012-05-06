(function initUI($) {
	var $mainpanel = $('#mainpanel'),
		toggleWindow;

	$('.button').button();
	$mainpanel.css('margin-left', -($mainpanel.outerWidth() / 2) | 0 + 'px');

	$('.window').dialog({
		autoOpen: false
	});

	toggleWindow = function toggleWindow(e) {
			var $win = $('.window.' + e.data.wclass);
			if ($win.dialog('isOpen')) {
				$win.dialog('close');
			} else {
				$('.window.buildings').dialog('open');
			}		
	};
	(function initButtons() {
		var bClass,
			bClasses = [
				'buildings',
				'storage',
				'statistics',
				'system'
			],
			len = bClasses.length;
		while (len--) {
			bClass = bClasses[len];
			$('.button.' + bClass)
				.click({wclass: bClass}, toggleWindow);
		}
	})();
})(jQuery);
