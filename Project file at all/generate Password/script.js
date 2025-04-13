//character
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="~!@#$%^&*()_+/-";
// selector
const passBox=document.querySelector("#pass-box");
 const totalChar=document.querySelector("#total-char");
const upperInput=document.querySelector("#upper-case");
const lowerInput=document.querySelector("#lower-case");
const numberInput=document.querySelector("#numbers");
const symbolInput=document.querySelector("#symbols");
const copen=document.querySelector("#copy");
const randomData=(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)];
};

const generatePassword=(password='')=>{
    if(upperInput.checked){
        password+=randomData(upperCase);
    }
    if(lowerInput.checked){
        password+=randomData(lowerCase);
    }
    if(numberInput.checked){
        password+=randomData(number);
    }
    if(symbolInput.checked){
        password+=randomData(symbol);
    }
    if(password.length<totalChar.value)
    {
        return generatePassword(password);
    }
    passBox.innerText=password;
}
function combinedString(str,num)
{
    if(str.length>num)
    {
       let subStr=str.substring(0,num);
       return subStr;
    }else{
        return str;
    }
}
document.querySelector("#btn").addEventListener("click",()=>{
    generatePassword();
})
copen.addEventListener("click",()=>{
    copy();
})
function copy()
{
    navigator.clipboard.writeText(passBox.textContent)
    .then(() => alert("Text copied to clipboard!"))
    .catch(err => console.error("Failed to copy: ", err));
}