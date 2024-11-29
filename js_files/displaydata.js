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

// ----------------------------display data js--------------------------

// 18/11/2024
async function dataShow() {
  let myTable = `
 <table border="5" width="800px" align="center">
        <tr border-"5">
          <th>Product Number</th>
          <th>Product Name</th>
          <th>Price List</th>
          <th> Quantity</th>
        </tr>
       `;

       //url of the server to fetch data
  let url = "http://localhost:3000/employees";
  //get data from server


  
  let myobj = await fetch(url);
  console.log(myobj);

  // converting response object to json object (array of objects)
  let myData = await myobj.json();  
  console.log(myData);

  myData.map((key) => {
    myTable += `
       <tr>
        <td>${key.prdtnum}</td>
        <td>${key.name}</td>
        <td>${key.pricee}</td>
        <td>${key.quantitty}</td>
       </tr>
    `;
  });

  myTable += `</table>`;

  document.getElementById("demo1").innerHTML = myTable;
}
dataShow();


