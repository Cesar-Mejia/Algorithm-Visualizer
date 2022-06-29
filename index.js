const generateArray = (size) => {
    let array = []

    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100))
    }
    return array
}

const time = (ms) => {
return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
})
}

const bubbleSort = async () => {
sortButton.disabled = true
const children = box.children
let noSwaps
console.log("inside the bubblesort:", generateCounter)
    for (let i = children.length; i > 0; i--) {
        noSwaps = true

        for (let j = 0; j < i - 1; j++) {
            if (generateCounter > 1) {
                reset()
                return
            }

            // children[j].style.backgroundColor = 'white'
            children[j+1].style.backgroundColor = 'ivory'

            await time(0000)
            if (parseInt(children[j].style.height, 10) > parseInt(children[j+1].style.height, 10)) {
                box.insertBefore(children[j+1],children[j])
                noSwaps = false
            }

            children[j].style.backgroundColor = 'lightpink'
            if (j === i) {
                children[j].style.backgroundColor = 'ivory'
            }
        }
        if (noSwaps) {
            generateCounter = 1
            console.log("no swaps was activated", generateCounter)
            for (let j = 0; j < children.length; j++) {
                if (children[j].style.backgroundColor == "lightpink") {
                    children[j].style.backgroundColor = 'ivory'
                }
            }
            break
        }
            
    }
    sortButton.disabled = false
}



// Change the color of the compared values -- Wait
// Compare the 2 values
// Swap if j > j+1
// j++
// Change color back to original

const generateBars = () => {

        generateCounter++

    if (generateCounter > 1 && !sortButton.disabled) {
    generateCounter = 1
}  

console.log("inside generate bars", generateCounter)

sortButton.addEventListener("click", bubbleSort)

const removeChildren = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild)
    }
}

removeChildren(box)

let array = generateArray(68)

array.forEach((element) => {
    let bar = document.createElement("div")
    box.appendChild(bar)
    bar.setAttribute('id', 'bar')
    bar.style.height = `${element * 4}px`
})
}

let reset = () => {
console.log("The loop was broken")
generateCounter = 1
console.log('reset generateCounter:', generateCounter)
sortButton.disabled = false
}

const generateButton = document.getElementById("generateButton")
const sortButton = document.getElementById("sortButton")

let box = document.getElementById('box')
let generateCounter = 0

generateButton.addEventListener("click", generateBars)


