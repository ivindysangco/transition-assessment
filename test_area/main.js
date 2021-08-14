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
	selfAwareTRQ = parseFloat(selfAwareTotal / 8 / 2);
	//gets the self-aware results from container 1
	document.getElementById("container1_self_aware_result").textContent = "Your self-awareness TRQ is " +  selfAwareTRQ;
	//input the self-aware results to container 2
  document.getElementById("container2_self_aware_results").textContent = "Your self-awareness TRQ is " +  selfAwareTRQ;
	if(selfAwareTRQ <= 2.99)
	{
		document.getElementById("container1_self_aware_result").style.color = "red";
    document.getElementById("container2_self_aware_results").style.color = "red";
	}
	else if (selfAwareTRQ > 2.99 && selfAwareTRQ <= 3.99)
	{
		document.getElementById("container1_self_aware_result").style.color = "orange";
    document.getElementById("container2_self_aware_results").style.color = "orange";
	}
	else if (selfAwareTRQ >3.99 && selfAwareTRQ <= 5)
	{
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
	explorationTRQ = parseFloat(explorationTotalPoints / 5 / 2);
	//gets the self-aware results from container 1
	document.getElementById("container1_exploration_result").textContent = "Your exploration TRQ is " +  explorationTRQ;
	//input the self-aware results to container 2
	document.getElementById("container2_exploration_results").textContent = "Your exploration TRQ is " +  explorationTRQ;
	if(explorationTRQ <= 2.99)
	{
		document.getElementById("container1_exploration_result").style.color = "red";
		document.getElementById("container2_exploration_results").style.color = "red";
	}
	else if (explorationTRQ > 2.99 && explorationTRQ <= 3.99)
	{
		document.getElementById("container1_exploration_result").style.color = "orange";
		document.getElementById("container2_exploration_results").style.color = "orange";
	}
	else if (explorationTRQ >3.99 && explorationTRQ <= 5)
	{
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
	networkingTRQ = parseFloat(networkingTotalPoints / 3 / 2);
	//gets the self-aware results from container 1
	document.getElementById("container1_networking_result").textContent = "Your networking TRQ is " +  networkingTRQ;
	//input the self-aware results to container 2
	document.getElementById("container2_networking_results").textContent = "Your networking TRQ is " +  networkingTRQ;
	if(networkingTRQ <= 2.99)
	{
		document.getElementById("container1_networking_result").style.color = "red";
		document.getElementById("container2_networking_results").style.color = "red";
	}
	else if (networkingTRQ > 2.99 && networkingTRQ <= 3.99)
	{
		document.getElementById("container1_networking_result").style.color = "orange";
		document.getElementById("container2_networking_results").style.color = "orange";
	}
	else if (networkingTRQ >3.99 && networkingTRQ <= 5)
	{
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
	transition_tool_kitTRQ = parseFloat(transition_tool_kitTotalPoints / 4 / 2);
	//gets the self-aware results from container 1
	document.getElementById("container1_transition_tool_kit_result").textContent = "Your transition tool kit TRQ is " +  transition_tool_kitTRQ;
	//input the self-aware results to container 2
	document.getElementById("container2_transition_tool_kit_results").textContent = "Your transition tool kit TRQ is " +  transition_tool_kitTRQ;
	if(transition_tool_kitTRQ <= 2.99)
	{
		document.getElementById("container1_transition_tool_kit_result").style.color = "red";
		document.getElementById("container2_transition_tool_kit_results").style.color = "red";
	}
	else if (transition_tool_kitTRQ > 2.99 && transition_tool_kitTRQ <= 3.99)
	{
		document.getElementById("container1_transition_tool_kit_result").style.color = "orange";
		document.getElementById("container2_transition_tool_kit_results").style.color = "orange";
	}
	else if (transition_tool_kitTRQ >3.99 && transition_tool_kitTRQ <= 5)
	{
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
	operational_TRQ = parseFloat(operational_TotalPoints / 6 / 2);
	//gets the self-aware results from container 1
	document.getElementById("container1_operational_result").textContent = "Your operational TRQ is " +  operational_TRQ;
	//input the self-aware results to container 2
	document.getElementById("container2_operational_results").textContent = "Your operational TRQ is " +  operational_TRQ;
	if(operational_TRQ <= 2.99)
	{
		document.getElementById("container1_operational_result").style.color = "red";
		document.getElementById("container2_operational_results").style.color = "red";
	}
	else if (operational_TRQ > 2.99 && operational_TRQ <= 3.99)
	{
		document.getElementById("container1_operational_result").style.color = "orange";
		document.getElementById("container2_operational_results").style.color = "orange";
	}
	else if (operational_TRQ >3.99 && operational_TRQ <= 5)
	{
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
