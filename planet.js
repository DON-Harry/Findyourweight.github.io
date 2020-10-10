// $("button").click(function(){
// 	console.log($(".earth").textcontent);
// });

var e=prompt("Enter your Weight");
var mass=e/9.807; 	
console.log(mass);

// console.log($(".p1").textContent=sun());
  var x = document.getElementById("earth").textContent= e;
  var y=  document.getElementById("p1").textContent =sun();
  var y=  document.getElementById("p2").textContent =moon();
  var y=  document.getElementById("p3").textContent =mercury();
  var y=  document.getElementById("p4").textContent =venus();
  var y=  document.getElementById("p5").textContent =mars();
  var y=  document.getElementById("p6").textContent =jupiter();
  var y=  document.getElementById("p7").textContent =saturn();
  var y=  document.getElementById("p8").textContent =uranus();
  var y=  document.getElementById("p9").textContent =neptune();

function sun(){
	var sg=274;
	var w=mass*sg;
	return w;
}

function moon(){
	var sg=1.62;
	var w=mass*sg;
	return w;
}

function mercury(){
	var sg=3.7;
	var w=mass*sg;
	return w;
}

function venus(){
	var sg=8.87;
	var w=mass*sg;
	return w;
}

function mars(){
	var sg=3.711;
	var w=mass*sg;
	return w;
}

function jupiter(){
	var sg=24.79;
	var w=mass*sg;
	return w;
}

function saturn(){
	var sg=10.44;
	var w=mass*sg;
	return w;
}

function uranus(){
	var sg=8.87;
	var w=mass*sg;
	return w;
}

function neptune(){
	var sg=11.15;
	var w=mass*sg;
	return w;
}


// const reloadtButton = document.querySelector("#btn");
// function reload() {
// reload = location. reload();
// }
// reloadButton.addEventListener("click", reload, false);
