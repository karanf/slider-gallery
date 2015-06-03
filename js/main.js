$(document).ready(function(){
	var $images = $('.gallery .images img'),
		$thumbs = $('.gallery .thumbs img'),
		$mask = $('.gallery .images'),
		$prevBtn = $('.prev-btn'),
		$nextBtn = $('.next-btn'),
		$slider,
		numImages = $images.length,
		lastIndex = numImages-1,
		currentIndex = 0,
		delay = 4000,
		timeout;



	function changeImage(){
		clearTimeout(timeout);
		timeout = setTimeout(nextImage, delay);
		$slider.css({'margin-left': -currentIndex*100+"%"});
		$thumbs.filter('.selected').removeClass('selected');
		$thumbs.eq(currentIndex).addClass('selected');


	}

	function nextImage() {
		currentIndex = (currentIndex < lastIndex)? currentIndex+1 : 0;
		changeImage();
	}



	//Initialise
	//Wrap images inside a slider
	$images.wrapAll('<div class="slider">');
	$slider = $('.gallery .slider');

	//Set slider width
	$slider.width(100*numImages+"%").css({transition: 'all 1s'});

	//Set images width
	$images.width(100/numImages+"%");

	//Set thumbs selected state
	$thumbs.eq(currentIndex).addClass('selected');
	$mask.css({overflow: 'hidden'});
	timeout = setTimeout(nextImage, delay);

	

	$thumbs.click(function(){
		currentIndex = $thumbs.index(this);
		changeImage();
	});

	$prevBtn.click(function(){
		currentIndex = (currentIndex > 0)? currentIndex-1 : lastIndex;
		changeImage();
	});

	$nextBtn.click(nextImage);


});

