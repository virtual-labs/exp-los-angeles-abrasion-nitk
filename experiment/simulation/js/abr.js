var screensVal = 0;
var posLeft = 193;
var posTop = 185;
var openInt = 0;
var varDeg = 40;
var openWidth = 211;
var ndeg = 0;
var d0 = 0,d1 = 0,d2 = 0,d3 = 0;
var clkInterval = 0;
var revInterval = 0;
var speed = 10;
var rotCount = 0;
var boundryVal = 9;
var upDown = 0;
var obsCount = 0;
var percentageWear = 0;
var userPerentageWear = 0;
var userCheckCount = 0;

// Prompt questions during simulation using objects
var questions = {
	ans1:0,
	options:[],
	nextFunction:function(){},
	setOptions:function(d1,d2,d3,d4,d5){
		questions.options = new Array(d1,d2,d3,d4,d5);
	},
	setAns:function(ans){
		questions.ans1 = ans;
	},
	frameQuestions:function(qun){
		var myDiv  = document.getElementById("question-div");
		var myDiv1 = document.getElementById("divq");
		// myDiv.style.visibility = "visible";
		// myDiv.style.animation = "blinkingText 1s 1";
		myDiv.style.visibility = "visible";
		// myDiv.classList.add("fadeIn");
			document.getElementById("divq").innerHTML = qun;
		//Create and append select list
		var selectList = document.createElement("select");
		selectList.setAttribute("id", "mySelect");
		selectList.setAttribute("autocomplete", "off");
		// selectList.setAttribute("onchange", "questions.setAnswer()");
		
		var button1 = document.createElement("input");
		button1.setAttribute("onclick","questions.setAnswer(this)");
		button1.setAttribute("type","button");
		button1.setAttribute("value","OK");
		
		// Appending the contents to the division
		myDiv1.appendChild(selectList);
		myDiv1.appendChild(button1);

	//Create and append the options
		for (var i = 0; i < questions.options.length; i++) {
			var opt = document.createElement("option");
			opt.setAttribute("value", questions.options[i]);
			opt.text = questions.options[i];
			selectList.appendChild(opt);
		}
	},
	setAnswer:function(ev){
		var x = document.getElementById("mySelect");
		var i = x.selectedIndex;
		if(i == 0)
		{
			var dispAns = document.createElement("p");
			dispAns.innerHTML = "You have not selected any value";
			document.getElementById("divq").appendChild(dispAns);		
			setTimeout(function(){
				dispAns.innerHTML = "";
			},200);
		}
		else if(i == questions.ans1)
		{
			ev.onclick = "";
			var dispAns = document.createElement("p");
			dispAns.innerHTML = "You are right <span class='boldClass'>&#128077;</span> ";
			document.getElementById("divq").appendChild(dispAns);		
			questions.callNextFunction();
		}
		else
		{
			ev.onclick = "";
			var dispAns = document.createElement("p");
			dispAns.innerHTML = "You are Wrong <span class='boldClass'>&#128078;</span><br>Answer is: "+x.options[questions.ans1].text;
			document.getElementById("divq").appendChild(dispAns);		
			questions.callNextFunction();
		}
	},
	setCallBack:function(cb){
		nextFunction = cb;
	},
	callNextFunction:function()
	{
		setTimeout(function()
		{
			// document.getElementById("question-div").innerHTML = "";
			// document.getElementById("question-div").style.animation="";
			document.getElementById("question-div").style.visibility = "hidden";
			nextFunction();
		},800);
	}
}


function checkInputValid(e) {
	e.value = e.value.match(/\d*(\.\d*)?/)[0];
}

