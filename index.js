// Write your code here!
const main = document.querySelector("main");
main.remove();

const body=document.getElementsByTagName('body')[0]
const newHeader=document.createElement('h1')
body.appendChild(newHeader)

newHeader.id='victory'


newHeader.innerHTML="YOUR-NAME is the champion "