window.onload=function(){
	radioButtonLoop();
}

//creating buttons
function radioButtonLoop(){
	const radioButtonArray = []; //an array that holds the radio buttons per question

	//loop to create 8 arrays for self-awareness 8 questions to put 10 arrays of radio buttons
	for (var a = 1; a <= 8; a++)
	{
		//creating 10 arrays per 1 question
		radioButtonArray[a] = [];
		for (var i=1; i<=10; i++)
		{
			radioButtonArray[a] += '<input type="radio" value="' + i + '" name="self_aware_radio_btn' + a + '" class="radio-btn">' + i;
			//document.getElementById("radioLoop").innerHTML = selfAware[5];
		}
		//prints the code from js to html under container1_self_aware_radio_btn
		document.getElementById("container1_self_aware_radio_btn" + a).innerHTML = radioButtonArray[a];
	}

	//for loop to create radio buttons for exploration section
	for (var a = 1; a <= 5; a++)
	{
		//creating 10 arrays per 1 question
		radioButtonArray[a] = [];
		for (var i=1; i<=10; i++)
		{
			radioButtonArray[a] += '<input type="radio" value="' + i + '" name="exploration_radio_btn' + a + '" class="radio-btn">' + i;
		}
		//prints the code from js to html under exploration section
		document.getElementById("container1_exploration_radio_btn_" + a).innerHTML = radioButtonArray[a];
	}

	//for loop to create radio buttons for netoworking section
	for (var a = 1; a <= 3; a++)
	{
		//creating 10 arrays per 1 question
		radioButtonArray[a] = [];
		for (var i=1; i<=10; i++)
		{
			radioButtonArray[a] += '<input type="radio" value="' + i + '" name="networking_radio_btn' + a + '" class="radio-btn">' + i;
		}
		//prints the code from js to html under networking section
		document.getElementById("container1_networking_radio_btn_" + a).innerHTML = radioButtonArray[a];
	}

	//for loop to create radio buttons for transition_tool_kit section
	for (var a = 1; a <= 4; a++)
	{
		//creating 10 arrays per 1 question
		radioButtonArray[a] = [];
		for (var i=1; i<=10; i++)
		{
			radioButtonArray[a] += '<input type="radio" value="' + i + '" name="transition_tool_kit_radio_btn' + a + '" class="radio-btn">' + i;
		}
		//prints the code from js to html under operational section
		document.getElementById("container1_transition_tool_kit_radio_btn_" + a).innerHTML = radioButtonArray[a];
	}

	//for loop to create radio buttons for operational section
	for (var a = 1; a <= 6; a++)
	{
		//creating 10 arrays per 1 question
		radioButtonArray[a] = [];
		for (var i=1; i<=10; i++)
		{
			radioButtonArray[a] += '<input type="radio" value="' + i + '" name="operational_radio_btn' + a + '" class="radio-btn">' + i;
		}
		//prints the code from js to html under operational section
		document.getElementById("container1_operational_radio_btn_" + a).innerHTML = radioButtonArray[a];
	}
}

