async function createAgent(){

const name = document.getElementById("name").value
const description = document.getElementById("desc").value

await fetch("/api/agents/create",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,description})
})

loadAgents()

}

async function loadAgents(){

const res = await fetch("/api/agents")
const data = await res.json()

const list = document.getElementById("agents")
list.innerHTML=""

data.agents.forEach(a=>{
const li=document.createElement("li")
li.innerText = a.name + " - " + a.description
list.appendChild(li)
})

}

loadAgents()
