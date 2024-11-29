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




// ---------------------------------update js section --------------------------------

function editRow(id) {
  document.getElementById(`pdno-${id}`).removeAttribute("readonly");
  document.getElementById(`nm-${id}`).removeAttribute("readonly");
  document.getElementById(`pdp-${id}`).removeAttribute("readonly");
  document.getElementById(`qunty-${id}`).removeAttribute("readonly");

  document.getElementById(`edit-${id}`).style.display = "none";
  document.getElementById(`save-${id}`).style.display = "inline";
}

  async function saveRow(id) {
    let url = `http://localhost:3000/employees/${id}`;

    let prdtno = document.getElementById(`pdno-${id}`).value;
    let name = document.getElementById(`nm-${id}`).value;
    let price = document.getElementById(`pdp-${id}`).value;
    let quantity = document.getElementById(`qunty-${id}`).value;

    let responseObj = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prdtnum: prdtno,
        name: name,
        pricee: price,
        quantitty: quantity,
      }),
    });

    let data = await responseObj.json();
    console.log(data);
    alert("data successfully updated");
  }

async function recDel(id) {
  let url = `http://localhost:3000/employees/${id}`;
  let responseobj = await fetch(url, {
    method: "DELETE",
  });
  console.log(responseobj);

  let data = await responseobj.json();
  console.log(data);
  alert("data successfully delated");
}

async function display() {
  let table = `
    <table>
    <tr>
    <th>Product Number</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Actions</th>
    </tr>`;

  let url = "http://localhost:3000/employees";
  let responseobj = await fetch(url);
  let mydata = await responseobj.json();

  mydata.map((key) => {
    table += `
       <tr>
       <td><input type="text" value="${key.prdtnum}" id="pdno-${key.id}"readonly</td>
       <td><input type="text" value="${key.name}" id="nm-${key.id}"readonly</td>
       <td><input type="text" value="${key.pricee}" id ="pdp-${key.id}"readonly</td>
       <td><input type="number" value="${key.quantitty}" id="qunty-${key.id}"readonly</td>

       <td>
          <a onclick="recDel('${key.id}')" class="button button-delete">Delete</a>
          <a onclick="editRow('${key.id}')" id="edit-${key.id}" class="button button-edit">Edit</a>
          <a onclick="saveRow('${key.id}')" id="save-${key.id}" class="button button-save">Save</a>
        </td>
       </tr>
       `;
  });
  document.getElementById("demo").innerHTML = table;
}
display();