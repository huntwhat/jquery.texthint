/**
 * 用于给text框增加默认数值和样式。
 * @author peihong
 * @version 1.0 2012-09-04
 * 
 */
(function($) {
	/**
	 * @param conf是一个Object,包含<br/>
	 * 
	 * <b>blurClass</b>：输入框blur后的样式，默认css名称texthintBlurred
	 * <br/><b>focusClass</b>：输入框focus后的样式，默认css名称texthintFocus
	 * <br/><b>blankValueClass</b>：输入框中给的值是默认值，输入框的样式，默认css名称texthintBlankValue
	 * <br/><b>hasValueClass</b>：输入框中给的值不是默认值，输入框的样式，默认css名称texthintHasValue
	 * <br/><b>blankValue</b>：在输入框空白的时候，默认值为""
	 * 
	 */
	$.fn.texthint = function(conf) {
		conf = jQuery.extend({
			blurClass: 'texthintBlurred',
			focusClass: 'texthintFocus',
			blankValueClass: 'texthintBlankValue',
			hasValueClass: 'texthintHasValue',
			blankValue: ''
		}, conf);

		return $(this).each(function() {
			
			var el = $(this);
			
			if(el.val() == "" || el.val() == conf.blankValue){
				el.val(conf.blankValue);
				el.removeClass(conf.hasValueClass).addClass(conf.blankValueClass);
			}else{
				el.removeClass(conf.blankValueClass).addClass(conf.hasValueClass)
			}
			
			el.bind('focus', function(){
				el.removeClass(conf.blurClass).addClass(conf.focusClass)
				if(el.val() == conf.blankValue){
					el.val('');
					el.removeClass(conf.blankValueClass).addClass(conf.hasValueClass)
				}
			})

			el.bind('blur', function(){
				el.removeClass(conf.focusClass).addClass(conf.blurClass);
				if(!el.val()){
					el.val(conf.blankValue);
					el.removeClass(conf.hasValueClass).addClass(conf.blankValueClass);
				}
			})
		});
	};
})(jQuery);

	

