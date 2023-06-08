// chrome://extensions/
let myLeads=[];
const InputEl=document.getElementById("input-el")
const InputBtn=document.getElementById("input-btn")
const unorderedList=document.getElementById("unordered")

InputBtn.addEventListener("click", () => {   
    myLeads.push(InputEl.value)
    InputEl.value=""
    displayLeads()
    })

function displayLeads(){
    let listItems=""
    for(let i=0; i< myLeads.length; i++){
        listItems+=
        `<li>
            <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}
            </a>
        </li>`
     }
    unorderedList.innerHTML=listItems
}