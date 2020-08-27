// const drawingApp = {
//     name: 'Basic forms drawing app',
//     author: 'Germán Álvarez',
//     version: '1.0.0',
//     license: undefined,
//     description: 'Canvas app to create basic forms on the browser',
//     canvasId: undefined,
//     ctx: undefined,
//     canvasSize: {
//         w: undefined,
//         h: undefined
//     },
//     init(id) {
//         this.canvasId = id
//         this.ctx = document.getElementById(this.canvasId).getContext('2d')
//         this.setDimensions()
//         this.setEventHandlers()
//         console.log('Así es el objeto de renderizado 2D',this.ctx)        // <= El objeto de renderizado bidimensional
//     },
//     setDimensions() {
//         document.getElementById(this.canvasId).setAttribute('width', window.innerWidth)
//         document.getElementById(this.canvasId).setAttribute('height', window.innerHeight)
//         this.canvasSize = {
//             w: window.innerWidth,
//             h: window.innerHeight
//         }
//     },
//     setEventHandlers() {
//         window.onresize = () => this.setDimensions()
//     },
//     drawFilledSquare() {
//         this.ctx.fillStyle = 'red'
//         this.ctx.fillRect(this.canvasSize.w / 2 - 150, this.canvasSize.h / 2 - 150, 300, 300)
//         this.ctx.fillStyle = 'green'
//         this.ctx.fillRect(this.canvasSize.w / 2 - 250, this.canvasSize.h / 2 - 50, 500, 100)
//     },
//     drawLinarSquare() {
//         this.ctx.lineWidth = 20
//         this.ctx.strokeStyle = 'blue'
//         this.ctx.strokeRect(100, 100, this.canvasSize.w - 200, this.canvasSize.h - 200)
//         this.ctx.lineWidth = 5
//         this.ctx.strokeRect(200, 200, this.canvasSize.w - 400, this.canvasSize.h - 400)
//     },
//     drawContinuousLines() {
//         this.ctx.lineWidth = 20
//         this.ctx.strokeStyle = '#ccc'
//         this.ctx.beginPath()
//         this.ctx.moveTo(100, 100)
//         this.ctx.lineTo(100, 500)
//         this.ctx.lineTo(500, 500)
//         this.ctx.lineTo(200, 400)
//         this.ctx.closePath()
//         this.ctx.stroke()

//         // this.ctx.lineWidth = 2

//         // for (let i = 0; i < 10; i++) {
//         //     this.ctx.beginPath()
//         //     this.ctx.moveTo(100, 100)
//         //     this.ctx.lineTo(600, 20 * i)
//         //     this.ctx.stroke()
//         // }
//     },
//     drawDashedLines() {
//         this.ctx.lineWidth = 10
//         this.ctx.beginPath()
//         this.ctx.setLineDash([40, 80])
//         this.ctx.moveTo(100, this.canvasSize.h / 2)
//         this.ctx.lineTo(800, this.canvasSize.h / 2)
//         this.ctx.closePath()
//         this.ctx.stroke()
//     },
//     drawArc() {
//         this.ctx.lineWidth = 20
//         this.ctx.fillStyle = 'red'
//         this.ctx.arc(this.canvasSize.w / 2, this.canvasSize.h / 2, 100, 0, Math.PI * 2)
//         this.ctx.stroke()
//         this.ctx.fill()
//     },
//     drawText(text) {
//         this.ctx.font = '80px sans-serif'
//         this.ctx.fillStyle = 'purple'
//         this.ctx.fillText(text, 100, 100)
//         // this.ctx.strokeText(text, 100, 100)
//     },
//     drawImage(name) {
//         let image = new Image()
//         image.src = `img/${name}`
//         image.onload = () => this.ctx.drawImage(image, 100, 100, 200, 200)
//     }
// }




