
const divSize = document.querySelector('.sizeBtn')
const grid = document.querySelector('.grid')
const rainbow = document.querySelector('.rainbowBtn')
const black = document.querySelector('.blackBtn')
const erase = document.querySelector('.eraserBtn')
const clean = document.querySelector('.cleanBtn')
const click = document.querySelector('.clickBtn')

let size = 20

divSize.addEventListener('click', () => {
    cleanAll()
    size = prompt("Enter grid size (maximum 100)")
    while (size < 1 || size > 100) {
        size = prompt("Enter grid size (maximum 100)")
    }

    newGrid(size)
})

function newGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
       
        div.style.height = `${640 / size}px`
        div.style.width = `${640 / size}px`
        grid.appendChild(div)
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black'
        })

    }

}
newGrid(size)

function cleanAll() {
    let cell = document.querySelectorAll('.grid>div')
    cell.forEach((div) => {
        div.remove()

    })
}


rainbow.addEventListener('click', () => {
    let cell = document.querySelectorAll('.grid>div')
    cell.forEach((div) => {
        div.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16)
            div.style.backgroundColor = "#" + randomColor

        })

    })

})


black.addEventListener('click', () => {
    let cell = document.querySelectorAll('.grid>div')
    cell.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black'
        })

    })

})


erase.addEventListener('click', () => {
    let cell = document.querySelectorAll('.grid>div')
    cell.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = ``

        })

    })

})


clean.addEventListener('click', () => {
    let cell = document.querySelectorAll('.grid>div')
    cell.forEach((div) => { div.style.backgroundColor = 'white' })

})