// to move to next screen
function navNext()
{
	for(temp=0;temp<=7;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

//animate arrow at position
function animateArrowATPosition(left,top,degg)
{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)"; 
	 // Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
}

function magic()
{
	if(simsubscreennum==1)
	{
		setTimeout(function()
		{
			document.getElementById("can1-1").style.visibility = "visible";
			document.getElementById("can1-1").style.animation = "slidePre 1s forwards";
		},500);
		setTimeout(function()
		{
			document.getElementById("gradeB").style.backgroundColor = "grey";
			document.getElementById("gradeB").style.color = "white";
			document.getElementById("can1-2").style.visibility = "visible";
		},1000);
		setTimeout(function()
		{
			document.getElementById("can1-3").style.visibility = "visible";
		},1500);
		setTimeout(function()
		{
			document.getElementById("can1-4").style.visibility = "visible";
			document.getElementById("nextButton").style.visibility = "visible";
		},2000);
		
	}
	else if(simsubscreennum==2)
	{
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("selectGrade").style.visibility = "hidden";
		document.getElementById("can1-1").style.visibility = "hidden";
		document.getElementById("can1-2").style.visibility = "hidden";
		document.getElementById("can1-3").style.visibility = "hidden";
		document.getElementById("can1-4").style.visibility = "hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(330,335,270);
		document.getElementById("can2-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("can2-2").onclick = "";
			document.getElementById("can2-2").style.animation="moveSeive10 1s forwards";
			setTimeout(function(){
				document.getElementById("can2-3").style.animation="slideSieve125 0.8s forwards";
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					animateArrowATPosition(330,335,270);
					document.getElementById("can2-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("can2-3").onclick = "";
						document.getElementById("can2-3").style.animation="moveSeive125 1s forwards";
						setTimeout(function(){
							document.getElementById("can2-3a").style.animation="slideSieve20 0.8s forwards";
							setTimeout(function()
							{
								myInt = setInterval(function(){ animatearrow(); }, 500);
								animateArrowATPosition(330,335,270);
								document.getElementById("can2-3a").onclick=function()
								{
									myStopFunction();
									document.getElementById("can2-3a").onclick = "";
									document.getElementById("can2-3a").style.animation="moveSeive20 1s forwards";
									setTimeout(function()
									{
										document.getElementById("can2-4").style.visibility="visible";
										myInt = setInterval(function(){ animatearrow(); }, 500);
										animateArrowATPosition(350,225,360);
										document.getElementById("can2-4").onclick=function()
										{
											myStopFunction();
											document.getElementById("can2-4").onclick = "";
											document.getElementById("can2-4").style.transformOrigin = "100% 80%";
											document.getElementById("can2-4").style.animation = "moveAgg 1s forwards";
											setTimeout(function()
											{
												document.getElementById("can2-3a").src = "images/filled20.png";
												document.getElementById("can2-4").style.visibility="hidden";
												document.getElementById("can2-5").style.visibility="visible";
												document.getElementById("can2-6").style.visibility="visible";
												myInt = setInterval(function(){ animatearrow(); }, 500);
												animateArrowATPosition(375,230,360);
												document.getElementById("can2-6").onclick=function()
												{
													myStopFunction();
													document.getElementById("can2-6").onclick = "";
													document.getElementById("can2-6").style.animation = "shiftCap 1s forwards";
													setTimeout(function()
													{
														document.getElementById("can2-1").style.visibility = "hidden";
														document.getElementById("can2-2").style.visibility = "hidden";
														document.getElementById("can2-3").style.visibility = "hidden";
														document.getElementById("can2-3a").style.visibility = "hidden";
														document.getElementById("can2-5").style.visibility = "hidden";
														document.getElementById("can2-6").style.visibility = "hidden";
														document.getElementById("can2-3b").style.visibility = "visible";
														document.getElementById("can2-7").style.visibility = "visible";
														document.getElementById("can2-7l").style.visibility = "visible";
														document.getElementById("can2-7r").style.visibility = "visible";
														myInt = setInterval(function(){ animatearrow(); }, 500);
														animateArrowATPosition(200,350,360);
														document.getElementById("can2-3b").onclick=function()
														{
															myStopFunction();
															document.getElementById("can2-3b").onclick = "";
															document.getElementById("can2-3b").style.animation = "moveSieveSet 1s forwards";
															setTimeout(function(){
																document.getElementById("can2-3b").style.width="110px";
																document.getElementById("can2-9").style.visibility = "visible";
																myInt = setInterval(function(){ animatearrow(); }, 500);
																animateArrowATPosition(205,140,270);
																document.getElementById("can2-9").onclick=function()
																{
																	myStopFunction();
																	document.getElementById("can2-9").onclick = "";
																	document.getElementById("can2-9").style = "position:absolute; left:437.5px; top:170px;";
																	myInt = setInterval(function(){ animatearrow(); }, 500);
																	animateArrowATPosition(404,140,180);
																	document.getElementById("can2-7l").onclick=function()
																	{
																		myStopFunction();
																		document.getElementById("can2-7l").onclick = "";
																		document.getElementById("can2-7l").style.top="152.5px";
																		myInt = setInterval(function(){ animatearrow(); }, 500);
																		animateArrowATPosition(584,145,360);
																		document.getElementById("can2-7r").onclick=function()
																		{
																			myStopFunction();
																			document.getElementById("can2-7r").onclick = "";
																			document.getElementById("can2-7r").style.top="160.5px";
																			document.getElementById("can2-7on").style.visibility = "visible";
																			myInt = setInterval(function(){ animatearrow(); }, 500);
																			animateArrowATPosition(420,410,90);
																			document.getElementById("can2-7on").onclick=function()
																			{
																				myStopFunction();
																				document.getElementById("can2-7on").style.visibility = "hidden";
																				document.getElementById("can2-7onon").style.visibility = "visible";
																				document.getElementById("can2-3b").style="position:absolute; left:450px; top:165px; width:110px;";
																				document.getElementById("can2-3b").style.animation="shake 0.3s 8";
																				setTimeout(function()
																				{
																					document.getElementById("nextButton").style.visibility="visible";
																				},2500);
																			}
																		}
																	}
																}
															},1000);
														}
													},1000);
												}
											},1000);
										}
									},1000);
								}
							},800);
						},800);
					}	
				},1000);
			},800);
		}			
	}
	else if(simsubscreennum==3)
	{
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("can2-7").style.visibility="hidden";
		document.getElementById("can2-7onon").style.visibility = "hidden";
		document.getElementById("can2-3b").style.visibility="hidden";
		document.getElementById("can2-9").style.visibility="hidden";
		document.getElementById("can2-7l").style.visibility="hidden";
		document.getElementById("can2-7r").style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(630,200,360);
		document.getElementById("can3-3r").onclick=function()
		{
			myStopFunction();
			document.getElementById("can3-3r").onclick="";
			document.getElementById("can3-3r").style.top="145px";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			animateArrowATPosition(445,200,180);
			document.getElementById("can3-3l").onclick=function()
			{
				myStopFunction();
				document.getElementById("can3-3l").onclick="";
				document.getElementById("can3-3l").style.top="140px";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				animateArrowATPosition(525,190,270);
				document.getElementById("can3-3").onclick=function()
				{
					myStopFunction();
					document.getElementById("can3-3").style.visibility="hidden";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					animateArrowATPosition(535,200,270);
					document.getElementById("can3-2").onclick=function()
					{
						myStopFunction();
						document.getElementById("can3-2").style.visibility="hidden";
						document.getElementById("can3-4").style.visibility="visible";
						document.getElementById("can3-5").style.visibility="visible";
						document.getElementById("can3-6").style.visibility="visible";
						document.getElementById("can3-6a").style.visibility="visible";
						document.getElementById("can3-7").style.visibility="visible";
						document.getElementById("can3-8").style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById("can3-1").style.visibility="hidden";
							document.getElementById("can3-1on").style.visibility="hidden";
							document.getElementById("can3-2").style.visibility="hidden";
							document.getElementById("can3-3").style.visibility="hidden";
							document.getElementById("can3-3l").style.visibility="hidden";
							document.getElementById("can3-3r").style.visibility="hidden";
							document.getElementById("can3-9").style.visibility="visible";
							document.getElementById("can3-10").style.visibility="visible";
							document.getElementById("can3-11").style.visibility="visible";
							document.getElementById("can3-12").style.visibility="visible";
							var q0 = Object.create(questions);																								
							generateQuestion(q0,"Weight of the sample to be taken:","","100g","500g","1000g","5000g",4,measureSample,550,170,200,150);
						},200);
					}
				}
			}
		}

	}
	else if(simsubscreennum==4)
	{
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("can3Span").style.visibility = "hidden";
		document.getElementById("v3-1").style.visibility = "hidden";
		document.getElementById("can3-9").style.visibility = "hidden";
		document.getElementById("can3-10").style.visibility = "hidden";
		document.getElementById("can3-12").style.visibility = "hidden";
		document.getElementById("can3-13").style.visibility = "hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(220,228,180);	
		document.getElementById("can4-3l").onclick=function()
		{
			myStopFunction();
			document.getElementById("can4-3l").onclick="";
			document.getElementById("can4-3l").style.animation = "moveBoltUp 0.6s forwards";
			setTimeout(function()
			{
				document.getElementById("can4-3l").style.visibility  = "hidden";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				animateArrowATPosition(435,228,360);	
				document.getElementById("can4-3r").onclick=function()
				{
					myStopFunction();
					document.getElementById("can4-3r").onclick="";
					document.getElementById("can4-3r").style.animation = "moveBoltUp 0.6s forwards";
					setTimeout(function()
					{
						document.getElementById("can4-3r").style.visibility  = "hidden";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						animateArrowATPosition(245,345,90);	
						document.getElementById("can4-4l").onclick=function()
						{
							myStopFunction();
							document.getElementById("can4-4l").onclick="";
							document.getElementById("can4-4l").style.animation = "moveBoltDown 0.6s forwards";
							setTimeout(function()
							{
								document.getElementById("can4-4l").style.visibility  = "hidden";
								myInt = setInterval(function(){ animatearrow(); }, 500);
								animateArrowATPosition(410,345,90);	
								document.getElementById("can4-4r").onclick=function()
								{
									myStopFunction();
									document.getElementById("can4-4r").onclick="";
									document.getElementById("can4-4r").style.animation = "moveBoltDown 0.6s forwards";
									setTimeout(function()
									{
										document.getElementById("can4-4r").style.visibility  = "hidden";
										myInt = setInterval(function(){ animatearrow(); }, 500);
										animateArrowATPosition(320,340,90);	
										document.getElementById("can4-2").onclick=function()
										{
											myStopFunction();
											document.getElementById("can4-2").onclick="";
											document.getElementById("can4-2").style.animation = "moveCover 1s forwards linear";
											setTimeout(function()
											{
												document.getElementById("can4-2").style.visibility  = "hidden";
												document.getElementById("can4-6").style.visibility  = "visible";
												// pourAggregate();
												  // openInt = setInterval(function(){ moveCover(); }, 200)
												var q1 = Object.create(questions);																								
												generateQuestion(q1,"What is the sample grade and no of abrasive charges taken:","","Grage A : 12","Grade B : 12","Grade C : 8","Grade D : 6",2,pourAggregate,500,250,250,150);
											},1400);
										}
									},600);
								}
							},600);
						}
					},600);
				}
			},600);
		}
	}
	else if(simsubscreennum == 5)
	{
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("can4-1").style.visibility = "hidden";
		document.getElementById("can4-2").style.visibility = "hidden";
		document.getElementById("can4-3l").style.visibility = "hidden";
		document.getElementById("can4-3r").style.visibility = "hidden";
		document.getElementById("can4-4r").style.visibility = "hidden";
		document.getElementById("can4-4l").style.visibility = "hidden";
		var q2 = Object.create(questions);																								
		generateQuestion(q2,"Number of revolutions for Grade B sample : ","","100","500","1000","250",2,rotateMachine,500,250,250,150);
	}
	else if(simsubscreennum == 6)
	{
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("can5-2a").style.visibility = "hidden";
		document.getElementById("can5-10a").style.visibility = "hidden";
		document.getElementById("can5-10b").style.visibility = "hidden";
		document.getElementById("can5-10c").style.visibility = "hidden";
		document.getElementById("can5-10d").style.visibility = "hidden";
		document.getElementById("can5-10e").style.visibility = "hidden";
		document.getElementById("can5-10f").style.visibility = "hidden";
		document.getElementById("can5-10g").style.visibility = "hidden";
		document.getElementById("can5-10h").style.visibility = "hidden";
		document.getElementById("can5-10i").style.visibility = "hidden";
		document.getElementById("can5-9").style.visibility = "hidden";
		document.getElementById("can5-1").style.visibility = "hidden";
		myInt=setInterval(function(){animatearrow();},500);
		animateArrowATPosition(330,365,270);
		document.getElementById("can6-4").onclick=function()
		{
			myStopFunction();
			document.getElementById("can6-4").onclick="";
			document.getElementById("can6-4").style.animation="moveSeive175 1s forwards";
			setTimeout(function()
			{
				document.getElementById("can6-1").style.visibility = "visible";  
				document.getElementById("can6-5").style.visibility = "visible";  
				myInt=setInterval(function(){animatearrow();},500);
				animateArrowATPosition(580,320,360);
				document.getElementById("can6-5").onclick=function()
				{
					myStopFunction();
					document.getElementById("can6-5").onclick="";
					document.getElementById("can6-5").style.animation="moveTrowel 1s forwards ease";
					setTimeout(function()
					{
						document.getElementById("can6-5").style.visibility = "hidden";  
						document.getElementById("can6-6").style.visibility = "visible";
						document.getElementById("can6-1").src = "images/aggPlate2.png";
						document.getElementById("can6-6").style.animation="moveTrowelPour 1s forwards ease";
						setTimeout(function()
						{
							document.getElementById("can6-8").style.visibility = "visible";
						},950);
						setTimeout(function()
						{
							document.getElementById("can6-6").style.visibility = "hidden";
							document.getElementById("can6-7").style.visibility = "visible";
							document.getElementById("can6-8").style.visibility = "hidden";
							setTimeout(function()
							{
								document.getElementById("can6-7").style.visibility = "hidden";
								document.getElementById("can6-6").style.animation = "";
								document.getElementById("can6-6").style.transformOrigin = "";
								document.getElementById("can6-6").style.top = "280px";
								setTimeout(function()
								{
									document.getElementById("can6-6").style.visibility = "visible";
									document.getElementById("can6-1").src = "images/aggPlate3.png";
									document.getElementById("can6-6").style.animation="moveTrowelPour2 1s forwards ease";
									setTimeout(function()
									{
										document.getElementById("can6-8").style.visibility = "visible";
									},950);
									setTimeout(function()
									{
										document.getElementById("can6-6").style.visibility = "hidden";
										document.getElementById("can6-7").style.visibility = "visible";
										document.getElementById("can6-8").style.visibility = "hidden";
										document.getElementById("can6-2").style.visibility = "visible";
										document.getElementById("can6-4").src = "images/filled175.png";
										setTimeout(function()
										{
											document.getElementById("can6-7").style.visibility = "hidden";
											document.getElementById("can6-6").style.animation = "";
											document.getElementById("can6-6").style.transformOrigin = "";
											document.getElementById("can6-6").style.top = "260px";
											setTimeout(function()
											{
												document.getElementById("can6-6").style.visibility = "visible";
												document.getElementById("can6-1").src = "images/aggPlate4.png";
												document.getElementById("can6-6").style.animation="moveTrowelPour3 1s forwards ease";
												setTimeout(function()
												{
													document.getElementById("can6-8").style.visibility = "visible";
												},950);
												setTimeout(function()
												{
													document.getElementById("can6-6").style.visibility = "hidden";
													document.getElementById("can6-7").style.visibility = "visible";
													document.getElementById("can6-8").style.visibility = "hidden";
													document.getElementById("can6-2").style.top = "328px";
													setTimeout(function()
													{
														document.getElementById("can6-7").style.visibility = "hidden";
														document.getElementById("can6-6").style.animation = "";
														document.getElementById("can6-6").style.transformOrigin = "";
														document.getElementById("can6-6").style.left = "320px";
														setTimeout(function()
														{
															document.getElementById("can6-6").style.visibility = "visible";
															document.getElementById("can6-1").src = "images/aggPlate5.png";
															document.getElementById("can6-6").style.animation="moveTrowelPour4 1s forwards ease";
															setTimeout(function()
															{
																document.getElementById("can6-8").style.visibility = "visible";
															},950);
															setTimeout(function()
															{
																document.getElementById("can6-6").style.visibility = "hidden";
																document.getElementById("can6-7").style.visibility = "visible";
																document.getElementById("can6-8").style.visibility = "hidden";
																document.getElementById("can6-1").style.visibility = "hidden";
																document.getElementById("can6-2").style.top = "326.5px";
																setTimeout(function()
																{
																	document.getElementById("can6-7").style.visibility = "hidden";
																	document.getElementById("can6-13").style.visibility = "visible";
																	myInt=setInterval(function(){animatearrow();},500);
																	animateArrowATPosition(310,250,-90);
																	document.getElementById("can6-13").onclick=function()
																	{
																		myStopFunction();
																		document.getElementById("can6-13").style.animation="placeCap 0.8s forwards";
																		setTimeout(function()
																		{
																			document.getElementById("can6-2").style.visibility="hidden";
																			document.getElementById("can6-3").style.visibility="hidden";
																			document.getElementById("can6-4").style.visibility="hidden";
																			document.getElementById("can6-13").style.visibility="hidden";
																			document.getElementById("can6-14").style.visibility="visible";
																			document.getElementById("can6-15").style.visibility="visible";
																			myInt=setInterval(function(){animatearrow();},500);
																			animateArrowATPosition(230,360,360);
																			document.getElementById("can6-14").onclick=function()
																			{
																				myStopFunction();
																				document.getElementById("can6-14").onclick="";
																				document.getElementById("can6-14").style.animation="moveSieveSet2 1s forwards";
																				setTimeout(function()
																				{
																					document.getElementById("can6-14").style.width="110px";
																				},980);
																				setTimeout(function(){
																					document.getElementById("can6-12").style.visibility="visible";
																					myInt=setInterval(function(){animatearrow();},500);
																					animateArrowATPosition(320,170,-90);
																					document.getElementById("can6-12").onclick=function()
																					{
																						myStopFunction();
																						document.getElementById("can6-12").onclick="";
																						document.getElementById("can6-12").style="position:absolute; left:437.5px; top:195px;";
																						document.getElementById("can6-11l").style.visibility="visible";
																						myInt=setInterval(function(){animatearrow();},500);
																						animateArrowATPosition(435,182.5,180);
																						document.getElementById("can6-11l").onclick=function()
																						{
																							myStopFunction();
																							document.getElementById("can6-11l").onclick="";
																							document.getElementById("can6-11l").style="position:absolute; left:434px; top:176.5px;";
																							setTimeout(function()
																							{
																								document.getElementById("can6-11r").style.visibility="visible";
																								myInt=setInterval(function(){animatearrow();},500);
																								animateArrowATPosition(625,182.5,360);
																								document.getElementById("can6-11r").onclick=function()
																								{
																									myStopFunction();
																									document.getElementById("can6-11r").onclick="";
																									document.getElementById("can6-11r").style="position:absolute; left:545px; top:183px;";
																									document.getElementById("can6-9on").style.visibility="visible";
																									setTimeout(function()
																									{
																										myInt=setInterval(function(){animatearrow();},500);
																										animateArrowATPosition(470,435,90);
																										document.getElementById("can6-9on").onclick=function()
																										{
																											myStopFunction();
																											document.getElementById("can6-9on").onclick="";
																											document.getElementById("can6-9on").style.visibility="hidden";
																											document.getElementById("can6-9onon").style.visibility="visible";
																											document.getElementById("can6-14").style="position:absolute; left:450px; top:195px; width:110px;";
																											document.getElementById("can6-14").style.animation="shake 0.3s 8";
																											setTimeout(function()
																											{
																												document.getElementById("nextButton").style.visibility="visible";
																											},2400);
																										}
																									},500);
																								}
																							},500);
																						}
																					}
																				},1000);
																			}
																		},850);
																	}
																},500);
															},1000);
														},200);
													},1200);
												},1000);
											},200);
										},1200);
									},1000);
								},200);
							},1200);
						},1000);
					},1000);
				}
			},1000);
		}
	}
	else if(simsubscreennum == 7)
	{
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("can6-14").style.visibility="hidden";
		document.getElementById("can6-15").style.visibility="hidden";
		document.getElementById("can6-9on").style.visibility="hidden";
		document.getElementById("can6-9onon").style.visibility="hidden";
		document.getElementById("can6-11l").style.visibility="hidden";
		document.getElementById("can6-11r").style.visibility="hidden";
		document.getElementById("can6-12").style.visibility="hidden";
		myInt=setInterval(function(){animatearrow();},500);
		animateArrowATPosition(630,227.5,360);
		document.getElementById("can7-3r").onclick=function()
		{
			myStopFunction();
			document.getElementById("can7-3r").onclick="";
			document.getElementById("can7-3r").style.top="145px";
			myInt=setInterval(function(){animatearrow();},500);
			animateArrowATPosition(440,227,180);
			document.getElementById("can7-3l").onclick=function()
			{
				myStopFunction();
				document.getElementById("can7-3l").onclick="";
				document.getElementById("can7-3l").style.top="140px";
				myInt=setInterval(function(){animatearrow();},500);
				animateArrowATPosition(525,200,270);
				document.getElementById("can7-3").onclick=function()
				{
					myStopFunction();
					document.getElementById("can7-3").onclick="";		
					document.getElementById("can7-3").style.visibility="hidden";
					myInt=setInterval(function(){animatearrow();},500);
					animateArrowATPosition(525,220,270);
					document.getElementById("can7-2").onclick=function()
					{
						myStopFunction();
						document.getElementById("can7-2").onclick="";		
						document.getElementById("can7-2").style.visibility="hidden";
						document.getElementById("can7-4").style.visibility="visible";
						document.getElementById("can7-5").style.visibility="visible";
						document.getElementById("can7-6").style.visibility="visible";
						document.getElementById("can7-7").style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById("can7-1").style.visibility="hidden";
							document.getElementById("can7-3l").style.visibility="hidden";
							document.getElementById("can7-3r").style.visibility="hidden";
							myInt=setInterval(function(){animatearrow();},500);
							animateArrowATPosition(117,280,270);
							document.getElementById("can7-7").onclick=function()
							{
								myStopFunction();
								document.getElementById("can7-7").onclick="";		
								document.getElementById("can7-7").style.visibility="hidden";
								document.getElementById("can7-6").style.visibility="visible";
								document.getElementById("can7-9").style.visibility="visible";
								document.getElementById("can7-9a").style.visibility="visible";
								document.getElementById("can7-9b").style.visibility="visible";
								document.getElementById("can7-10").style.visibility="visible";
								myInt = setInterval(function(){ animatearrow(); }, 500);
								animateArrowATPosition(440,470,90);	
								document.getElementById("can7-9a").onclick=function()
								{
									myStopFunction();
									document.getElementById("can7-9a").onclick="";
									document.getElementById("can7-9a").style.visibility="hidden";
									document.getElementById('v7-2').style.visibility="visible";
									document.getElementById("can7-9").style.backgroundColor = "lightgrey";
									document.getElementById("v7-2").innerHTML = "150.00";	
									myInt = setInterval(function(){ animatearrow(); }, 500);
									animateArrowATPosition(545,470,90);	
									document.getElementById("can7-9b").onclick=function()
									{
										myStopFunction();
										document.getElementById("can7-9b").onclick="";
										document.getElementById('can7-9b').style.visibility="hidden";
										document.getElementById("v7-2").innerHTML = "00.00";
										myInt=setInterval(function(){animatearrow();},500);
										animateArrowATPosition(220,360,360);
										document.getElementById("can7-5").onclick=function()
										{
											myStopFunction();
											document.getElementById("can7-5").style = "position:absolute; left:390px; top:240px;width:140px;visibility:hidden";
											document.getElementById("can7-6").style = "position:absolute; left:405px; top:262.5px;visibility:hidden"
											// document.getElementById("can7-8").style.visibility="visible";
											document.getElementById("can7-41a").style.visibility="visible";
											document.getElementById("can7-41a").style.animation="movePan 1s forwards";
											setTimeout(function()
											{
												document.getElementById("can7-41a").style.visibility="hidden";
												document.getElementById("can7-41b").style.visibility="visible";
												document.getElementById("can7-41b").style.animation="panRotate 1s forwards";
												setTimeout(function()
												{
													document.getElementById("can7-41b").style.visibility="hidden";
													document.getElementById("can7-10").style.visibility="hidden";
													document.getElementById("can7-10a").style.visibility="visible";
													// document.getElementById("can7-5").style.visibility="visible";
													document.getElementById("can7-4").style.visibility="hidden";
													// document.getElementById("can7-5a").style.visibility="hidden";
													document.getElementById("v7-1").style.visibility="visible";
													document.getElementById("s1").innerHTML="<span style='border-bottom-style:double'>"+data[p]+".00";
													document.getElementById("v7-2").innerHTML=data[p]+".00";
													document.getElementById("nextButton").style.visibility="visible";
												},1100);
											},1000);											
										}
									}
								}
							}
						},250);
					}
				}
			}		
		}
		
	}
	else if(simsubscreennum == 8)
	{
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("can7-10a").style.visibility="hidden";
		document.getElementById("can7-5").style.visibility = "hidden";
		document.getElementById("v7-1").style.visibility = "hidden";
		document.getElementById("v7-2").style.visibility = "hidden";
		document.getElementById("s1").style.visibility = "hidden";
		document.getElementById("can7-9").style.visibility = "hidden";
		document.getElementById("can7-6").style.visibility = "hidden";
		observationAndResult(obsCount);
		
	}
}

