$(function(){
	$(".filterBtn").click(function(e) {
		e.preventDefault();	
		e.stopPropagation();
        $(".leftInner").slideToggle("fast");
    });
	
	
/* Rating Star Selection */
	$('.yourRatingAside .starSelect').bind( "click", function(e) {
		e.preventDefault();	
		e.stopPropagation();
       if($(this).hasClass('active')){
		 $('.yourRatingAside .starSelect').removeClass('active');
		}
		else{
		$('.yourRatingAside .starSelect').removeClass('active');
		$(this).addClass('active');
		}
});
/* Rating Star Selection End Here*/
/*--------------------*/
/* Faq Categories */
	$('.categoryList > h4').bind( "click", function(e) {
		e.preventDefault();	
		e.stopPropagation();
       if($(this).hasClass('active')){
		 $('.categoryList > h4').removeClass('active');
		 $(this).parents().children('.subListing').slideUp(500);
		}
		else{
		$('.categoryList > h4').removeClass('active');
		$('.categoryList > h4 .subListing').slideUp(500)
		$(this).addClass('active');
		$(this).parents().children('.subListing').slideDown(500);
		}
});
/* Faq Categories End Here */
/* ------------------------ */
/* Profile Setting Dropdown */
$( ".userDropdown").click(function() {
  $("#userDropdown").slideToggle("fast");
});
/* Profile Setting Dropdown End Here */
/* ------------------------ */
/* Sorting Dropdown */
$( ".selectSorting").click(function() {
  $(".subDropdown2").slideToggle("fast");
});
/* Sorting Dropdown End Here */
/* ------------------------ */


	$('#dialogModal_ex1').click(function(){
		$('.dialog_content').dialogModal({
			topOffset: 0,
			top: 0,
			type: '',
			onOkBut: function(event, el, current) {},
			onCancelBut: function(event, el, current) {},
			onLoad: function(el, current) {},
			onClose: function(el, current) {},
			onChange: function(el, current) {
				if(current == 3){
					el.find('.dialogModal_header span').text('Page 3');
					$.ajax({url:'ajax.html'}).done(function(content){
						el.find('.dialogModal_content').html(content);
					});
				}
			}
		});
	});
	
	$('#dialogModal_ex2').click(function(){
		$('.dialog_content2').dialogModal({
			topOffset: 0,
			top: 0,
			type: '',
			onOkBut: function(event, el, current) {},
			onCancelBut: function(event, el, current) {},
			onLoad: function(el, current) {},
			onClose: function(el, current) {},
			onChange: function(el, current) {
				if(current == 3){
					el.find('.dialogModal_header span').text('Page 3');
					$.ajax({url:'ajax.html'}).done(function(content){
						el.find('.dialogModal_content').html(content);
					});
				}
			}
		});
	});
	
	
	/* tab */
(function($) {
	$.fn.tab = function(method){
	
		var methods = {
			init : function(params) {

				$('.tab').click(function() {
					var curPage = $(this).attr('data-tab');
					$(this).parent().find('> .tab').each(function(){
						$(this).removeClass('active');
					});
					$(this).parent().find('+ .page_container > .page').each(function(){
						$(this).removeClass('active');
					});
					$(this).addClass('active');
					$('.page[data-page="' + curPage + '"]').addClass('active');
				});
			
			}
		};

		if (methods[method]) {
			return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		
	};
	$('html').tab();
	
})(jQuery);



	
});






