window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.backtop');
	var hed = document.querySelector('.header');
    scroll.classList.toggle("active2" , window.scrollY>500),
	hed.classList.toggle("header1" , window.scrollY>300);
})	

function scrolltotp(){
	window.scrollTo({top:0,
	behavior:'smooth'
	})
}

var e =document.querySelector(".mega_menu");
var nxbtn =document.querySelector(".mg");
// // nxbtn.onMouseenter = function(){
// // 	x.classList.toggle("active");
// // };

// hover(document.querySelector('.mg'), e => {
//     // On hover
//     e.target.classList.add("active")
//   }, e => {
//     // On exit hover
//     e.target.classList.remove("active")
// })

function LogoHoverAdd() {
    e.classList.add("active");
}
function LogoHoverRemove() {
    e.classList.remove("active");
}

// var logo = document.querySelector("h1");
nxbtn.addEventListener("mouseover", LogoHoverAdd);
nxbtn.addEventListener("mouseout", LogoHoverRemove);


// var hero =document.getElementById("hero");
// var stt = window.getComputedStyle(hero,':before');
// counter = setInterval (()=> {
// 	    stt.style.backgroundImage = 'url("img/bg.jpg")';
// },5000);
