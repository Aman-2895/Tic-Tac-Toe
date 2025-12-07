console.log("hello")

let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")

let turno = true

const wining = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {        
            box.innerHTML = "O"
            turno = false
        } else {
            box.innerHTML = "X"
            turno = true
        }

        box.disabled = true                         
        checkwin()
    })
})

function checkwin() {
    for (let pattern of wining) {
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            alert("Winner is " + pos1)
            disableAllBoxes()
        }
    }
}

function disableAllBoxes() {
    boxes.forEach(box => box.disabled = true)
}

// RESET BUTTON FUNCTION
resetbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerHTML = ""
        box.disabled = false
    })
    turno = true
})
