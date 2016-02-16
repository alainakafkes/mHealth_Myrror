// var queryString = new Array();
// var fixedHeight = "5in";
//var myDataRef = new Firebase('https://luminous-heat-3152.firebaseio.com');


// $( window ).load (
// 	// Modified from http://www.aspsnippets.com/Articles/Send-Pass-Data-Values-from-one-page-to-another-using-jQuery.aspx
// 	$( function () {
// 	    if (queryString.length == 0) {
// 	        if (window.location.search.split('?').length > 1) {
// 	            var params = window.location.search.split('?')[1].split('&');
// 	            for (var i = 0; i < params.length; i++) {
// 	                var key = params[i].split('=')[0];	
// 	                var value = decodeURIComponent(params[i].split('=')[1]);
// 	                queryString[key] = value;
// 	            }
// 	        }
// 	    }
// 	    if (queryString["size"] != null) {
// 	    	var winHeight = $(window).height();
// 	    	var winWidth = $(window).width();

// 	    	myDataRef.on('child_added', function(snapshot) {
//         	var message = snapshot.val();

// 	        //var data = queryString["size"]+"in";
// 	        $("#rectangle-location").css("height",fixedHeight);
// 	        $("#rectangle-location").css("width",message.size);
// 	        $("#rectangle-location").css("border", "3px solid blue");
// 	    }
// }));


// $window.resize( function () {
// 	$(window).height();
// 	$(window).width();
// });

var queryString = new Array();
var fixedHeight = "5in";


$( window ).load (
	// Modified from http://www.aspsnippets.com/Articles/Send-Pass-Data-Values-from-one-page-to-another-using-jQuery.aspx
	$( function () {
	    if (queryString.length == 0) {
	        if (window.location.search.split('?').length > 1) {
	            var params = window.location.search.split('?')[1].split('&');
	            for (var i = 0; i < params.length; i++) {
	                var key = params[i].split('=')[0];	
	                var value = decodeURIComponent(params[i].split('=')[1]);
	                queryString[key] = value;
	            }
	        }
	    }
	    if (queryString["size"] != null) {
	    	var winHeight = $(window).height();
	    	var winWidth = $(window).width();

	        var data = queryString["size"]+"in";
	        $("#rectangle-location").css("height",fixedHeight);
	        $("#rectangle-location").css("width",data);
	        $("#rectangle-location").css("border", "3px solid blue");
	    }
}));


// $window.resize( function () {
// 	$(window).height();
// 	$(window).width();
// });



