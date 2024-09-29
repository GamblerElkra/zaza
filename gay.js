var jojo = [69,7,29,8];
console.log(jojo);
console.log(jojo[0]);
console.log(jojo[jojo.length-1]);
for(var i=0; i<=jojo.length-1;i++){
	console.log(jojo[i]);
}
var lol = [46,69,32,655,12];
console.log(lol);
console.log(lol[0]*lol[lol.length-1])
for(var i=0; i<=lol.length-1;i++){
	//console.log(lol[i]);
	if(lol[i]%2==0){
		console.log(lol[i]+' tegsh too.')
	}else{
		console.log(lol[i]+' sondgoi too.')
	}
}
var niilber=0, urjver=1;
for(i=0;i<lol.length-1;i++){
	niilber = niilber+lol[i];
	urjver = urjver*lol[i];
}
console.log('niilber:'+niilber)
console.log('urjver:'+urjver)
var body = document.getElementsByTagName('body')[0];
var colors = ['aqua','blue','red','black','green']
var i=-1;
function change(){
	i++
	if(i==colors.length-1){
		i=0
	}
		body.style.backgroundColor=colors[i];
}
function reverse(){
	i--;
	if(i<0){
		i=4
	}
	body.style.backgroundColor=colors[i];
}
var s;
var autoBtn = document.querySelector('.auto');
var stopBtn = document.querySelector('.stop');
function auto(){
		i++
	if(i==colors.length-1){
		i=0
	}
		body.style.backgroundColor=colors[i];
		s=setTimeout(auto,100);
		autoBtn.disabled = true
		stopBtn.disabled = false
}
function stop(){
	clearTimeout(s);
	autoBtn.disabled = false
	stopBtn.disabled = true
}