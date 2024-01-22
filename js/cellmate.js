
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
    
    // Clear / Rest canvas
    // TODO: make "if rest true setting"
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    let colors = ['_', 'red', 'green', 'blue']
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

// UI event listeners
let generateButton = document.getElementById('generate-button')

generateButton.addEventListener('click', () => {
    generator()
}, false)