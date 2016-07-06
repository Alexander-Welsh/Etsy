$(document).ready(function(){
	$.get('https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop', function(data){
		htmlStr = '';
		data.results.forEach(function(field){

			// if(typeof field.Images[0].url_170x135 !== 'undefined'){
			// 	htmlStr +=`	<div class="holder"><img src=${field.Images[0].url_170x135}></div>
				// `
			
			if(typeof field.price !== 'undefined'){
				htmlStr += `<div class="holder"><div class="nada"></div><img title="${field.title}" src=${field.Images[0].url_170x135}><div class="bottomdescrip"><p class="title">${field.title}</p>
				<p class="seller">${field.Shop.shop_name}</p>
				<span>&#36;${field.price}</span></div></div>`
			}

		})
		$('.container').html(htmlStr);
	});
		
		$('body').on('click', 'img', function(e){
			var title= $(this).attr("title");
			$(this).siblings('.nada').html("<span>" + title + "</span>")
			
		});
				
		

		$('body').on('click','#changer', function(e){
		e.preventDefault();
		$('.locationChange').html("<input type='text'>" + "<a href='#' id='cancel'>Cancel</a>");
	
			$('#cancel').on('click',function(e){
			e.preventDefault();
			$('.locationChange').html('<label for="any"><input type="radio" name="loc" id="any">Anywhere</label>' + '<label for="USA"><input type="radio" name="loc" id="US">United States</label>' + '<a id="changer" href="#">Choose a custom location</a>');


	});

	});



	

});