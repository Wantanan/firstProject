// ..................................script for photo slide index
		
//https://www.youtube.com/watch?v=bW8X-tt5AZQ
		
	var slides = document.querySelectorAll('.slide');
	
	let currentSlide = 1;
	
	//javascript for image auto slide
	var repeat = function(activeClass){
		let active = document.getElementsByClassName('active');
		let i = 1;
		
			var repeater = () => {
				setTimeout(function (){
				[...active].forEach((activeSlide) => {

				});
				
				slides[i].classList.add('active');
				
				i++;
				
				if(slides.length == i){
					i = 0;
				}
				if(i >= slides.length){
					return;
				}
				repeater();
				},5000);
			}
			repeater();
	}
	repeat();	
	

	

		
		
		
//------------------------script for review slide
	var slideReview = 1;
	showDivs(slideReview);

	function plusDivs(m) {
	  showDivs(slideReview += m);
	}

	function showDivs(m) {
	  var j;
	  var y = document.getElementsByClassName("slides");
	  if (m > y.length) {slideReview = 1}
	  if (m < 1) {slideReview = y.length}
	  for (j = 0; j < y.length; j++) {
		y[j].style.display = "none";  
	  }
	  y[slideReview-1].style.display = "block";  
	}