function measureSample()
{
	
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(365,495,90);	
	document.getElementById("can3-10").onclick=function()
	{
		myStopFunction();
		document.getElementById("can3-10").onclick="";
		document.getElementById('can3-10').style.visibility="hidden";
		document.getElementById("can3Span").style.visibility="visible";
		document.getElementById("can3Span").innerHTML = "150.00	";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(475,495,90);	
		document.getElementById("can3-11").onclick=function()
		{
			myStopFunction();
			document.getElementById("can3-11").onclick="";
			document.getElementById('can3-11').style.visibility="hidden";
			document.getElementById("can3Span").innerHTML = "00.00";	
			myInt = setInterval(function(){ animatearrow(); }, 500);
			animateArrowATPosition(125,220,270);	
			document.getElementById("can3-8").onclick=function()
			{
				myStopFunction();
				document.getElementById("can3-8").onclick="";
				document.getElementById('can3-8').style.visibility="hidden";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				animateArrowATPosition(125,240,270);	
				document.getElementById("can3-6a").onclick=function()
				{
					myStopFunction();
					document.getElementById("can3-6a").onclick="";
					document.getElementById('can3-6a').style.visibility="hidden";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					animateArrowATPosition(125,270,270);	
					document.getElementById("can3-6").onclick=function()
					{
						myStopFunction();
						document.getElementById("can3-6").onclick="";
						document.getElementById('can3-7').style.visibility="hidden";
						document.getElementById('can3-7a').style.visibility="visible";
						document.getElementById('can3-6').style.visibility="hidden";
						document.getElementById('can3-6b').style.visibility="visible";
						document.getElementById("can3-6b").style.animation = "rotate125 1.5s forwards";
						setTimeout(function()
						{
							document.getElementById('can3-6b').style.visibility="hidden";
							document.getElementById('can3-13').style.visibility="visible";
							document.getElementById("can3Span").innerHTML = "2500.00";
							myInt = setInterval(function(){ animatearrow(); }, 500);
							animateArrowATPosition(125,310,270);	
							document.getElementById("can3-5").onclick=function()
							{
								myStopFunction();
								document.getElementById("can3-5").onclick="";
								document.getElementById('can3-7a').style.visibility="hidden";
								document.getElementById('can3-5').style.visibility="hidden";
								document.getElementById('can3-5a').style.visibility="visible";
								document.getElementById("can3-5a").style.animation = "rotate125 1.5s forwards";
								setTimeout(function()
								{
									document.getElementById('can3-4').style.visibility="hidden";
									document.getElementById('can3-5a').style.visibility="hidden";
									document.getElementById('v3-1').style.visibility="visible";
									document.getElementById('can3-13').style.top="260px";
									document.getElementById("can3Span").innerHTML = "5000.00";	
									document.getElementById('nextButton').style.visibility="visible";
								},1600);
							}												
						},1600);
					}
				}
			}
		}
	}
}
function pourAggregate()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(550,200,360);	
	document.getElementById("can4-6").onclick=function()
	{
		myStopFunction();
		document.getElementById("can4-6").onclick="";
		document.getElementById("can4-6").style.animation = "moveAgg2 0.2s forwards linear";
		setTimeout(function(){
			document.getElementById("can4-6").style.visibility = "hidden";
			document.getElementById("can4-6a").style.visibility = "visible";
			document.getElementById("can4-5").style.visibility  = "visible";
			setTimeout(function()
			{
				document.getElementById("can4-6a").style.visibility = "hidden";
				document.getElementById("can4-6b").style.visibility = "visible";
				document.getElementById("can4-5").style.visibility = "hidden";
				setTimeout(function()
				{
					document.getElementById("can4-6b").style.visibility = "hidden";
					document.getElementById("can4-6c").style.visibility = "visible";
					setTimeout(function()
					{
						document.getElementById("can4-6c").style.visibility = "hidden";
						document.getElementById("can4-7").style.visibility  = "visible";
						pourBalls();
					},500);
				},100);
			},500);
		},300);
	}
}
function pourBalls()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(550,200,360);	
	document.getElementById("can4-7").onclick=function()
	{
		myStopFunction();
		document.getElementById("can4-7").onclick="";
		document.getElementById("can4-7").style.animation = "moveAgg2 0.2s forwards linear";
		setTimeout(function(){
			document.getElementById("can4-7").style.visibility = "hidden";
			document.getElementById("can4-7a").style.visibility = "visible";
			document.getElementById("can4-8").style.visibility  = "visible";
			setTimeout(function()
			{
				document.getElementById("can4-7a").style.visibility = "hidden";
				document.getElementById("can4-6b").style.visibility = "visible";
				document.getElementById("can4-8").style.visibility = "hidden";
				setTimeout(function()
				{
					document.getElementById("can4-6b").style.visibility = "hidden";
					document.getElementById("can4-6c").style.visibility = "visible";
					setTimeout(function()
					{
						document.getElementById("can4-6c").style.visibility = "hidden";
						resetAnimation();
						document.getElementById("can4-2").style.visibility = "visible";
						closeLid();
					},500);
				},100);
			},500);
		},300);
	}
}

