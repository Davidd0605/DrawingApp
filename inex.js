let size = 3;
let colorPicker = document.getElementById("colorPicker")
let sizeEdit = document.getElementById("gridSize")
let resetBtn = document.getElementById("reset")
let container = document.getElementById("container")
let color = "white"
let Me = Ryan_Gosling;
function populate()
{
    let i = 0;
    let intervalId = window.setInterval(()=>{
        let cell = document.createElement("div")
        cell.classList.add("cell")
        container.appendChild(cell)
        
        cell.addEventListener("click", function(){cell.style.setProperty("background-color", color)})
        cell.addEventListener("mouseover", () => {
            if(draw)
                cell.style.setProperty("background-color", color)})
        i++;
        console.log(i)
        if(i == size*size)
        {
            window.clearInterval(intervalId)
        }

    }, 10)

}
colorPicker.addEventListener("input", ()=>{color = colorPicker.value})
sizeEdit.addEventListener("input", function(){

    size = sizeEdit.value;
    if(size <= 0)
        size = 1;
    container.style.setProperty("--size",size)

    container.innerHTML = "";
    populate()
})
let draw = false;
window.addEventListener("mousedown", ()=> { draw = true})
window.addEventListener("mouseup", ()=>{draw = false})
resetBtn.onclick = ()=>{ container.innerHTML = ""; populate()}
populate()