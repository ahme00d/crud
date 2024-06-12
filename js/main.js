var NameInput = document.getElementById("name");
var urlInput = document.getElementById("url");
var addbtn = document.getElementById("addbtn");
var tableBody= document.getElementById("tableBody");
var bookmarks;
var mainindex=0;
if(localStorage.getItem("bookmarks"==null)){
    bookmarks=[];
}else{
    bookmarks=JSON.parse(localStorage.getItem("bookmarks"));
     displayBook(bookmarks);
}




addbtn.onclick =function(){
    if(addbtn.innerHTML=="update"){
        addbtn.innerHTML=="submit"
        var bookmark={
            name:NameInput.value,
            url:urlInput.value,
        }
    bookmarks.splice(mainindex,1,bookmark)
    }else{
        var bookmark={
            name:NameInput.value,
            url:urlInput.value,
        }
        bookmarks.push(bookmark);
    }
  console.log(bookmarks);
  localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
  displayBook(bookmarks);
  clearData();
  
}

function displayBook(anyarray) {
    var marks='';
    for (var i=0 ; i<anyarray.length ; i++){
        marks+=`
        <tr>
        <td>${anyarray[i].name} </td>
         <td><button class="btn btn-primary">Visit</button></td>
          <td><button onclick="updateBook(${i})" class="btn btn-info">Update</button></td>
           <td><button onclick="deleteBook(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
    tableBody.innerHTML= marks;
}
 function deleteBook(index){
     bookmarks.splice(index,1);
     localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
     displayBook(bookmarks);
 }
 function clearData(){
     NameInput.value=""
      urlInput.value=""
 }
function updateBook(index){
    NameInput.value=bookmarks[index].name
    urlInput.value=bookmarks[index].url
    addbtn.innerHTML="update"
    mainindex=index
 }
function search(term){
    var YouBook=[];
    for(var i=0; i<bookmarks.length ; i++){
        if(bookmarks[i].name.toLowerCase().includes(term))
            YouBook.push(bookmarks[i])
    }
    displayBook(YouBook)
}