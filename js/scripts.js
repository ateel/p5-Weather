/*to-do list:
CSS needs full makeover
Buttons should be cool
pros and cons should be side by side (just use floats bra)
please use a better fontFamily

consider some basic images or something, perhaps tied to condition variable -- see commented code around line 101
*/


//upon load, hides items I intend to show later
$("#newZip , #getListButton , h3, #temp").hide();			
			
//Enter Zip to Get Weather -- From CodePen Example with my tweaks	
				var condition;
				var weatherCode;
				var zip;
			   

				// click button, capture zip field
				$('#getZip').click(function() {

				  $("#temp").show();
				  // stop default, <form> from submitting data
				  event.preventDefault();
				  
				  // get and store data
				  if( $('#zip').val().length > 5 || $('#zip').val().length < 5 ) {
					  alert("Invalid Zip, please try again");
					  window.location.reload();
				  }else {
					zip = $('#zip').val();
					}


				
				   
				
				  // Get Weather
				  $.simpleWeather({
					
					location: zip,  
					unit: 'f',
					success: function(weather) {
							
					  // get weather OK? 
					  
					  
					  $('.temp').text(weather.temp);
					  $('.city').text(weather.city);
					 
						
						weatherCode = weather.code;
						var wc = weatherCode;  //I didn't want to type weatherCode that many times, wc is easier
						
						//********************Weather Code Translantion****************************
						/*
						sunny: 25, 32
						cloudy: 26,27,28,29,30,44
						fair: 31,33,34
						rainy: 6, 8,9,10,11,12,18,40
						snowy: 5,7,13,14,15,16,41,42,43,46
						hail: 17,35
						thunderStorms: 3,4,37,38,39,45,47
						scaryStorms: 0,1,2
						badVisibility: 19,20,21,22
						windy: 23,24
						notAvailable: 3200
						*/
						
						//condition conditionals
						if ( wc == 32 || wc == 36){
							condition = "sunny";
						}else if( wc == 26 || wc == 27 || wc == 28 || wc == 29 || wc == 30 || wc == 44){
							condition="cloudy";
						}else if( wc == 31 || wc == 32 || wc == 33 || wc == 34){
							condition="fair";
						}else if( wc == 6 || wc == 8 || wc == 9 || wc == 10 || wc == 11 || wc == 12 || wc == 18 || wc == 40 ){
							condition="rainy";
						}else if(wc == 5 || wc == 7 || wc == 13 || wc == 14 || wc == 15 || wc == 16 || wc == 41 || wc == 42 || wc == 43 || wc == 46 || wc == 25){
							condition="snowy";
						}else if( wc == 17 || wc == 35 ){
							condition="hail";
						}else if( wc == 3 || wc == 4 || wc == 37 || wc == 38 || wc == 39 || wc == 45 || wc == 47){
							condition="thunderStorms";
						}else if( wc >= 0 && wc <= 2){
							condition="scaryStorms";
						}else if( wc >= 19 && wc <= 22){
							condition="badVisibility";
						}else if( wc >= 23 && wc <= 24){
							condition="windy";
					
						}else {condition="notAvailable";}
					
					
					
					//add Image based on Condition
					//because I named the images to match the condition exactly, I was able to use that variable in the append in one line, rather than another if/else
						
					var conditionImage = '<img src="img/'+condition+'.png" alt = "'+condition+' weather icon">';
					$("#weatherImage").append(conditionImage);
					//end insert image
					
					}, //end success  
					
					error: function(error) {
					  $('body').html('<p>' + error + '</p>');
					}
				  
				  });
				  
				  // clear zip
				  $('#getWeather').val('');
				  
				  //hides the zip field after submission
				  $("#getZip, #zipEnter, .intro, h1, form, #buttonZip").hide();
				  
				  //shows my buttons for zip re-entry, list generation, and the text "weather" (originally in h3 and unhid in the codepen example)
				  $("#newZip , #getListButton , h3").show();
				  
				  
					
				 
				  			  
				});		




									// This is the "Fisher Yates Shuffle" and is optimized to shuffle/randomize arrays
									//Perfect for the task!

									function shuffle(array) {
									  var m = array.length, t, i;

									  // While there remain elements to shuffle…
									 
									  while (m) {

										// Pick a remaining element…
										i = Math.floor(Math.random() * m--);

										// And swap it with the current element.
										t = array[m];
										array[m] = array[i];
										array[i] = t;
									  }

									  return array;
									}