// const animateApp = {
//     name: 'Animated forms app',
//     author: 'Germán Álvarez',
//     version: '1.0.0',
//     license: undefined,
//     description: 'Canvas app to create animated forms on the browser',
//     canvasId: undefined,
//     ctx: undefined,
//     canvasSize: {
//         w: undefined,
//         h: undefined
//     },
//     init(id) {
//         this.canvasId = id
//         this.ctx = document.getElementById(this.canvasId).getContext('2d')
//         this.setDimensions()
//         this.setEventHandlers()
//         console.log('Así es el objeto de renderizado 2D', this.ctx)        // <= El objeto de renderizado bidimensional
//     },
//     setDimensions() {
//         document.getElementById(this.canvasId).setAttribute('width', window.innerWidth)
//         document.getElementById(this.canvasId).setAttribute('height', window.innerHeight)
//         this.canvasSize = {
//             w: window.innerWidth,
//             h: window.innerHeight
//         }
//     },
//     setEventHandlers() {
//         window.onresize = () => this.setDimensions()
//     },
//     drawCamels() {
//         const camel1 = new Camel(this.ctx, 0, 100, 100, 100, this.canvasSize, 3.5, 'dromedary.png')
//         const camel2 = new Camel(this.ctx, 0, 300, 120, 120, this.canvasSize, 3.2, 'dromedary.png')
//         const camel3 = new Camel(this.ctx, 0, 600, 100, 100, this.canvasSize, 7, 'dromedary.png')

//         const camels = [camel1, camel2, camel3]

//         setInterval(() => {
//             this.clearScreen()
//             camels.forEach(elm => elm.draw())
//         }, 50)
//     },
//     clearScreen() {
//         this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
//     }
// }


// class Camel {

//     constructor(ctx, posX, posY, camelW, camelH, canvasSize, speed, imgName) {
//         this.ctx = ctx
//         this.camelPos = {
//             x: posX,
//             y: posY
//         }
//         this.camelSize = {
//             w: camelW,
//             h: camelH
//         }
//         this.canvasSize = canvasSize
//         this.imgName = imgName
//         this.imageInstance = undefined
//         this.speed = speed
//         this.init()
//     }

//     init() {
//         this.imageInstance = new Image()
//         this.imageInstance.src = `img/${this.imgName}`
//     }

//     draw() {
//         this.moveCamel()
//         this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
//     }

//     moveCamel() {
//         this.camelPos.x += this.speed

//         // if (this.camelPos.x >= this.canvasSize.w - this.camelSize.w || this.camelPos.x <= 0) {
//         //     this.changeDirection()
//         // }

//         this.camelPos.x >= this.canvasSize.w - this.camelSize.w || this.camelPos.x <= 0 ? this.changeDirection() : null
//     }

//     changeDirection() {
//         this.speed *= -1
//     }
// }


const controlledApp = {
    name: 'Controlled forms app',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    description: 'Canvas app to manually control forms on the browser',
    canvasId: undefined,
    ctx: undefined,
    ball: undefined,
    frames: 0,
    obstaclesDensity: 20,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init(id) {
        this.canvasId = id
        this.ctx = document.getElementById(this.canvasId).getContext('2d')
        this.setDimensions()
        this.setEventHandlers()
        this.setEventListeners()
        this.drawBall('football-ball.png')
        console.log('Así es el objeto de renderizado 2D', this.ctx)        // <= El objeto de renderizado bidimensional
    },

    setDimensions() {
        document.getElementById(this.canvasId).setAttribute('width', window.innerWidth)
        document.getElementById(this.canvasId).setAttribute('height', window.innerHeight)
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
    },

    setEventHandlers() {
        window.onresize = () => this.setDimensions()
    },

    drawBall(imageName) {
        this.ball = new Ball(this.ctx, 100, 100, 100, 100, this.canvasSize, imageName)
        setInterval(() => {
            this.frames++
            this.frames % this.obstaclesDensity === 0 ? this.generateObstacle() : null
            this.clearScreen()
            this.ball.draw()
        }, 50)
    },

    generateObstacle() {
        console.log("AHI TE VA! CUIDAO'")
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.ball.move('left') : null
            e.keyCode === 39 ? this.ball.move('right') : null
        }
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}




class Ball {
    constructor(ctx, posX, posY, ballW, ballH, canvasSize, imageName) {
        this.ctx = ctx
        this.ballPos = {
            x: posX,
            y: posY
        }
        this.ballSize = {
            w: ballW,
            h: ballH
        }
        this.canvasSize = canvasSize
        this.imageName = imageName

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move(dir) {
        dir === 'left' ? this.ballPos.x -= 5 : null
        dir === 'right' ? this.ballPos.x += 5 : null
    }
}