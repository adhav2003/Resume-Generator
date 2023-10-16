function addNewWEField()
{
     let newNode = document.createElement("textarea");
     newNode.classList.add("form-control");
     newNode.classList.add("wkField");
     newNode.classList.add('mt-2');
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder","Enter your other work experiences")
     let weOb = document.getElementById("we");
     let wkAddButtonOb = document.getElementById("wkAddButton");
     weOb.insertBefore(newNode,wkAddButtonOb);
}
function addNewAcadField()
{
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("acadField");
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder","Enter your other academic experiences")
  let acadOb = document.getElementById("aq");
  let acadAddButtonOb = document.getElementById("acadAddButton");
  acadOb.insertBefore(newNode,acadAddButtonOb);
}
function generateCV()
{
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  document.getElementById("nameT2").innerHTML= nameField;
  document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
  document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
  document.getElementById("linkedT").innerHTML = document.getElementById("linkedinField").value;
  document.getElementById("gitT").innerHTML = document.getElementById("gitField").value;
  document.getElementById("descT").innerHTML = document.getElementById("descField").value;
  let we = document.getElementsByClassName("wkField");
  let str = "";
  for(let e of we)
  {
    str += `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  let aqs = document.getElementsByClassName("acadField");
  let str1 ="";
  for(let e of aqs)
  {
    str1 += `<li> ${e.value} </li>`
  }
  document.getElementById("aqT").innerHTML = str1;

  let file = document.getElementById("imgField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  reader.onloadend = function(){
    document.getElementById("imgTemplate").src = reader.result;
  };

document.getElementById('imgTemplate').src = reader.result;
  document.getElementById("cv-form").style.display ='none';
  document.getElementById("cv-template").style.display="block";

}

function printCV()
{
  window.print();
}
