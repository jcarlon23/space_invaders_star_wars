import { Controller } from "@hotwired/stimulus"
const canvas = document.querySelector('canvas')
const c =canvas.getContext('2d')

// Connects to data-controller="player"
export default class extends Controller {
  connect() {
    class Player{
      constructor(){
        this.postion = {
          x: 200
          y: 200
        }
        this.velocity = {}
        x: 0,
        y: 0
    }

    const image = new Image()
    image.src = "xwing.jpg"

   this.image = imgage
   this.width = 200
   this.height = 200
  }
  draw(){
    c.drawImage(this.image, this.postion.x, this.postion.y)
  }
}

const player = new Player()
player.draw()

function anitmate()
requestAnimationFrame(animate)
player.draw()
}

animate ()
