// chrome://extensions/
let myLeads=[];
const InputEl=document.getElementById("input-el")
const InputBtn=document.getElementById("input-btn")
const unorderedList=document.getElementById("unordered")
const leadsFromStorage=JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn=document.getElementById("delete-all")
const tabBtn=document.getElementById("save-tab")
 
InputBtn.addEventListener("click", () => {   
    myLeads.push(InputEl.value)
    InputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    display(myLeads)
    })

tabBtn.addEventListener("click", ()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) ) 
        display(myLeads)
    })
})

if (leadsFromStorage){
   myLeads=leadsFromStorage
   display(myLeads)
   
}
function display(leads){
    let listItems=""
    for(let i=0; i< leads.length; i++){
        listItems+=
        `<li>
            <a target='_blank' href='${leads[i]}'> ${leads[i]}
            </a>
        </li>`
     }
    unorderedList.innerHTML=listItems
}
deleteBtn.addEventListener("click", ()=>{
  localStorage.clear()
  myLeads=[]  
  display(myLeads)
})