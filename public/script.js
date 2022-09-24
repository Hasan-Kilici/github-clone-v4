function editProfile(){
 document.getElementById("profile").style.display = "none";
 document.getElementById("edit-profile").style.display = "block";
}

function editThisCode(){
 document.getElementById("btn").style.display = "none";
 document.getElementById("secret").style.display = "block";
}
//Events
//Syntax : <i click="alert('u click me!');"></i>
document.addEventListener("click", (e)=>{
 let element = e.srcElement;
 let click = element.getAttribute("click");
 let kwclick = element.getAttribute("kw:click");
 eval(click);
 eval(kwclick);
});

document.addEventListener("mouseover", (e)=>{
 let element = e.srcElement;
 let hover = element.getAttribute("hover");
 let kwhover = element.getAttribute("kw:hover");
 eval(hover);
 eval(kwhover);
});

document.addEventListener("mouseout",(e)=>{
  let element = e.srcElement;
  let offhover = element.getAttribute("off:hover");
  let kwoffhover = element.getAttribute("kw:off:hover");
  eval(offhover);
  eval(kwoffhover);
})

