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
        i++;
        if(i == size*size)
            window.clearInterval(intervalId)
    }, 250)

}

resetBtn.onclick = ()=>{ container.innerHTML = ""; populate()}
populate()