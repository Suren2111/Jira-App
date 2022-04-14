let addbtn=document.querySelector(".add-btn");
let addmodel=true;
let modelcont=document.querySelector(".model-cont");
let maincont=document.querySelector(".main-cont");
let textareacont=document.querySelector(".textarea-cont")
addbtn.addEventListener("click",function(){
//Display
    if(addmodel){
       modelcont.style.display="flex";
    }
    else{
        modelcont.style.display="none";

    }
    addmodel=!addmodel;
})
textareacont.addEventListener("keydown",function(e){
   //console.log(e);
   let value=e.key;
  // console.log(value);
  if(value=='Enter'){
      //console.log('Enter is pressed');
      ticketdisplay(textareacont.value);
      textareacont.value="";
      modelcont.style.display="none";
      addmodel=!addmodel;
  }
})

function ticketdisplay(task){
    let ticketcont=document.createElement('div');
    ticketcont.setAttribute('class','ticket-cont');
    ticketcont.innerHTML=` <div class="ticket-color"></div>
    <div class="ticket-id"></div>
    <div class="ticket-area">${task}</div>`;
    maincont.appendChild(ticketcont);


}
