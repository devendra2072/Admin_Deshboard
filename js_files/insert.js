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


// ----------------insert js----------------------------
document.getElementById("save").addEventListener("click", add);      // 19/11/2024

async function add(e) {
  e.preventDefault();     // to prevent default behavior of form submission
  let myPrdtno = document.getElementById("prdt-num").value;
  let myName = document.getElementById("prdt-name").value;
  let myPrice = document.getElementById("price").value;
  let myQuant = document.getElementById("prdt-qntty").value;
  let url = "http://localhost:3000/employees";


// post request 

try {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      prdtnum: myPrdtno,
      name: myName,
      pricee: myPrice,
      quantitty: myQuant,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log(response);

  let value = await response.json();
  console.log(value);
  alert("Data saved successfully");
} catch (error) {
  console.log(error);
  alert("Error occurred while sending data");
}
}