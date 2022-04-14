let addbtn=document.querySelector(".add-btn");
let addmodel=true;
let modelcont=document.querySelector(".model-cont");
let maincont=document.querySelector(".main-cont");
let textareacont=document.querySelector(".textarea-cont")
let ticketcolormodel='black';
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

let allprioritycolor=document.querySelectorAll('.priority');
for(let i=0;i<allprioritycolor.length;i++){
    let oneprioritycolor=allprioritycolor[i];
    oneprioritycolor.addEventListener("click",function(){
        for(let j=0;j<allprioritycolor.length;j++){
            allprioritycolor[j].classList.remove('active');
        }
        oneprioritycolor.classList.add('active');
        ticketcolormodel=oneprioritycolor.classList[2];
    })
}
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
    ticketcont.innerHTML=` <div class="ticket-color ${ticketcolormodel}"></div>
    <div class="ticket-id"></div>
    <div class="ticket-area">${task}</div>`;
    maincont.appendChild(ticketcont);
}

