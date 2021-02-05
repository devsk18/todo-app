window.onload=function(){
    getdata();
}

function addtask() {
    document.getElementById('error').setAttribute('hidden',true);
    var text = document.getElementById("inputbox").value;
    if(text==''){
        document.getElementById('error').removeAttribute('hidden');        
    }else{
        var close = "this.parentElement.style.display='none'";
        var check = "this.parentElement.style.color='lime'";
        var uncheck = "this.parentElement.style.color='white'";
        var tag = '<h3 class="list">'+text+'<span class="closebtn" onclick="'+close+'">&#128465;</span><span class="closebtn" onclick="'+uncheck+'">&#128394;</span><span class="checkbtn" onclick="'+check+'">&check;</span></h3>';
        document.getElementById('display').innerHTML += tag;
        document.getElementById("inputbox").value = '';
    } 
}

function save() {
    // Save the list to localStorage
    localStorage.setItem('todolistItems', document.getElementById('display').innerHTML);
    swal({
        title: "Good job!",
        text: "Your ToDo list is saved",
        icon: "success",
        button: "Cool",
      });
}
function unsave() {
    localStorage.removeItem('todolistItems');
    document.getElementById('display').innerHTML = '';
    swal({
        title: "Oops..!",
        text: "Your ToDo list is deleted",
        icon: "warning",
        button: "Okay",
      });
}

function getdata(){
    // Check for saved wishlist items
    var saved = localStorage.getItem('todolistItems');

    // If there are any saved items, update our list
    if (saved) {
        document.getElementById('display').innerHTML = saved;
    }
}