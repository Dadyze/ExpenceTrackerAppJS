// DUGMAD
const incomeBtn = document.getElementById("incomebtn");
const outcomeBtn =document.getElementById("outcomebtn");
const addBtn = document.getElementById("setValue");
const closeBtn = document.getElementById("close");

//VRIJEDNOSTI
var incomeBal = document.getElementById("incomeBal");
var outcomeBal = document.getElementById("outcomeBal");
var balance = document.getElementById("balance");

//input
const name = document.getElementById("name")
const value = document.getElementById("value")
//lista
const INList = document.getElementById("incomeList");
const OUTList = document.getElementById("outcomeList");
incomeBtn.addEventListener("click",(e)=>{
    console.log("klikno 1");
    INList.classList.remove("hide");
    INList.classList.add("active");
    OUTList.classList.add("hide");
    OUTList.classList.remove("active");
})
outcomeBtn.addEventListener("click",(e)=>{
    console.log("klikno 2");
    OUTList.classList.remove("hide");
    OUTList.classList.add("active");
    INList.classList.add("hide");
    INList.classList.add("active");
})

addBtn.addEventListener("click",()=>{
    if(INList.classList.contains("hide")){
        OUTList.innerHTML= OUTList.innerHTML+`<li> ${value.value}KM  ${name.value} </li>`;
        outcomeBal.innerText = parseFloat(outcomeBal.innerText)+parseFloat(value.value) +" KM";
        balance.innerText =parseFloat(incomeBal.innerText) -parseFloat(outcomeBal.innerText)+" KM";

    }
    else{
        INList.innerHTML= INList.innerHTML+`<li> ${value.value}KM ${name.value} </li>`;
        incomeBal.innerText = parseFloat(incomeBal.innerText)+parseFloat(value.value)+" KM";
        balance.innerText =parseFloat(incomeBal.innerText) -parseFloat(outcomeBal.innerText) +" KM";
    }
})

closeBtn.addEventListener("click",()=>{
    OUTList.innerHTML="";
    INList.innerHTML="";
    incomeBal.innerText=0+" KM";
    outcomeBal.innerText=0+" KM";
    balance.innerText=0+" KM";
})