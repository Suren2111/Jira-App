let cellscontdiv=document.querySelector(".cells-cont");
function initcells(){
  let cellscont="";

//Top left cell
cellscont+="<div class='top-left-cell'></div>"
//Top row
cellscont+="<div class='top-row'>"
for(let i=0;i<26;i++){
  cellscont+=`<div class='top-row-cell'>${String.fromCharCode(65+i)}</div>`
}
cellscont+="</div>"

cellscont+="<div class='left-col'>"
for(let i=0;i<100;i++){
  cellscont+=`<div class='left-col-cell'>${i+1}</div>`
}
cellscont+="</div>"

//cells content
cellscont+="<div class='cells'>"
  for(let i=0;i<100;i++){
      cellscont+='<div class="row">'
      for(let j=0;j<26 ;j++){
          cellscont+='<div class="cell" contentEditable="true">Cells</div>'
      }
      cellscont+='</div>'
  }
  cellscont+='</div>'
  cellscontdiv.innerHTML=cellscont;
}
initcells();
