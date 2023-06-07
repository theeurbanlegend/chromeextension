let myLeads=[];
const InputEl=document.getElementById("input-el")
const InputBtn=document.getElementById("input-btn")
InputBtn.addEventListener("click", () => {
    
    myLeads.push(document.getElementById("input-el").value)
    console.log(myLeads)    
    })
    