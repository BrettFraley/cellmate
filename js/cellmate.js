
const canvas = document.getElementById('cellmate-canvas')
const ctx = canvas.getContext('2d')

const settings = {
    cellWidth: 10,
    cellHeight: 10
}

const cellmate = {
    randomXCoord: max => Math.floor(Math.random() * canvas.width) - settings.cellWidth,
    randomYCoord: max => Math.floor(Math.random() * canvas.height) - settings.cellHeight,
}

// fix this color[0] hack
let colors = ['_','red', 'green', 'blue']

for (let i = 0; i < 325; i++) {

    // random color
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]

    // random opacity
    ctx.globalAlpha = Math.random().toFixed(2)

    ctx.fillRect(
        cellmate.randomXCoord(),
        cellmate.randomYCoord(),
        settings.cellWidth,
        settings.cellHeight)

}