function resetAnimation()
{
	document.getElementById("can4-2").style.animation = "";
	document.getElementById("can4-2").style = "position:absolute;left:450px;top:185px;cursor:pointer;visibility:hidden";
	document.getElementById("can4-3l").style.animation = "";
	document.getElementById("can4-3l").style = "position:absolute;left:205.5px;top:160px;cursor:pointer;visibility:hidden";
	document.getElementById("can4-3r").style.animation = "";
	document.getElementById("can4-3r").style = "position:absolute;left:369px;top:160px;cursor:pointer;visibility:hidden";
	document.getElementById("can4-4l").style.animation = "";
	document.getElementById("can4-4l").style = "position:absolute;left:205.5px;top:310px;cursor:pointer;visibility:hidden";
	document.getElementById("can4-4r").style.animation = "";
	document.getElementById("can4-4r").style = "position:absolute;left:369px;top:310px;cursor:pointer;visibility:hidden";
 }

function closeLid()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(580,340,90);	
	document.getElementById("can4-2").onclick=function()
	{
		myStopFunction();
		document.getElementById("can4-2").onclick="";
		document.getElementById("can4-2").style.animation = "moveCoverBack1 1s forwards linear";
		setTimeout(function()
		{
			document.getElementById("can4-4r").style.visibility = "visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			animateArrowATPosition(410,380,90);	
			document.getElementById("can4-4r").onclick=function()
			{
				myStopFunction();
				document.getElementById("can4-4r").onclick="";
				document.getElementById("can4-4r").style.animation = "moveBoltDownBack 0.6s forwards linear";
				document.getElementById("can4-4r").style.top = "280px";
				setTimeout(function()
				{
					document.getElementById("can4-4l").style.visibility = "visible";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					animateArrowATPosition(245,380,90);	
					document.getElementById("can4-4l").onclick=function()
					{
						myStopFunction();
						document.getElementById("can4-4l").onclick="";
						document.getElementById("can4-4l").style.animation = "moveBoltDownBack 0.6s forwards linear";
						document.getElementById("can4-4l").style.top = "280px";
						setTimeout(function()
						{
							document.getElementById("can4-3l").style.visibility = "visible";
							myInt = setInterval(function(){ animatearrow(); }, 500);
							animateArrowATPosition(245,175,-90);	
							document.getElementById("can4-3l").onclick=function()
							{
								myStopFunction();
								document.getElementById("can4-3l").onclick="";
								document.getElementById("can4-3l").style.animation = "moveBoltUpBack 0.6s forwards linear";
								setTimeout(function()
								{
									document.getElementById("can4-3r").style.visibility = "visible";
									myInt = setInterval(function(){ animatearrow(); }, 500);
									animateArrowATPosition(410,175,-90);	
									document.getElementById("can4-3r").onclick=function()
									{
										myStopFunction();
										document.getElementById("can4-3r").onclick="";
										document.getElementById("can4-3r").style.animation = "moveBoltUpBack 0.6s forwards linear";
										setTimeout(function()
										{
											document.getElementById("nextButton").style.visibility = "visible";
										},600);
									}
								},600);
							}
						},600);
					}
				},600);
			}
		},1000);
	}
}

