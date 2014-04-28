$(document).ready(function(){

    
    	$('nav ul li a').click(function(){
 	
 		var el = $(this).attr('href');
 		var elWrapped = $(el);
 		
 		scrollToDiv(elWrapped,40);
 		
 		return false;
 	
 	});
 	
 	function scrollToDiv(element,navheight){
 	
 		
 	
 		var offset = element.offset();
 		var offsetTop = offset.top;
 		var totalScroll = offsetTop-navheight;
 		
 		$('body,html').animate({
 				scrollTop: totalScroll
 		}, 500);
 	
 	}
 	
 

    $(function(){
        var s = skrollr.init({
            render: function(data) {
            }
        });
        
        
    });
    
    
      $(".info").hide(); 


 
$("#recipe1").on("click", function() {
	$(".one").slideToggle("slow");
});

 
$("#recipe2").on("click", function() {
	$(".two").slideToggle("slow");
});

 
$("#recipe3").on("click", function() {
	$(".three").slideToggle("slow");
});


$("#recipe4").on("click", function() {
	$(".four").slideToggle("slow");
});
    

$("#recipe5").on("click", function() {
	$(".five").slideToggle("slow");
});   
   
 
$("#recipe6").on("click", function() {
	$(".six").slideToggle("slow");
});    
 
});