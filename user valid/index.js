let userName = document.getElementById("username").value



let newDiv = document.createElement("div")
document.body.prepend(newDiv)
newDiv.textContent = "bear"
newDiv.style.backgroundColor = "red"

let button = document.createElement("button")
document.body.append(button)
button.textContent = "swap"
button.setAttribute("id","swapButton")


// let btn = document.getElementById("submit").addEventListener("submit",function(event){
//     event.preventDefault()
//     console.log(userName)
//     console.log(event.type)
// })


button.addEventListener("click",function(){
    newDiv.style.backgroundColor = "yellow"
    newDiv.textContent = "battle star galactica"
})


button.addEventListener("mouseover",function(){
    newDiv.style.backgroundColor = "blue"
    newDiv.textContent = "beats"
})

button.addEventListener("mouseout",function(){
    newDiv.style.backgroundColor = "red"
    newDiv.textContent = "bear"
})