function rotateMachine()
{
	document.getElementById("rev").style.visibility = "visible";
	document.getElementById("can5-6").style.visibility = "visible";
	document.getElementById("v5-1").style.visibility = "visible";
	document.getElementById("can5-7").style.visibility = "visible";
	document.getElementById("can5-8").style.visibility = "visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(180,420,360);	
	document.getElementById("can5-5").onclick=function()
	{
		myStopFunction();
		document.getElementById("can5-5").onclick="";
		document.getElementById("can5-5").style.visibility = "hidden";
		document.getElementById("can5-3").style.visibility = "visible";
		setTimeout(function()
		{
			document.getElementById("can5-3").style.visibility = "hidden";
			document.getElementById("can5-4").style.visibility = "visible";
			document.getElementById("can5-1").src = "images/mac2.png";
			setTimeout(function()
			{
				document.getElementById("can5-4").style.visibility = "hidden";
				rotateClock();
				revInterval = setInterval(updateRevolutionDigits,700);
				moveUpToDown();
			},200);
		},500);
	}
}

function rotateClock()
{
	document.getElementById('can5-8').style.transformOrigin="50% 100%";
	clkInterval = setInterval(function()
	{
		rotateNeedle("can5-8",ndeg)
		setTimeout(function(){
			ndeg++;
			if(ndeg> 359)
				ndeg = 1;
		},60 );
	},60);
}
function rotateNeedle(idd,degree)
{
	document.getElementById(idd).style.WebkitTransform = "rotate("+degree+"deg)"; 
	 // Code for IE9
	document.getElementById(idd).style.msTransform = "rotate("+degree+"deg)";
	 // Standard syntax
	document.getElementById(idd).style.transform = "rotate("+degree+"deg)";
}


