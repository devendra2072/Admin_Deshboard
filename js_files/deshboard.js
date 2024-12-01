const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_bar");
const closeBtn = document.querySelector(".close");

const themeToggler = document.querySelector(".theme_toggler");
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables")
    themeToggler.querySelector("i:nth-child(1)").classList.toggle("active")
    themeToggler.querySelector("i:nth-child(2)").classList.toggle("active")
});




// var d= new Date()
// var yr=d.getFullYear();
// var month=d.getMonth()+1

// if(month<10){
// month='0'+month
// }
// var date=d.getDate();
// if(date<10){
// date='0'+date
// }
// var c_date=yr+"-"+month+"-"+date;

// document.getElementById('dl').value=c_date;

var d = new Date();
var yr = d.getFullYear();
var month = d.getMonth() + 1;

if (month < 10) {
    month = '0' + month;
}

var date = d.getDate();
if (date < 10) {
    date = '0' + date;
}

var c_date = date + "-" + month + "-" + yr;

document.getElementById('dl').value = c_date;