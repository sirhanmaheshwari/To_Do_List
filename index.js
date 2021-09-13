
    function getanupdate(){
        console.log("updating list...");

tit = document.getElementById('title').value;
desc =  document.getElementById('description').value;
        if(localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
        console.log("updating list...");
    }
    else{
        itemJsonArrayStr=localStorage.getItem('itemsJson');
        itemJsonArray=JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    update();
}

    
   
   
function update(){
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
      
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
        console.log("updating list...");
    }
   
let tablebody=document.getElementById("tablebody");
let str = "";
itemJsonArray.forEach((element, index) => {
    str+=  `
    <tr>
          <th scope="row">${index+1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><input type="checkbox" " ></td>
          <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
        </tr>`;
      

});
    tablebody.innerHTML = str; }
    add= document.getElementById("add");
add.addEventListener("click", getanupdate);
    update();
function deleted(itemIndex){
    console.log("delete", itemIndex);
    itemJsonArrayStr=localStorage.getItem('itemsJson');
//delete item index from array

    itemJsonArray=JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    update();
}

function clearstorage(){
    if(confirm("Do you want to clear the list?")){
    console.log("clearing the storage");
   localStorage.clear();

   update();
    }
}