function updateRevolutionDigits()
{
	d0 = incrementDigitVal(d0);
	moveDigits("d0",d0);
	if(d0>boundryVal)
	{
		d0 = 0;
		d1 = incrementDigitVal(d1);
		moveDigits("d0",d0);
		moveDigits("d1",d1);

	}
	if(d1>boundryVal)
	{
		d1 = 0;
		d2 = incrementDigitVal(d2);
		moveDigits("d1",d1);
		moveDigits("d2",d2);
	}
	if(d2>boundryVal)
	{
		d2 = 0;
		d3 = incrementDigitVal(d3);
		moveDigits("d2",d2);
		moveDigits("d3",d3);
	}
	if(d3>boundryVal)
	{
		d3 = 0;
		d0 = incrementDigitVal(d0);
		moveDigits("d3",d3);
		moveDigits("d0",d0);
	}
	if(d1 == 4 && d0 == 5)
	{
		rotCount = 2;
		stopMachine();
		
	}
	// if(d2 == 2 && d1 == 8 && d0 == 0)
	// {
		// rotCount = 2;
		// d3 = 5;
	// }
	// if(d0 == 0  && d1 == 0 && d2 == 5)
	// {
		// clearInterval(revInterval);
		// clearInterval(clkInterval);
	
	// }
}
function moveDigits(ids,dig)
{
	document.getElementById(ids).innerHTML = dig;
	document.getElementById(ids).style.animation = "mvDigit 0.6s forwards linear";
	setTimeout(function()
	{
		document.getElementById(ids).style.animation = "";
	},600);
}
function incrementDigitVal(digit)
{
	if(rotCount == 0)
	{
		digit++;
		boundryVal = 9;
		return digit;
	}
	else if(rotCount == 1)
	{
		digit+= 1;
		boundryVal = 9;
		return digit;
	}
	else if(rotCount == 2)
	{
		digit+= 5;
		boundryVal = 5;
		return digit;
	}
}

