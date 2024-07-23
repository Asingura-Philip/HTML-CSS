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

let box = document.createElement("div")
document.body.appendChild(box)
box.innerText = "the box"
box.style.borderRadius = "20px"
box.style.backgroundColor = "yellow"
box.style.borderStyle = "block"
box.style.margin = "black"
box.style.width = "400px"
box.style.height = "400px"

let car = document.createElement("div")
box.appendChild(car)
car.style.backgroundColor = "red"
car.innerText = "the car"
car.style.height = "100px"

let truck = document.createElement("div")
box.appendChild(truck)
truck.innerText = "the truck"
truck.style.backgroundColor = "blue"
truck.style.height = "100px"

let driver = document.createElement("button")
car.appendChild(driver)
driver.innerText = "car driver"

driver.addEventListener("click",function(){
    let pat = document.createElement("div")
    box.appendChild(pat)
    pat.innerText = "new div"
    pat.setAttribute("class","tempo")
    pat.style.backgroundColor = "pink"
    pat.style.height = "20px"
    pat.style.width = "100px"
})

let truckDriver = document.createElement("button")
truck.appendChild(truckDriver)
truckDriver.innerText = "truck driver"

truckDriver.addEventListener("click",function(){
    let minus = document.querySelector(".tempo")
    minus.remove()
})