//*******************************LIST COUNT VARIABLE************************************ 
	//set listCount to the number of Pros/Cons desired as output.
	//make sure you have at least as many items in the lists... listCount cannot be greater than the array length for pros or cons
	// If you want to return 3 pros and 3 cons, listCount should = 3.  
	// If you want it to send 5 of each, change to 5 etc.
	
	var listCount = 3;

//*******************************END LIST COUNT VARIABLE************************************



//Weather Condition sunny Code*********************************************************

	var sunnyPro = [
	"It's warm",
	"You probably need vitamin D",
	"Swimming?",
	"Blame your drinking on the heat",
	"Ice cream",
	];
	var sunnyCon = [
	"Sunburn",
	"Everyone expects you to be in a good mood",
	"Easier for a sniper to see you",
	"Swimsuits",
	"Bees.",
	];
	
	shuffle(sunnyPro);
	shuffle(sunnyCon);
	
	var sunnyProList = [];
	var sunnyConList = [];
	
	
	for (i=0; i < listCount; i++) {
		sunnyProList.push(sunnyPro[i]);
		sunnyConList.push(sunnyCon[i]);
	};
//Weather Condition cloudy Code*********************************************************

	var cloudyPro = [
	"No sunscreen",
	"Warm drinks",
	"People judge you less for your baggy hoodie",
	"Blame your mood on the weather",
	"Easier to hide",
	];
	var cloudyCon = [
	"Humidity makes your hair look like the lion king",
	"Everyone will complain about the lack of sun",
	"Probably cold",
	"Indoor activities require talking",
	"Ruins most views",
	];
	
	shuffle(cloudyPro);
	shuffle(cloudyCon);
	
	var cloudyProList = [];
	var cloudyConList = [];
	
	
	for (i=0; i < listCount; i++) {
		cloudyProList.push(cloudyPro[i]);
		cloudyConList.push(cloudyCon[i]);
	};

//Weather Condition fair Code*********************************************************
	var fairPro = [
	"Probably not too hot",
	"Outdoor activities?",
	"That cloud looks kinda like a dinosaur",
	"You probably won't get heatstroke",
	"You might see a ladybug",
	];
	var fairCon = [
	"Bees. Spiders.",
	"People expect you to do things",
	"Probably not hot enough",
	"Allergies",
	"You might get attacked by a bear. Just saying.",
	];
	
	shuffle(fairPro);
	shuffle(fairCon);
	
	var fairProList = [];
	var fairConList = [];
	
	
	for (i=0; i< listCount; i++) {
		fairProList.push(fairPro[i]);
		fairConList.push(fairCon[i]);
	};
	
//Weather Condition rainy Code*********************************************************
	var rainyPro = [
	"You can wear your hair up",
	"It smells awesome",
	"It's good for the plants",
	"The noise makes it easier to sneak up on people",
	"Allergies aren't as bad",
	];
	var rainyCon = [
	"Umbrellas",
	"Glasses don't have windshield wipers",
	"Try using your phone outside. I dare you",
	"Worms. Worms everywhere",
	"The inevitable puddle/poodle jokes",
	];
	
	shuffle(rainyPro);
	shuffle(rainyCon);
	
	var rainyProList = [];
	var rainyConList = [];
	
	
	for (i=0; i< listCount; i++) {
		rainyProList.push(rainyPro[i]);
		rainyConList.push(rainyCon[i]);
	};