function moveUpToDown()
{
	document.getElementById("can5-2a").style.animation="shake 0.4s 800";
	document.getElementById("can5-2").style.animation = "openMove 0.6s forwards linear";
	setTimeout(function()
	{
		document.getElementById("can5-2").style.visibility = "hidden";
		document.getElementById("can5-2").style.top = "250px";
		document.getElementById("can5-2").style.animation = "";
		setTimeout(function()
		{
			moveDownToUp();
		},300);
	},600);
}
function moveDownToUp()
{
	openInt = setInterval(function()
	{
		document.getElementById("can5-2").style.visibility = "visible";
		document.getElementById("can5-2").style.animation = "openMove2  0.6s forwards linear";
		setTimeout(function()
		{
			document.getElementById("can5-2").style.visibility = "hidden";
			setTimeout(function()
			{
				resetCover();
			},700);
		},800);
	},800);

}
function resetCover()
{
	document.getElementById("can5-2").style.transformOrigin = "";
	document.getElementById("can5-2").style.animation = "";
	document.getElementById("can5-2").style = "position:absolute; left:193px; top:300px;visibility:hidden"
}
function moveCover()
{

  	var bbl = document.getElementById("can5-2");
	bbl.style.top = "185px";
	bbl.style.animation = "openMove 1.9s forwards linear";
}


//to stop Machine
function stopMachine()
{
	d0 = 0;
	d1 = 0;
	d2 = 5;
	moveDigits("d0",d0);
	moveDigits("d1",d1);
	moveDigits("d2",d2);
	document.getElementById("can5-2a").style.animation  ="";
	document.getElementById("can5-2").style.animation  ="";
	document.getElementById("can5-2").style.transformOrigin  ="";
	document.getElementById("can5-2").style= "position:absolute; left:193px; top:185px;visibility:visible";
	clearInterval(revInterval);
	clearInterval(clkInterval);
	clearInterval(openInt);
	screensVal = 1;
	setDialog("The machine is stopped after the desired number of revolutions, cover is removed and material is transferred to a tray.",480,400,120,300);	
}

