var navLeft=document.getElementById('nav-left');
var str="";
for(let i=1;i<=30;i++){
   str+=`<li class="menu"> Item ${i}</li>\n`;
}
navLeft.innerHTML=str;