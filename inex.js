let size = 3;
let resetBtn = document.getElementById("reset")
let container = document.getElementById("container")
function populate()
{
    let i = 0;
    let intervalId = window.setInterval(()=>{
        let cell = document.createElement("div")
        cell.classList.add("cell")
        container.appendChild(cell)
        cell.addEventListener("click", function(){cell.style.setProperty("background-color", "white")})
        cell.addEventListener("mouseover", () => {if(draw)
            cell.style.setProperty("background-color", "white")
        })
        i++;
        if(i == size*size)
            window.clearInterval(intervalId)
    }, 250)

}
let draw = false;
window.addEventListener("mousedown", ()=> { draw = true})
window.addEventListener("mouseup", ()=>{draw = false})
resetBtn.onclick = ()=>{ container.innerHTML = ""; populate()}
populate()