//Weather Condition snowy Code*********************************************************
	var snowyPro = [
	"Kinda pretty",
	"Hot chocolate",
	"Your friends want to stay inside too",
	"Use the footprints to track your enemies",
	"Fireplaces",
	];
	var snowyCon = [
	"It's icy. You'll probably fall",
	"Snowball snipers",
	"So fucking cold",
	"You have to shed ten layers every time you enter a building",
	"You could be impaled by an icicle",
	];
	
	shuffle(snowyPro);
	shuffle(snowyCon);
	
	var snowyProList = [];
	var snowyConList = [];
	
	
	for (i=0; i< listCount; i++) {
		snowyProList.push(snowyPro[i]);
		snowyConList.push(snowyCon[i]);
	};

//Weather Condition hail Code*********************************************************
	var hailPro = [
	"There are none",
	"Stay inside",
	"It'll be less crowded since all the smart people are inside",
	"Nature's drums?",
	"Hail is terrible",
	];
	var hailCon = [
	"It's basically snow that wants to kill you",
	"You need more than one reason to stay inside?",
	"It hurts like hell if it hits you",
	"You can't hear anything",
	"It's not even pretty",
	];
	
	shuffle(hailPro);
	shuffle(hailCon);
	
	var hailProList = [];
	var hailConList = [];
	
	
	for (i=0; i< listCount; i++) {
		hailProList.push(hailPro[i]);
		hailConList.push(hailCon[i]);
	};

//Weather Condition thunderStorms Code*********************************************************
	var thunderStormsPro = [
	"Lightning pictures are cool",
	"Your candle addiction doesn't seem so weird if the power goes out",
	"Sing the thunderbuddies song from Ted",
	"Stay inside idiot, why do you want to go outside right now?",
	"Chance of being attacked by a bear is lower",
	];
	var thunderStormsCon = [
	"You'll get hit by lightning",
	"People will sing the thunderbuddies song from Ted",
	"Super annoying to drive in",
	"Everything tall or metal is trying to kill you",
	"The power will probably go out",
	];
	
	shuffle(thunderStormsPro);
	shuffle(thunderStormsCon);
	
	var thunderStormsProList = [];
	var thunderStormsConList = [];
	
	
	for (i=0; i< listCount; i++) {
		thunderStormsProList.push(thunderStormsPro[i]);
		thunderStormsConList.push(thunderStormsCon[i]);
	};
//Weather Condition scaryStorms Code*********************************************************
	var scaryStormsPro = [
	"STAY INSIDE",
	"NO",
	"NOPE",
	"GO INSIDE",
	"WTF HIDE",
	];
	var scaryStormsCon = [
	"YOU ARE GOING TO DIE",
	"SHIT IS GOING TO GET DESTROYED",
	"You're probably on the news",
	"Better hope your house is there tomorrow",
	"IT'S A NATURAL DISASTER",
	];
	
	shuffle(scaryStormsPro);
	shuffle(scaryStormsCon);
	
	var scaryStormsProList = [];
	var scaryStormsConList = [];
	
	
	for (i=0; i< listCount; i++) {
		scaryStormsProList.push(scaryStormsPro[i]);
		scaryStormsConList.push(scaryStormsCon[i]);
	};
//Weather Condition badVisibility Code*********************************************************
	var badVisibilityPro = [
	"Wear your old crap. No one can see anyway",
	"Makeup? No point",
	"Hide from your enemies",
	"Jump out and scare people",
	"You can't see creepy people",
	];
	var badVisibilityCon = [
	"Driving is probably a bad idea",
	"Forget about sightseeing",
	"You'll probably trip over something",
	"It's probably humid, enjoy your frizzy hair",
	"Something is probably sneaking up behing you right now",
	];
	
	shuffle(badVisibilityPro);
	shuffle(badVisibilityCon);
	
	var badVisibilityProList = [];
	var badVisibilityConList = [];
	
	
	for (i=0; i< listCount; i++) {
		badVisibilityProList.push(badVisibilityPro[i]);
		badVisibilityConList.push(badVisibilityCon[i]);
	};
