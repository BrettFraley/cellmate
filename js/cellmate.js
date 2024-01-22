
const canvas = document.getElementById('cellmate-canvas')
const ctx = canvas.getContext('2d')

const settings = {
    cellWidth: 5,
    cellHeight: 5
}

const cellmate = {
    randomXCoord: max => Math.floor(Math.random() * canvas.width) - settings.cellWidth,
    randomYCoord: max => Math.floor(Math.random() * canvas.height) - settings.cellHeight,
}

const generator = () => {
    
    // Clear / Reset canvas
    // TODO: make "if reset true setting"
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    let chosenColors = getChosenColors()
    let colors = chosenColors.length > 0 ? chosenColors : ['_', 'red', 'green', 'blue']

    let numShapes = parseInt(document.getElementById('generator-num-of-shapes').value)

    // Width and height
    // TODO: allow width and height of each shape to be randomized as well
    let shapeWidth = parseInt(document.getElementById('generator-width-of-shapes').value)
    let shapeHeight = parseInt(document.getElementById('generator-height-of-shapes').value)
    
    for (let i = 0; i < numShapes; i++) {
        // random color
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]

        // random opacity
        ctx.globalAlpha = Math.random().toFixed(2)

        ctx.fillRect(
            cellmate.randomXCoord(),
            cellmate.randomYCoord(),
            shapeWidth || settings.cellWidth,
            shapeHeight || settings.cellHeight)
    }
}

/**  UI event listeners  */

// Main generate UI action
let generateButton = document.getElementById('generate-button')

generateButton.addEventListener('click', () => {
    generator()
}, false)

// Add color to colors list that gets randomly chosen from in the generator feature.
let generatorColorInput = document.getElementById('generator-color-input')
let generatorAddColorButton = document.getElementById('generator-add-color-button')
let generatorColorsList = document.getElementById('generator-added-colors')

generatorAddColorButton.addEventListener('click', () => {
    let color = generatorColorInput.value

    let span = document.createElement('span')
    span.className = 'colors-list-span'
    span.style.color = color
    span.innerHTML = color
    generatorColorsList.appendChild(span)

}, false)

// Parse the 'colors-list-span' elements to get current list of chosen colors,
// and return array of hexadecimal color values.
const getChosenColors = () => {
    let hexColors = []
    let colorSpans = document.getElementsByClassName('colors-list-span')
    
    for (let i = 0; i < colorSpans.length; i++) {
        hexColors.push(colorSpans[i].innerHTML)
    }

    return hexColors
}
