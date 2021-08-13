window.onload=function(){
	radioButtonLoop();
}

//creating buttons
function radioButtonLoop(){
	var x=1;
	const selfAware = []; //an array that holds the radio buttons per question
	var explore = 5; //explore section has 8 questions
	var network = 3; //networking section has 8 questions
	var focus = 4; //focus section has 8 questions
	var operation = 6; //operation section has 8 questions

	//loop to create 8 arrays for self-awareness 8 questions to put 10 arrays of radio buttons
	for (var a = 1; a <= 8; a++)
	{
		//creating 10 arrays per 1 question
		selfAware[a] = [];
		for (var i=1; i<=10; i++)
		{
			selfAware[a] += '<input type="radio" value="' + i + '" name="selfAwareQ' + a + '" class="radio-btn">' + i;
			//document.getElementById("radioLoop").innerHTML = selfAware[5];
		}
		//prints the code from js to html under selfAwQ
		document.getElementById("selfAwQ" + a).innerHTML = selfAware[a];
	}
}

function check() {
  document.getElementById("download-btn").innerHTML = '<button type="button" class="dl-btn" onclick="HTMLtoPDF()">Download</button>';

  //prints the name and results to the second container
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  document.getElementById("fName").textContent = "First Name: " + fName;
  document.getElementById("lName").textContent = "Last Name: " + lName;

  var selfAwareTitle = document.getElementById("section_title").textContent;
  document.getElementById("self_aware_title").innerHTML = selfAwareTitle;

//  var selfWareQT1 = document.getElementById("selfAwareQText1").textContent;
//  document.getElementById("print-self-aware-q-1").innerHTML = selfWareQT1;

	var selected;
  var selfAwareQT;
	var selfAwareTotal = 0;
	var selfAwareTRQ = parseFloat(0);
	var selfAwareColor;

	//loop to get values for self-aware sections with 8 questions
	for (var i = 1; i <=8; i++)
	{
    //gets the value of the radio
		selected =  Array.from(document.getElementsByName("selfAwareQ" + i)).find(radio => radio.checked);
    //gets the text of question from container 1
    selfWareQT = document.getElementById("selfAwareQText" + i).textContent;
    //prints the questions to container 2
    document.getElementById("print_self_aware_q_" + i).innerHTML = selfWareQT + parseInt(selected.value);
    //gets the value of each radio button and add them all up
		selfAwareTotal += parseInt(selected.value);
    //prints the total TRQ
		document.getElementById("result").textContent = "SelfAwareTotal is " +  selfAwareTotal;
	}
	selfAwareTRQ = parseFloat(selfAwareTotal / 8 / 2);
	//result.textContent= 'Self-awareness Transition Readiness Quotient (TRQ) is ' + (selfAwareTotal / 8 / 2);
	document.getElementById("result").textContent = "Your self-awareness TRQ is " +  selfAwareTRQ;
  document.getElementById("print_result").textContent = "Your self-awareness TRQ is " +  selfAwareTRQ;
	if(selfAwareTRQ <= 2.99)
	{
		document.getElementById("result").style.color = "red";
    document.getElementById("print_result").style.color = "red";
	}
	else if (selfAwareTRQ > 2.99 && selfAwareTRQ <= 3.99)
	{
		document.getElementById("result").style.color = "orange";
    document.getElementById("print_result").style.color = "orange";
	}
	else if (selfAwareTRQ >3.99 && selfAwareTRQ <= 5)
	{
		document.getElementById("result").style.color = "green";
    document.getElementById("print_result").style.color = "green";
	}
}

function HTMLtoPDF(){
  var doc = new jsPDF();
  var HTMLelement = $(".print-area").html();

  doc.fromHTML(HTMLelement, 15, 15,{
    'width':190
  });
//  doc.text("Hello world!", 10, 10);
  doc.save("transition_assessment.pdf");
}
/*
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
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
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  steps[0].classList.remove("active");
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}
*/
