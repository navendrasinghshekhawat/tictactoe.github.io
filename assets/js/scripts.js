var a11=document.getElementById('one');
var a12=document.getElementById('two');
var a13=document.getElementById('three');

var a21=document.getElementById('four');
var a22=document.getElementById('five');
var a23=document.getElementById('six');

var a31=document.getElementById('seven');
var a32=document.getElementById('eight');
var a33=document.getElementById('nine');

var reset=document.getElementById('reset');
//reset logic
reset.addEventListener('click',function(){
location.reload();
});

//////
	//on single click
var i=0;

a11.addEventListener('click',function(){
	if(i%2==0){
a11.innerText="X";
console.log(a11);
i=i+1;}
else {
	a11.innerText="O";
i=i+1;
}
});
a12.addEventListener('click',function(){
	if(i%2==0){
a12.innerText="X";
i=i+1;}
else {
	a12.innerText="O";
i=i+1;
}
});
a13.addEventListener('click',function(){
	if(i%2==0){
a13.innerText="X";
i=i+1;}
else {
	a13.innerText="O";
i=i+1;
}
});
a21.addEventListener('click',function(){
	if(i%2==0){
a21.innerText="X";
i=i+1;}
else {
	a21.innerText="O";
i=i+1;
}
});
a22.addEventListener('click',function(){
	if(i%2==0){
a22.innerText="X";
i=i+1;}
else {
	a22.innerText="O";
i=i+1;
}
});
a23.addEventListener('click',function(){
	if(i%2==0){
a23.innerText="X";
i=i+1;}
else {
	a23.innerText="O";
i=i+1;
}
});
a31.addEventListener('click',function(){
	if(i%2==0){
a31.innerText="X";
i=i+1;}
else {
	a31.innerText="O";
i=i+1;
}
});
a32.addEventListener('click',function(){
	if(i%2==0){
a32.innerText="X";
i=i+1;}
else {
	a32.innerText="O";
i=i+1;
}
});
a33.addEventListener('click',function(){
	if(i%2==0){
a33.innerText="X";
i=i+1;}
else {
	a33.innerText="O";
i=i+1;
}
});









