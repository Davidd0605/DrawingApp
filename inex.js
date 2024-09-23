let size = 3;
let colorPicker = document.getElementById("colorPicker")
let sizeEdit = document.getElementById("gridSize")
let resetBtn = document.getElementById("reset")
let container = document.getElementById("container")
let color = "white"

let bucketButton = document.getElementById("bucket");
bucketButton.style.setProperty("background-color", "red")
let bucketOn = false;

bucketButton.onclick = () => {bucketOn = !bucketOn
    if(!bucketOn)
        bucketButton.style.setProperty("background-color", "red")
    else
        bucketButton.style.setProperty("background-color", "green")
};
function colorNeighbour( cell, i , j , array, color, initialColor ) {
    // neighbours : i - 1 j, i + 1 j, i j-1 , i j+1;
    // stop calling other neighbours when : all neghbour colors are different or
    // no other neighbours exist lol FIX THIS SHIT MAN
    cell.style.setProperty("background-color", color );
    if(i > 0 /*&& array[i-1][j].getPropertyValue("background-color") == initialColor */) {
        colorNeighbour(array[i - 1][j], i - 1, j, array, color, initialColor);
    }
    if(i < size - 1 /* && array[i+1][j].getPropertyValue("background-color") == initialColor */) {
        colorNeighbour(array[i + 1][j], i + 1, j, array, color, initialColor);
    }
    if(j > 0 /*&& array[i][j-1].getPropertyValue("background-color") == initialColor*/) {
        colorNeighbour(array[i - 1][j], i , j - 1, array, color, initialColor);
    }
    if( j < size - 1 /* && array[i][j+1].getPropertyValue("background-color") == initialColor */) {
        colorNeighbour(array[i - 1][j], i , j + 1, array, color, initialColor);
    }
    return;
}
function populate()
{
    // create an array and assign every div to one lol or smth we will never know
    const my2DArray = [];
    const rows = size;
    const columns = size;
    for (let i = 0; i < rows; i++) {
        my2DArray[i] = [];
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("div")
            cell.classList.add("cell")
            container.appendChild(cell)
            my2DArray[i][j] = cell;
        }
    }
     
    for(let i = 0 ; i < rows; i ++) {
        for(let j = 0 ; j < columns; j ++) {
            my2DArray[i][j].addEventListener("click", function(){
                my2DArray[i][j].style.setProperty("background-color", color)
                if(bucketOn) {
                    colorNeighbour(my2DArray[i][j], i , j , my2DArray, color, my2DArray[i][j].style.getPropertyValue("background-color"));
                }
            })


            my2DArray[i][j].addEventListener("mouseover", function(){ if(draw)
                my2DArray[i][j].style.setProperty("background-color", color)});
        }
    }
    console.log(my2DArray)


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