//Weather Condition windy Code*********************************************************
	var windyPro = [
	"Flags are so dramatic",
	"No bugs",
	"At least it's not snowing",
	"You have an excuse for looking like a hot mess",
	"Pretend you're in a convertible",
	];
	var windyCon = [
	"Oh, you did your hair? That's too bad",
	"Oh, you're carrying something? That's unfortunate",
	"Have fun getting hair whipped in the face",
	"It's cold",
	"It's not crappy enough to use the weather as an excuse",
	];
	
	shuffle(windyPro);
	shuffle(windyCon);
	
	var windyProList = [];
	var windyConList = [];
	
	
	for (i=0; i< listCount; i++) {
		windyProList.push(windyPro[i]);
		windyConList.push(windyCon[i]);
	};

//Weather Condition notAvailable Code*********************************************************

	var notAvailablePro = [
	"It's a surprise?",
	"Maybe it's a magic trick?",
	"Uncertainty keeps life interesting?",

	];
	var notAvailableCon = [
	"It's probably the end of the world",
	"Maybe the location was destroyed",
	"Maybe the app is broken. That would suck",

	];
	
	shuffle(notAvailablePro);
	shuffle(notAvailableCon);
	
	var notAvailableProList = [];
	var notAvailableConList = [];
	
	
	for (i=0; i< listCount; i++) {
		notAvailableProList.push(notAvailablePro[i]);
		notAvailableConList.push(notAvailableCon[i]);
	};

//*********************************************end of weather array assignments ********************************************	
	
	
	
	//When #getList Button is clicked, the following code writes my pro-con list to the respective Divs

	$("#getList").click(function() {
	
			var proList;
			var conList;
		
	
				//************************Output Based on Weather Type******************************
				if(condition=="sunny") {
					proList = sunnyProList;
					conList = sunnyConList;
				}else if(condition=="cloudy") {
					proList = cloudyProList;
					conList = cloudyConList;
				}else if(condition=="fair") {
					proList = fairProList;
					conList = fairConList;	
				}else if(condition=="rainy") {
					proList = rainyProList;
					conList = rainyConList;
				}else if(condition=="snowy") {
					proList = snowyProList;
					conList = snowyConList;
				}else if(condition=="hail") {
					proList = hailProList;
					conList = hailConList;
				}else if(condition=="thunderStorms") {
					proList = thunderStormsProList;
					conList = thunderStormsConList;
				}else if(condition=="scaryStorms") {
					proList = scaryStormsProList;
					conList = scaryStormsConList;
				}else if(condition=="badVisibility") {
					proList = badVisibilityProList;
					conList = badVisibilityConList;
				}else if(condition=="windy") {
					proList = windyProList;
					conList = windyConList;
				}else {
					proList= notAvailableProList; 
					conList= notAvailableConList;
				}
				//************************End of Nested If/Else******************************
	
	//output testing - confirming the right zip and weather code matches the right pro/con list etc.
	console.log("Zip Code for Weather: ",zip);
	console.log("Weather Code is: ", weatherCode, "which means: ", condition);
	
	//Hides the button that generated the lists
	$("#getListButton").hide();
	
	//writes (appends) appropriate pro-list (already randomized with shuffle function) to the page
	$("#listOfPros").append('<li><span class = "pro">pros:</span></li>');
		for (i=0; i<listCount; i++) {
			$("#listOfPros").append('<li>',proList[i],'</li>');			
		}
		$("#listOfPros").append('</ul>');
	
	//writes (appends) appropriate con-list (already randomized with shuffle function) to the page
	$("#listOfCons").append('<li><span class = "con">cons:</span></li>');
		for (i=0; i<listCount; i++) {
			$("#listOfCons").append('<li>',conList[i],'</li>');			
		}
		$("#listOfCons").append('</ul>');
		
	
});

//In case a new zip is needed, reloads the page as an easy way to re-enter
$("#newZipButton").click(function() {
	location.reload();
});




