let mainText=document.querySelector("h1")
mainText.innerText+=" from anupam jose"

let boxDiv=document.querySelectorAll(".box")
a=0
for (i of boxDiv){
    a+=1
    i.innerText=a
}