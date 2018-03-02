import Constellation from './constellation'
var canvas, github;
var sketch = (p) => {
    p.preload = () => {

    }
    let T = (w,s,a,c) => {
        p.fill(a,a,a,a)
        c.fillRect((w*2)%p.width, w%p.height, s, s )
    }

    p.mouseClicked = () => {
        console.log('cliggidy clig xd')
    }
   
    p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight).canvas;
        let points = [[69, 219], [69, 186], [39, 187], [4, 142], [24, 148], [69, 196], [76, 152], [23, 120], [28, 49], [29, 8], [66, 23], [133, 27], [168, 8], [175, 45], [190, 92], [177, 140], [127, 151], [141, 218]]; 
        github = new Constellation(points)
        github.scale = 2;
        console.log(canvas)
    }
   
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
   
    //demo vars
    let positionX = 10;
    let positionY = 10;
    let cubeSize = 50;
    
    //TODO: Vary star count base don screen size
    p.draw = () => {
        let c = canvas.getContext("2d");
        let t = p.millis() / 1000 * (1/4);
        p.background('black')
        for(let i = 0; i < 8e3; i++){
            let r = i ** 4.3;
            let a = r % 4 * Math.sin(i + t) ** 2;
            let s = 51 * a;
            if(i < 9){
                s = 40 * a;
            }
            T(((t/10) ** (i < 9 ? 2 : 0)) * 300 + i**4.3, a, s, c)
        }
        github.setLocation(360, 360)
        github.draw(p);
    }
}
 
var p = new p5(sketch);