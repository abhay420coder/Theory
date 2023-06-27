
let allUser = JSON.parse( localStorage.allUser==undefined ? '[{"name":"CodeOfFun" , "address":"Bengaluru" , "phone":"7015393351" , "email":"manas@eduwol.com"}]' :localStorage.allUser)
let id = null; 

// set id to all user
if(allUser!=undefined){
    for(i=0 ; i<allUser.length ; i++){
        allUser[i].id = i
    }
}
displayUser(allUser);



function addNewEntry(){
    console.log("id    addNewEntry   :-  ",id)
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let user = {name:name , address:address , phone:`${phone}` , email:email}
    
    if(id==null){
        user.id = id==allUser.length
        allUser.push(user);
        console.log("hitted")
    }
    else{
        allUser[id]=user
    }
    
    localStorage.allUser= JSON.stringify(allUser);
    displayUser(JSON.parse( localStorage.allUser ))
    resetForm()

    
}


function displayUser(allUser){
    let detailHtmls=``;
    for(i=0 ; i<allUser.length ; i++){
        detailHtmls += `<tr id="entry${i}">
        <td>${allUser[i].name}</td>
        <td>${allUser[i].address}</td>
        <td>${allUser[i].phone}</td>
        <td>${allUser[i].email}</td>
        <td>
          <div style="display: flex;gap: 20px;" id="action0">
            <button onclick="editEntry(${i})">
              <i class="material-symbols-outlined">
                <span class="material-symbols-outlined"> edit_square </span>
              </i>
            </button>
            <button onclick="deleteEntry(${i})">
              <i class="material-symbols-outlined">delete</i>
            </button>
          </div>
        </td>
      </tr>`
    }
    document.getElementById("tableBody").innerHTML = detailHtmls
}

// edit entries
function editEntry(n){
    if(n==0) alert("you can't edit default person")
    else{
        id = n;
        let retrieveTr = document.getElementById(`entry${n}`);
        let name = retrieveTr.children[0].innerText
        let address = retrieveTr.children[1].innerText
        let phone = retrieveTr.children[2].innerText
        let email = retrieveTr.children[3].innerText
        document.getElementById("name").value = name
        document.getElementById("address").value = address
        document.getElementById("phone").value = phone
        document.getElementById("email").value = email
    }
        
}

// delete entries 
function deleteEntry(n){
    if(n==0){
        alert('This is a default person, so it will not deleted')
        return ;
    }else{
        allUser = JSON.parse( localStorage.allUser )
        allUser.splice(n,1);
        localStorage.allUser= JSON.stringify(allUser);
        displayUser(allUser)
    }
    
} 


function resetForm(){
    // now update the value of input
    document.getElementById("name").value = " "
    document.getElementById("address").value = " "
    document.getElementById("phone").value = " "
    document.getElementById("email").value = " "
}

function search(){
    console.log("searchValue        :-" , document.getElementById("search").value);
    searchValue = document.getElementById("search").value;
    let showUser = allUser.filter(data => {
        if(data["name"].includes(searchValue.toLowerCase()||searchValue.toUpperCase()) || data["phone"].includes(searchValue.toLowerCase()||searchValue.toUpperCase()) || data["address"].includes(searchValue.toLowerCase()||searchValue.toUpperCase()) || data["email"].includes(searchValue.toLowerCase()||searchValue.toUpperCase())){
            return data
        }
    })
    console.log("showUser   :-  " , showUser);

    if(searchValue.trim() == ""){
        console.log("search  trim hitted");
        displayUser(allUser)
    }
    else{
        console.log("search  no trim hitted");
         displayUser(showUser);

        }
}