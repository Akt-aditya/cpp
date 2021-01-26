function render(a){
 let r=document.getElementById("result"); 
 if(a==89){
   r.innerText=`${r.innerText}.`;
 }
 else{
 r.innerText=`${r.innerText+a}`;
 }
}

const history = (his,hissum) => {
  let h = document.getElementById("history");
  h.style.display = "flex";
  h.innerHTML=`${h.innerHTML}<br/>${his}<br/>${hissum}<br/>`;
  h.style.justifyContent = "center";
  h.style.textAlign = "center";
}

const d = (a) => {
  let r = document.getElementById("result");
  r.innerText = `${r.innerText}+`;
}
const sd = (a) => {
  let r = document.getElementById("result");
  r.innerText = `${r.innerText}-`;
}
const md = (a) => {
  let r = document.getElementById("result");
  r.innerText = `${r.innerText}*`;
}
const dd = (a) => {
  let r = document.getElementById("result");
  r.innerText = `${r.innerText+"/"}`;
}
const equal = () => {
  let r = document.getElementById("result");
  let beforetext=r.innerText;
  let sum= eval(r.innerText);
  r.innerText=sum;
  history(beforetext,sum)
}

const cl = () => {
  let r = document.getElementById("result");
  r.innerText = "";
}



