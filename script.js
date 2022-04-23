let addbtn=document.querySelector(".add-btn");
let addmodel=true;
let modelcont=document.querySelector(".model-cont");
let maincont=document.querySelector(".main-cont");
let textareacont=document.querySelector(".textarea-cont")
let ticketcolormodel='black';
let deletebtn=false;
let colors=['lightpink','blue','green','black'];
var uid = new ShortUniqueId();
let ticketarr=[];
let allcolors=document.querySelectorAll(".tool");
for(let i=0;i<allcolors.length;i++){

    //Single click events to display the specific tickets of choosen colors
    allcolors[i].addEventListener("click",function(){
       let currentcolor=allcolors[i].classList[2];
      let filterarr=ticketarr.filter(function(ticketobj){
          return currentcolor==ticketobj.color;
      })
      let tickets=document.querySelectorAll(".ticket-cont");
      for(let j=0;j<tickets.length;j++){
          tickets[j].remove();
      }
      for(let j=0;j<filterarr.length;j++){
          ticketcolormodel=filterarr[j].color;
          let task=filterarr[j].task;
          let ticketid=filterarr[j].id;
          ticketdisplay(task,ticketid);
      }
      
    })
    //Double click events to display all the tickets before 
    allcolors[i].addEventListener("dblclick",function(){
        let tickets=document.querySelectorAll(".ticket-cont");
        for(let j=0;j<tickets.length;j++){
            tickets[j].remove();
        }
        for(let j=0;j<ticketarr.length;j++){
             ticketcolormodel=ticketarr[j].color;
             let task=ticketarr[j].task;
             let ticketid=ticketarr[j].id;
             ticketdisplay(task,ticketid);
        }

    })
}
//Added  container to enter the ticket content
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


//Added Priority colors and make active
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

//After Entering the content tickets have to create
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

//To create the tickets
function ticketdisplay(task,ticketid){
    let id;
    if(!ticketid){
        id=uid();
    }
    else{
        id=ticketid;
    }
    let ticketcont=document.createElement('div');
    ticketcont.setAttribute('class','ticket-cont');
    ticketcont.innerHTML=` <div class="ticket-color ${ticketcolormodel}"></div>
    <div class="ticket-id">#${id}</div>
    <div class="ticket-area">${task}</div>
    <dic class="ticket-lock"><i class="fa fa-lock"></i></div>`;
    maincont.appendChild(ticketcont);
    tickethandler(ticketcont);
    colorhandler(ticketcont);
    lockhandler(ticketcont);
    if(!ticketid){
        ticketarr.push({"task":task,"color":ticketcolormodel,"id":id});
    }
    
}

//To create lock and unlock
function lockhandler(ticket){
   let ticketlockelement=ticket.querySelector(".ticket-lock i");
   let tickettaskarea=ticket.querySelector(".ticket-area");
   ticketlockelement.addEventListener("click",function(){
       if(ticketlockelement.classList.contains('fa-lock')){
         ticketlockelement.classList.remove("fa-lock");
         ticketlockelement.classList.add("fa-unlock");
         tickettaskarea.setAttribute("contenteditable",'true');

       }
       else{
        ticketlockelement.classList.remove("fa-unlock");
        ticketlockelement.classList.add("fa-lock");
        tickettaskarea.setAttribute("contenteditable",'false');
       }
   })
}

//Click event to change the delete button to red
let deletebtncont=document.querySelector(".btncolor");
deletebtncont.addEventListener('click',function(){
    if(deletebtn){
        deletebtncont.style.color='black';
    }
    else{
    
        deletebtncont.style.color='red';
    }
    deletebtn=!deletebtn;
})

//To delete the tickets using delete button
function tickethandler(ticket){
    ticket.addEventListener('click',function(){
        if(deletebtn){
            ticket.remove();
        }
    })
}

//To change colors of the tickets
function colorhandler(ticket){
    let ticketcolor=ticket.querySelector('.ticket-color');
    ticketcolor.addEventListener('click',function(){
        let currenetcolor=ticketcolor.classList[1];
        let currenetcoloridx=colors.findIndex(function(color){
            return color===currenetcolor;
        })
        let newidx=(currenetcoloridx+1)%colors.length;
        let newcolor=colors[newidx];
        ticketcolor.classList.remove(currenetcolor);
        ticketcolor.classList.add(newcolor);
    })
}


