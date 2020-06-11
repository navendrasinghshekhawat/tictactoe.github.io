var a1=document.getElementById('one');
var a2=document.getElementById('two');
var a3=document.getElementById('three');

var cella1=a1.getElementsByTagName("td");
var cella2=a2.getElementsByTagName("td");
var cella3=a3.getElementsByTagName("td");



var reset=document.getElementById('reset');
//reset logic
reset.addEventListener('click',function(){
		cella1[0].innerText="";
		cella1[1].innerText="";
		cella1[2].innerText="";
		cella2[0].innerText="";
		cella2[1].innerText="";
		cella2[2].innerText="";
		cella3[0].innerText="";
		cella3[1].innerText="";
		cella3[2].innerText="";
});

//flush logic
function flush(flu){
	if(flu==="X" || flu==="O")
	{
		alert(flu + " Wins.");
	}
}

//winning logic
function win(){
	//horizontal check
	if(cella1[0].innerText=== cella1[1].innerText && cella1[2].innerText===cella1[0].innerText){
		flush(cella1[0].innerText);
	}
	if(cella2[0].innerText=== cella2[1].innerText && cella2[2].innerText===cella2[0].innerText)
	{
		flush(cella2[0].innerText);
	}
	if(cella3[0].innerText=== cella3[1].innerText && cella3[2].innerText===cella3[0].innerText)
	{
		flush(cella3[0].innerText);
	}

	//vertical check
	if(cella1[0].innerText=== cella2[0].innerText && cella1[0].innerText===cella3[0].innerText){
		flush(cella1[0].innerText);
	}
	if(cella1[1].innerText=== cella2[1].innerText && cella1[1].innerText===cella3[1].innerText){
		flush(cella1[1].innerText);
	}
	if(cella1[2].innerText=== cella2[2].innerText && cella1[2].innerText===cella3[2].innerText){
		flush(cella1[2].innerText);
	}

	//diagonal check
	if(cella1[0].innerText=== cella2[1].innerText && cella1[0].innerText===cella3[2].innerText){
		flush(cella1[0].innerText);
	}
	if(cella1[2].innerText=== cella2[1].innerText && cella1[2].innerText===cella3[0].innerText){
		flush(cella1[2].innerText);
	}
}



//////
	//on single click
var i=0;

cella1[0].addEventListener('click',function(){
	if(i%2==0){
		cella1[0].innerText="X";
		win();
i=i+1;}
else {
	cella1[0].innerText="O";
	win();
i=i+1;
}
});
cella1[1].addEventListener('click',function(){
	if(i%2==0){
		cella1[1].innerText="X";
		win();
i=i+1;}
else {
	cella1[1].innerText="O";
	win();
i=i+1;
}
});
cella1[2].addEventListener('click',function(){
	if(i%2==0){
		cella1[2].innerText="X";
		win();
i=i+1;}
else {
	cella1[2].innerText="O";
	win();
i=i+1;
}
});
cella2[0].addEventListener('click',function(){
	if(i%2==0){
cella2[0].innerText="X";
win();
i=i+1;}
else {
	cella2[0].innerText="O";
	win();
i=i+1;
}
});
cella2[1].addEventListener('click',function(){
	if(i%2==0){
		cella2[1].innerText="X";
		win();
i=i+1;}
else {
	cella2[1].innerText="O";
	win();
i=i+1;
}
});
cella2[2].addEventListener('click',function(){
	if(i%2==0){
		cella2[2].innerText="X";
		win();
i=i+1;}
else {
	cella2[2].innerText="O";
	win();
i=i+1;
}
});
cella3[0].addEventListener('click',function(){
	if(i%2==0){
		cella3[0].innerText="X";
		win();
i=i+1;}
else {
	cella3[0].innerText="O";
	win();
i=i+1;
}
});
cella3[1].addEventListener('click',function(){
	if(i%2==0){
		cella3[1].innerText="X";
		win();
i=i+1;}
else {
	cella3[1].innerText="O";
	win();
i=i+1;
}
});
cella3[2].addEventListener('click',function(){
	if(i%2==0){
		cella3[2].innerText="X";
		win();
i=i+1;}
else {
	cella3[2].innerText="O";
	win();
i=i+1;
}
});









