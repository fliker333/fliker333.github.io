var j = jQuery.noConflict();/*

SMINT V1.0 by Robert McCracken

SMINT is my first dabble into jQuery plugins!

http://www.outyear.co.uk/smint/

If you like Smint, or have suggestions on how it could be improved, send me a tweet @rabmyself

*/
(function(){

	
	j.fn.smint = function( options ) {

		// adding a class to users div
		j(this).addClass('smint')

		var settings = j.extend({
            'scrollSpeed '  : 500
            }, options);


		return j('.smint a').each( function() {

            
			if ( settings.scrollSpeed ) {

				var scrollSpeed = settings.scrollSpeed

			}


			///////////////////////////////////

			// get initial top offset for the menu 
			var stickyTop = j('.smint').offset().top;	

			// check position and make sticky if needed
			var stickyMenu = function(){
				
				// current distance top
				var scrollTop = j(window).scrollTop(); 
							
				// if we scroll more than the navigation, change its position to fixed and add class 'fxd', otherwise change it back to absolute and remove the class
				if (scrollTop > stickyTop) { 
					j('.smint').css({ 'position': 'fixed', 'top':0 ,'z-index': 9999}).addClass('fxd');

					} else {
						j('.smint').css({ 'position': 'absolute', 'top':stickyTop }).removeClass('fxd'); 
					}   
			};
					
			// run function
			stickyMenu();
					
			// run function every time you scroll
			j(window).scroll(function() {
				 stickyMenu();
			});

			///////////////////////////////////////
    
        
        	j(this).on('click', function(e){


				// gets the height of the users div. This is used for off-setting the scroll so th emenu doesnt overlap any content in the div they jst scrolled to
				var selectorHeight = j('.smint').height();   

        		// stops empty hrefs making the page jump when clicked
				e.preventDefault();

				// get id pf the button you just clicked
		 		var id = j(this).attr('id');
				
				// gets the distance from top of the div class that matches your button id minus the height of the nav menu. This means the nav wont initially overlap the content.
				var goTo =  j('div.'+ id).offset().top -selectorHeight;
				
				// Scroll the page to the desired position!
				j("html, body").animate({ scrollTop: goTo }, scrollSpeed);

			});	

            

		});

	}

})();
