let statusOfProfile = document.querySelector("h5");
let add = document.getElementById("add");
// let remove=document.getElementById("remove");
let check = 0;

add.addEventListener("click", (e) => {
  if (check == 0) {
    statusOfProfile.textContent = null;
    statusOfProfile.textContent = "Friends";
    add.textContent = null;
    add.textContent = "Remove Friend";
    statusOfProfile.style.color = "green";
    add.style.backgroundColor="#dadada";
    add.style.color="#111";
    check=1;
  }else{
    statusOfProfile.textContent=null;
    statusOfProfile.textContent="Stranger";
    add.textContent=null;
    add.textContent="Add Freind";
    add.style.backgroundColor=`cadetblue`;
    add.style.color=`#f1f1f1`;
    statusOfProfile.style.color="red";
    check=0;
  }
});

// remove.addEventListener('click',(e)=>{
//     statusOfProfile.textContent=null;
//     // statusOfProfile.textContent="Strangers";
//     statusOfProfile.innerHTML="Strangers";
//     add.textContent=null;
//     add.textContent="Add Friend";
//     statusOfProfile.style.color="red";
// })