function getSampleOutOfMachine()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(480,250,360);	
	document.getElementById("can5-2a").onclick=function()
	{
		myStopFunction();
		document.getElementById("can5-2a").onclick="";
		document.getElementById("can5-9").style.animation  ="pourSample 1.5s forwards ease";
		document.getElementById("can5-10a").style.animation  ="move10a 1.5s forwards ease";
		document.getElementById("can5-10b").style.animation  ="move10b 1.2s forwards ease";
		document.getElementById("can5-10c").style.animation  ="move10c 1s forwards ease";
		document.getElementById("can5-10d").style.animation  ="move10d 0.5s forwards ease";
		document.getElementById("can5-10e").style.animation  ="move10e 0.6s forwards ease";
		document.getElementById("can5-10f").style.animation  ="move10f 0.4s forwards ease";
		document.getElementById("can5-10g").style.animation  ="move10g 0.8s forwards ease";
		document.getElementById("can5-10h").style.animation  ="move10h 0.9s forwards ease";
		document.getElementById("can5-10i").style.animation  ="move10i 1.5s forwards ease";
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility = "visible";
		},1600);
	}
}
function observationAndResult()
{
	var obsQuestion = Object.create(questions);																								
	if(obsCount == 0){
				generateQuestion(obsQuestion,"Type of aggregate  : ","","Coarse Aggregate","Fine Aggregate","Sand","Soil",1,setObservation,350,350,250,150);
	}
	if(obsCount == 1){
				generateQuestion(obsQuestion,"Grade of the sample : ","","Grade A","Grade B","Grade C","Grade D",2,setObservation,350,350,250,150);
	}
	if(obsCount == 2){
				generateQuestion(obsQuestion,"Original Weight of the Aggregate(g) =  ","","500","1000","2500","5000",4,setObservation,350,350,250,150);
	}
	if(obsCount == 3){
				generateQuestion(obsQuestion,"Weight of the aggregate retained on 1.70mm sieve(g) =  ","","500",data[p],"2500","5000",2,setObservation,350,350,250,150);
	}	
}
function setObservation()
{
	if(obsCount == 0)
	{
		document.getElementById("can8-1").innerHTML  = "Coarse Aggregate";
		document.getElementById("l2").style.visibility = "visible";
	}
	if(obsCount == 1)
	{
		document.getElementById("can8-2").innerHTML  = "Grade B";
		document.getElementById("l3").style.visibility = "visible";
	}
	if(obsCount == 2)
	{
		document.getElementById("can8-3").innerHTML  = "5000"+"g";
		document.getElementById("l4").style.visibility = "visible";
	}
	if(obsCount == 3)
	{
		document.getElementById("can8-4").innerHTML  = data[p]+".00g";
		document.getElementById("l5").style.visibility = "visible";
		document.getElementById("l6").style.visibility = "visible";
	}
	if(obsCount <=3)
	{
		nextObservation();
	}
}
function nextObservation()
{
	obsCount++;
	observationAndResult();
}
function calculate()
{
	userPerentageWear = document.getElementById("calci").value;
	var val1 = document.getElementById("calci");
	var ansId = document.createElement("span");
	ansId.setAttribute("id","spanId");
	percentageWear = ((5000 - data[p])/5000) * 100;
	if(userPerentageWear == percentageWear)
	{
		var idd = document.getElementById("calci");
		idd.parentNode.removeChild(calci);
		document.getElementById("wrong").innerHTML = "<span style='border-bottom-style:double'>"+percentageWear.toFixed(2)+"</span>%<span style='color:green'>&#10004;</span>";
		document.getElementById("chk").style.visibility = "hidden";
		document.getElementById("p8-1").style.visibility = "visible";
		document.getElementById("p8-1").style.animation  ="slidePara 2s forwards";
	}
	else
	{
		userCheckCount++;
		if(userCheckCount<3)
		{
			// document.getElementById("calci").style.borderColor = "red";
			 document.getElementById("wrong").innerHTML = "<span style='color:red'>&#10008;</span>";

		}
		if(userCheckCount == 2)
		{
			document.getElementById("chk").value = "RESULT";
		}
		if(userCheckCount == 3)
		{
			document.getElementById("chk").onclick = displayResult();
		}
	}
}
function displayResult()
{
	var idd = document.getElementById("calci");
	idd.parentNode.removeChild(calci);
	if(userCheckCount == 0)
	{
		document.getElementById("wrong").innerHTML = "<span style='border-bottom-style:double'>"+percentageWear.toFixed(2)+"</span>%<span style='color:green'>&#10004;</span>";
	}
	else
	{
		document.getElementById("wrong").innerHTML = "<span style='border-bottom-style:double'>"+percentageWear.toFixed(2)+"%</span>";
	}
	document.getElementById("chk").style.visibility = "hidden";
	document.getElementById("p8-1").style.visibility = "visible";
	document.getElementById("p8-1").style.animation  ="slidePara 2s forwards";
}
function highlightBackground(ele) {
	unhighlight();
	if(ele.id == "head1" || ele.id == "head2")
	   document.getElementById(ele.id).style.backgroundColor = "white";
	else
	{
		document.getElementById(ele.id).style.backgroundColor = "grey";
		document.getElementById(ele.id).style.color = "white";
	}
}
//Selection from table
function unhighlight()
{
	var table = document.getElementById("selectGrade");
	for (let row of table.rows) 
	{
	   row.style.backgroundColor = "white";
	   row.style.color = "black";
	}
}

//To set the questions division
function generateQuestion(qObject,qn,op1,op2,op3,op4,op5,ansKey,fn,dleft,dright,dwidth,dheight)
{
	document.getElementById('question-div').style.left=dleft+"px";											
	document.getElementById('question-div').style.top=dright+"px";												
	document.getElementById('question-div').style.width=dwidth+"px";
	document.getElementById('question-div').style.height=dheight+"px";
	qObject.setOptions(op1,op2,op3,op4,op5);
	qObject.setAns(ansKey);
	qObject.frameQuestions(qn);	
	qObject.setCallBack(fn);	
}
function finalStatement()
{
	document.getElementById("hintspan").style.visibility = "hidden";
	document.getElementById("p8-1").style.visibility = "visible";
	document.getElementById("p8-1").style.animation  ="slidePara 2s forwards";
}	
function setDialog(textContent,leftPos,topPos,heightVal,widthVal)
{
	document.getElementById("divp").innerHTML = textContent;
	document.getElementById('dialog-div').style.left=leftPos+"px";											
	document.getElementById('dialog-div').style.top=topPos+"px";												
	// document.getElementById('dialog-div').style.height=heightVal+"px";
	// document.getElementById('dialog-div').style.width=widthVal+"px";
	document.getElementById('dialog-div').style.visibility="visible";											
}

function hideDialog()
{
	document.getElementById("dialog-div").style.visibility = "hidden";
	if(screensVal == 1)
	{
		document.getElementById("can5-7").style.visibility = "hidden";
		document.getElementById("can5-8").style.visibility = "hidden";
		document.getElementById("v5-1").style.visibility = "hidden";
		document.getElementById("can5-6").style.visibility = "hidden";
		document.getElementById("rev").style.visibility = "hidden";
		document.getElementById("can5-5").style.visibility = "hidden";
		getSampleOutOfMachine();
	}
}	

