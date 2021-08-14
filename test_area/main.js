window.onload=function(){
	radioButtonLoop();
}

//creating buttons
function radioButtonLoop(){
	var x=1;
	const radioButtonArray = []; //an array that holds the radio buttons per question
	var explore = 5; //explore section has 8 questions
	var network = 3; //networking section has 8 questions
	var focus = 4; //focus section has 8 questions
	var operation = 6; //operation section has 8 questions

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
}

function check() {
  document.getElementById("download-btn").innerHTML = '<button type="button" class="dl-btn" onclick="HTMLtoPDF()">Download</button>';

  //prints the name and results to the second container
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  document.getElementById("fName").textContent = "First Name: " + fName;
  document.getElementById("lName").textContent = "Last Name: " + lName;

  var selfAwareTitle = document.getElementById("container1_self_aware_title").textContent;
  document.getElementById("container2_self_aware_title").innerHTML = selfAwareTitle;
	var explorationTitle = document.getElementById("container1_exploration_title").textContent;
  document.getElementById("container2_exploration_title").innerHTML = explorationTitle;

	var selected;
	var temp_Question;
	var selfAwareTotal = 0;
	var selfAwareTRQ = parseFloat(0);

	//loop to get values for self-aware sections with 8 questions
	for (var i = 1; i <=8; i++)
	{
    //gets the value of the radio
		selected =  Array.from(document.getElementsByName("self_aware_radio_btn" + i)).find(radio => radio.checked);
    //gets the text of question from container 1
    temp_Question = document.getElementById("container1_self_aware_question" + i).textContent;
    //prints the questions to container 2
    document.getElementById("container2_self_aware_title_question_" + i).innerHTML = temp_Question + parseInt(selected.value);
    //gets the value of each radio button and add them all up
		selfAwareTotal += parseInt(selected.value);
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
}

function HTMLtoPDF(){
  var doc = new jsPDF();
  var HTMLelement = $(".pdf_area").html();

  doc.fromHTML(HTMLelement, 15, 15,{
    'width':190
  });
//  doc.text("Hello world!", 10, 10);
  doc.save("transition_assessment.pdf");
}
/*
const containerDisplays = Array.from(document.querySelectorAll("form .containerDisplay"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changecontainerDisplay("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changecontainerDisplay("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
  let index = 0;
  const active = document.querySelector(".active");
  index = containerDisplays.indexOf(active);
  containerDisplays[index].classList.remove("active");
  containerDisplays[0].classList.remove("active");
});

function changecontainerDisplay(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = containerDisplays.indexOf(active);
  containerDisplays[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  containerDisplays[index].classList.add("active");
}
*/