function check() {
  document.getElementById("download-btn").innerHTML = '<button type="button" class="dl-btn" onclick="HTMLtoPDF()">Download</button>';

  //prints the name and results to the second container
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  document.getElementById("fName").textContent = "First Name: " + fName;
  document.getElementById("lName").textContent = "Last Name: " + lName;

//prints the title on container 2 for the pdf
  var selfAwareTitle = document.getElementById("container1_self_aware_title").textContent;
  document.getElementById("container2_self_aware_title").innerHTML = selfAwareTitle;

	var explorationTitle = document.getElementById("container1_exploration_title").textContent;
  document.getElementById("container2_exploration_title").innerHTML = explorationTitle;

	var networkingTitle = document.getElementById("container1_networking_title").textContent;
	document.getElementById("container2_networking_title").innerHTML = networkingTitle;

	var networkingTitle = document.getElementById("container1_transition_tool_kit_title").textContent;
	document.getElementById("container2_transition_tool_kit_title").innerHTML = networkingTitle;

	var networkingTitle = document.getElementById("container1_operational_title").textContent;
	document.getElementById("container2_operational_title").innerHTML = networkingTitle;

	var aware = 0;
	var temp_Question;
	var selfAwareTotal = 0;
	var selfAwareTRQ = parseFloat(0);
	//loop to get values for self-aware sections with 8 questions
	for (var i = 1; i <=8; i++)
	{
    //gets the value of the radio
		aware =  Array.from(document.getElementsByName("self_aware_radio_btn" + i)).find(radio => radio.checked);
		if (aware == undefined){
			alert("You missed a button in self-awareness area of focus.");
		}
    //gets the text of question from container 1
    temp_Question = document.getElementById("container1_self_aware_question" + i).textContent;
    //prints the questions to container 2
    document.getElementById("container2_self_aware_title_question_" + i).innerHTML = temp_Question + parseInt(aware.value);
    //gets the value of each radio button and add them all up
		selfAwareTotal += parseInt(aware.value);
    //prints the total TRQ in container 1
		//document.getElementById("container1_self_aware_result").textContent = "SelfAwareTotal is " +  selfAwareTotal;
	}
	selfAwareTRQ = parseFloat(selfAwareTotal / 8);

	if(selfAwareTRQ <= 4.9)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_self_aware_result").textContent = "Your self-awareness TRQ is " +  selfAwareTRQ + ". OFF TRACK:   Focused attention is required to identify what matters to you and how you have defined success.  Schedule some focused time and work through the questions on pages 3 – 5 in this downloadable workbook:  https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		//input the self-aware results to container 2
		document.getElementById("container2_self_aware_results").textContent = "Your self-awareness TRQ is " +  selfAwareTRQ + ". OFF TRACK: Focused attention is required to identify what matters to you and how you have defined success. Schedule some focused time and work through the questions on pages 3 - 5 in this downloadable workbook: https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		document.getElementById("container1_self_aware_result").style.color = "red";
    document.getElementById("container2_self_aware_results").style.color = "red";
	}
	else if (selfAwareTRQ > 4.9 && selfAwareTRQ <= 7.9)
	{	//gets the self-aware results from container 1
		document.getElementById("container1_self_aware_result").textContent = "Your self-awareness TRQ is " +  selfAwareTRQ + ". NEEDS ATTENTION:   Consider answering these two big questions . . . WHAT really matters to you?  And WHY does it matter to you?  Consider scheduling some time and working through the questions on pages 3 -5 in this downloadable workbook:  https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		//input the self-aware results to container 2
	  document.getElementById("container2_self_aware_results").textContent = "Your self-awareness TRQ is " +  selfAwareTRQ + ". NEEDS ATTENTION:   Consider answering these two big questions . . . WHAT really matters to you?  And WHY does it matter to you?  Consider scheduling some time and working through the questions on pages 3 -5 in this downloadable workbook:  https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		document.getElementById("container1_self_aware_result").style.color = "orange";
    document.getElementById("container2_self_aware_results").style.color = "orange";
	}
	else if (selfAwareTRQ >7.9 && selfAwareTRQ <= 10)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_self_aware_result").textContent = "Your self-awareness TRQ is " +  selfAwareTRQ + ". ON TRACK:  GREAT JOB!  Keep focusing your energy, attention, and effort on what matters most!";
		//input the self-aware results to container 2
		document.getElementById("container2_self_aware_results").textContent = "Your self-awareness TRQ is " +  selfAwareTRQ + ". ON TRACK:  GREAT JOB!  Keep focusing your energy, attention, and effort on what matters most!";
		document.getElementById("container1_self_aware_result").style.color = "green";
    document.getElementById("container2_self_aware_results").style.color = "green";
	}

	//------------------------------exploration section----------------------------------------//
	var explorationTotalPoints = 0;
	var explorationTRQ = parseFloat(0);
	//loop to get values for exloration sections with 5 questions
	for (var i = 1; i <=5; i++)
	{
		//gets the value of the radio
		selected_exploration =  Array.from(document.getElementsByName("exploration_radio_btn" + i)).find(radio => radio.checked);
		if (selected_exploration == undefined){
			alert("You missed a button in exploration area of focus");
		}
		//gets the text of question from container 1
		temp_Question = document.getElementById("container1_exploration_question_" + i).textContent;
		//prints the questions to container 2
		document.getElementById("container2_exploration_question_" + i).innerHTML = temp_Question + parseInt(selected_exploration.value);
		//gets the value of each radio button and add them all up
		explorationTotalPoints += parseInt(selected_exploration.value);
	}
	//calculates the TRQ
	explorationTRQ = parseFloat(explorationTotalPoints / 5);
	if(explorationTRQ <= 4.9)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_exploration_result").textContent = "Your exploration TRQ is " +  explorationTRQ + ". OFF TRACK:  Focused attention is required to identify what matters to you, how you have defined success, and what gives you energy.   Schedule some focused time and work through the questions on pages 3 – 7 in this downloadable workbook:  https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		//input the self-aware results to container 2
		document.getElementById("container2_exploration_results").textContent = "Your exploration TRQ is " +  explorationTRQ + ". OFF TRACK: Focused attention is required to identify what matters to you, how you have defined sucess, and what gives you energy. Schedule some focused time and work through the questions on pages 3 - 7 in this downloadable workbook: https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		document.getElementById("container1_exploration_result").style.color = "red";
		document.getElementById("container2_exploration_results").style.color = "red";
	}
	else if (explorationTRQ > 4.9 && explorationTRQ <= 7.9)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_exploration_result").textContent = "Your exploration TRQ is " +  explorationTRQ + ". NEEDS ATTENTION:   Consider answering the BIG FOUR questions . . . What are your STRENGTHS?  What really ENERGIZES you?  What ISSUES/PROBLEMS MATTER to you?  WHO do you want on your TEAM?  Consider scheduling some focused time and working through the questions on pages 3 – 7 in this downloadable workbook:  https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		//input the self-aware results to container 2
		document.getElementById("container2_exploration_results").textContent = "Your exploration TRQ is " +  explorationTRQ + ". NEEDS ATTENTION: Consider answering the BIG FOUR questions... What are your STRENGTHS? What really ENERGIZES you? What ISSUES/PROBLEMS MATTER to you? WHO do you want on your TEAM? Consider scheduling some focused time and working through the questions on pages 3 - 7 in this downloadable workbook: https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		document.getElementById("container1_exploration_result").style.color = "orange";
		document.getElementById("container2_exploration_results").style.color = "orange";
	}
	else if (explorationTRQ >7.9 && explorationTRQ <= 10)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_exploration_result").textContent = "Your exploration TRQ is " +  explorationTRQ + ". ON TRACK:  GREAT JOB!  Keep making time to identify and focus on what makes a difference for you!";
		//input the self-aware results to container 2
		document.getElementById("container2_exploration_results").textContent = "Your exploration TRQ is " +  explorationTRQ + ". ON TRACK:  GREAT JOB!  Keep making time to identify and focus on what makes a difference for you!";
		document.getElementById("container1_exploration_result").style.color = "green";
		document.getElementById("container2_exploration_results").style.color = "green";
	}

	//------------------------------networking section----------------------------------------//
	var networkingTotalPoints = 0;
	var networkingTRQ = parseFloat(0);
	//loop to get values for networking sections with 3 questions
	for (var i = 1; i <=3; i++)
	{
		//gets the value of the radio
		selected_networking =  Array.from(document.getElementsByName("networking_radio_btn" + i)).find(radio => radio.checked);
		if (selected_networking == undefined){
			alert("You missed a button in netoworking area of focus.");
		}
		//gets the text of question from container 1
		temp_Question = document.getElementById("container1_networking_question_" + i).textContent;
		//prints the questions to container 2
		document.getElementById("container2_networking_question_" + i).innerHTML = temp_Question + parseInt(selected_networking.value);
		//gets the value of each radio button and add them all up
		networkingTotalPoints += parseInt(selected_networking.value);
	}
	//calculates the TRQ
	networkingTRQ = parseFloat(networkingTotalPoints / 3);

	if(networkingTRQ <= 4.9)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_networking_result").textContent = "Your networking TRQ is " +  networkingTRQ + ". OFF TRACK:  Focused attention is required to identify WHO needs to be part of your journey moving forward and WHAT ROLES they will play.  Schedule some focused time and work through the questions on pages 8 – 10 in this downloadable workbook:  https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		//input the self-aware results to container 2
		document.getElementById("container2_networking_results").textContent = "Your networking TRQ is " +  networkingTRQ + ". OFF TRACK: Focused attention is required to identify WHO needs to be part of your journey moving forward and WHAT ROLES they will play. Schedule some focused time and work through the questions on pages 8 - 10 in this downloadable workbook: https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		document.getElementById("container1_networking_result").style.color = "red";
		document.getElementById("container2_networking_results").style.color = "red";
	}
	else if (networkingTRQ > 4.9 && networkingTRQ <= 7.9)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_networking_result").textContent = "Your networking TRQ is " +  networkingTRQ + ". NEEDS ATTENTION: Building our Tribe is one of the important parts of any career and life transition. Start with the inner circle - your Quick Reaction Force (QRF) - and move from outward from there. Consider scheduling some focused time and working through the questions on pages 8-10 in this downloadable workbook: https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		//input the self-aware results to container 2
		document.getElementById("container2_networking_results").textContent = "Your networking TRQ is " +  networkingTRQ + ". NEEDS ATTENTION: Building our Tribe is one fo the important parts of any career and life transition. Start with the inner circle - your Quick Reaction Force (QRF) - and move from outward from there. Consider scheduling some focused time and working through the questions on pages 8-10 in this downloadable workbook: https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		document.getElementById("container1_networking_result").style.color = "orange";
		document.getElementById("container2_networking_results").style.color = "orange";
	}
	else if (networkingTRQ >7.99 && networkingTRQ <= 10)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_networking_result").textContent = "Your networking TRQ is " +  networkingTRQ + ". ON TRACK:  GREAT JOB!  Continue investing in your network so you and those in it are making each other better!";
		//input the self-aware results to container 2
		document.getElementById("container2_networking_results").textContent = "Your networking TRQ is " +  networkingTRQ + ". ON TRACK:  GREAT JOB!  Continue investing in your network so you and those in it are making each other better!";
		document.getElementById("container1_networking_result").style.color = "green";
		document.getElementById("container2_networking_results").style.color = "green";
	}

	//------------------------------transition tool kit section----------------------------------------//
	var transition_tool_kitTotalPoints = 0;
	var transition_tool_kitTRQ = parseFloat(0);
	//loop to get values for transition tool kit sections with 3 questions
	for (var i = 1; i <=4; i++)
	{
		//gets the value of the radio
		selected_transition_tool_kit =  Array.from(document.getElementsByName("transition_tool_kit_radio_btn" + i)).find(radio => radio.checked);
		if (selected_transition_tool_kit == undefined){
			alert("You missed a button transition tool kit area of focus.");
		}
		//gets the text of question from container 1
		temp_Question = document.getElementById("container1_transition_tool_kit_question_" + i).textContent;
		//prints the questions to container 2
		document.getElementById("container2_transition_tool_kit_question_" + i).innerHTML = temp_Question + parseInt(selected_transition_tool_kit.value);
		//gets the value of each radio button and add them all up
		transition_tool_kitTotalPoints += parseInt(selected_transition_tool_kit.value);
	}
	//calculates the TRQ
	transition_tool_kitTRQ = parseFloat(transition_tool_kitTotalPoints / 4);
	if(transition_tool_kitTRQ <= 4.9)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_transition_tool_kit_result").textContent = "Your personal resilience TRQ is " +  transition_tool_kitTRQ + ". OFF TRACK:  Focused attention is required to identify a routine that incorporates your MIND, BODY, TRIBE, and your WHY to enable you to have the clarity, focus, and strength to move in a positive direction.  Schedule some focused time and work through the questions on pages 11 – 13 in this downloadable workbook:  https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		//input the self-aware results to container 2
		document.getElementById("container2_transition_tool_kit_results").textContent = "Your personal resilience TRQ is " +  transition_tool_kitTRQ + ". OFF TRACK: Focused attention is required to identify a routine that incorporates your MIND, BODY, TRIBE, and your WHY to enable you to have the clarity, focus, and strength to move in a positive direction. Schedule some focused time and work through the questions on pages 11 - 13 in this downloadable workbook: https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		document.getElementById("container1_transition_tool_kit_result").style.color = "red";
		document.getElementById("container2_transition_tool_kit_results").style.color = "red";
	}
	else if (transition_tool_kitTRQ > 4.9 && transition_tool_kitTRQ <= 7.99)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_transition_tool_kit_result").textContent = "Your personal resilience TRQ is " +  transition_tool_kitTRQ + ". NEEDS ATTENTION:   Resilience is our ability to bounce forward from our experiences.  A four-part process to consider incorporating into your routine is Mind, Body, Tribe, and WHY.  Mindfulness – Physical Wellness – Social Connection – Spiritual Renewal.  Consider scheduling some focused time and working through the questions on pages 11 – 13 in this downloadable workbook to develop a routine that will work for you:  https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		//input the self-aware results to container 2
		document.getElementById("container2_transition_tool_kit_results").textContent = "Your personal resilience TRQ is " +  transition_tool_kitTRQ + ". NEEDS ATTENTION: Resilience is our ability to bounce forward from our experiences. A four-part process to consider incorporating into your routine is Mind, Body, Tribe, and WHY. Mindfulness - Physical Wellness - Social Connection - Spiritual Renewal. Consider scheduling some focused time and working through the questions on pages 11 - 13 in 	this downloadable workbook to develop a routine that will work for you: https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		document.getElementById("container1_transition_tool_kit_result").style.color = "orange";
		document.getElementById("container2_transition_tool_kit_results").style.color = "orange";
	}
	else if (transition_tool_kitTRQ >7.99 && transition_tool_kitTRQ <= 10)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_transition_tool_kit_result").textContent = "Your personal resilience TRQ is " +  transition_tool_kitTRQ + ". ON TRACK:  GREAT JOB!  Keep mindfulness, physical wellness, social connection, and spiritual renewal part of daily and weekly routine!";
		//input the self-aware results to container 2
		document.getElementById("container2_transition_tool_kit_results").textContent = "Your personal resilience TRQ is " +  transition_tool_kitTRQ + ". ON TRACK:  GREAT JOB!  Keep mindfulness, physical wellness, social connection, and spiritual renewal part of daily and weekly routine!";
		document.getElementById("container1_transition_tool_kit_result").style.color = "green";
		document.getElementById("container2_transition_tool_kit_results").style.color = "green";
	}

	//------------------------------operational----------------------------------------//
	var operational_TotalPoints = 0;
	var operational_TRQ = parseFloat(0);
	//loop to get radio buttons value and copy the questions from container 1 to container 2 for pdf
	for (var i = 1; i <=6; i++)
	{
		//gets the value of the radio
		selected_operational =  Array.from(document.getElementsByName("operational_radio_btn" + i)).find(radio => radio.checked);
		if (selected_operational == undefined){
			alert("You missed a button operational area of focus.");
		}
		//gets the text of question from container 1
		temp_Question = document.getElementById("container1_operational_question_" + i).textContent;
		//prints the questions to container 2
		document.getElementById("container2_operational_question_" + i).innerHTML = temp_Question + parseInt(selected_operational.value);
		//gets the value of each radio button and add them all up
		operational_TotalPoints += parseInt(selected_operational.value);
	}
	//calculates the TRQ
	operational_TRQ = parseFloat(operational_TotalPoints / 6);

	if(operational_TRQ <= 4.99)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_operational_result").textContent = "Your operational TRQ is " +  operational_TRQ + ". OFF TRACK:  President Eisenhower once said, “PLANS are USELESS, but PLANNING is ESSENTIAL.  Focused attention is required to start considering a comprehensive plan to start the chapter of your journey.  Schedule some focused time and work through the questions on pages 14 – 16 in this workbook:  https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		//input the self-aware results to container 2
		document.getElementById("container2_operational_results").textContent = "Your operational TRQ is " +  operational_TRQ + ". OFF TRACK: President Eisenhower once said, \"PLANS are USELESS, but PLANNING is ESSENTIAL. Focused attention is required to start considering a comprehensive plan to start the chapter of your journey. Schedule some focused time and work through the questions on pages 14 - 16 in this workbook: https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		document.getElementById("container1_operational_result").style.color = "red";
		document.getElementById("container2_operational_results").style.color = "red";
	}
	else if (operational_TRQ > 4.99 && operational_TRQ <= 7.99)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_operational_result").textContent = "Your operational TRQ is " +  operational_TRQ + ". NEEDS ATTENTION:   General Patton once said, “A good plan violently executed now, is far better than a perfect plan never initiated.”  Consider scheduling some focused time and working through the questions on pages 14 – 16 in this workbook:  https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		//input the self-aware results to container 2
		document.getElementById("container2_operational_results").textContent = "Your operational TRQ is " +  operational_TRQ + ". NEEDS ATTENTION: General Patton once said, \"A good plan violently executed now, is far better than a perfect plan never initiated.\" Condider scheduling some focused time and working through the questions on pages 14 - 16 in this workbook: https://dennis-volpe.com/resources/download-transition-on-purpose-e-book/";
		document.getElementById("container1_operational_result").style.color = "orange";
		document.getElementById("container2_operational_results").style.color = "orange";
	}
	else if (operational_TRQ >7.99 && operational_TRQ <= 10)
	{
		//gets the self-aware results from container 1
		document.getElementById("container1_operational_result").textContent = "Your operational TRQ is " +  operational_TRQ + ". ON TRACK:  GREAT JOB!  Keep reflecting on your plan, your reality, and your vision of success and know your plans will change over time.";
		//input the self-aware results to container 2
		document.getElementById("container2_operational_results").textContent = "Your operational TRQ is " +  operational_TRQ + ". ON TRACK:  GREAT JOB!  Keep reflecting on your plan, your reality, and your vision of success and know your plans will change over time.";
		document.getElementById("container1_operational_result").style.color = "green";
		document.getElementById("container2_operational_results").style.color = "green";
	}
}

function HTMLtoPDF(){
  var doc = new jsPDF();
  var HTMLelement = $(".pdf_area").html();

	//the width of the text on the pdf
  doc.fromHTML(HTMLelement, 15, 15,{
    'width':190
  });
  doc.save("transition_assessment.pdf");
}
