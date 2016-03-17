
//Data and styling
var avgFemaleSize = 37.5; //cdc data
var avgMaleSize = 39.7;	//cdc data
var gender = "Female"; //default

//Connect to the waist size table
var myDataRef = new Firebase('https://luminous-heat-3152.firebaseio.com/Waist');
//Connect to gender table
var myDataRefGender = new Firebase('https://luminous-heat-3152.firebaseio.com/Gender')  // Get user gender

myDataRefGender.on('child_added', function(snapshot){
	var mess = snapshot.val();
	gender = mess.Gender;
});

//Called when new data is inserted into the DB
myDataRef.on('child_added', function(snapshot){
	var message = snapshot.val();
	displayImage(message.size)
});


//Function to display the rectangle
function displayImage(size) {
  	var sizeOnly = size*(3/8); //taking 3/8ths of circumference
  	sizeOnly = (sizeOnly/1.565)/0.97;
  	sizeOnly = sizeOnly+"in"; // cast to inches not pixels

  	var avgSize;
  	if (gender == "Female") {
  		var femaleSize = avgFemaleSize*(3/8); //taking 3/8ths of circumference
  		femaleSize = (femaleSize/1.565)/0.97;
  		avgSize = femaleSize+"in";
  	} else if (gender == "Male") {
  		var maleSize = avgMaleSize*(3/8); //taking 3/8ths of circumference
  		maleSize = (maleSize/1.565)/0.97;
  		avgSize = maleSize+"in";
  	}
  	

	var rectDiv = document.getElementById("rectangle-location"); //div
  	rectDiv.style.width = sizeOnly;
  	rectDiv.style.visibility =  "visible";

	var avgDiv = document.getElementById("avg-rect"); //div
 	avgDiv.style.width = avgSize;
 	avgDiv.style.visibility = "visible";
};

