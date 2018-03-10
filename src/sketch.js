import {Constellation, TextConstellation} from './constellation'
var canvas, github, resumeConstellation, nameConstellation;
var noise;

var sketch = (p) => {
    p.preload = () => {

    }
    let T = (w,s,a,c) => {
        p.fill(a,a,a,a)

        c.fillRect((w*noise)%p.width, w%p.height, s, s )
    }

    p.mouseClicked = () => {
        console.log('cliggidy clig xd')
    }
   
    p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight).canvas;
        let githubPoints = [[69, 219], [69, 186], [39, 187], [4, 142], [24, 148], [69, 196], [76, 152], [23, 120], [28, 49], [29, 8], [66, 23], [133, 27], [168, 8], [175, 45], [190, 92], [177, 140], [127, 151], [141, 218]]; 
        let resumePoints = [[153, 101], [67, 183], [34, 174], [21, 140], [138, 19], [156, 16], [187, 26], [127, 103], [78, 148], [58, 139], [61, 125], [117, 67]]
        github = new Constellation(githubPoints)
        github.scale = 1/2;
        resumeConstellation = new Constellation(resumePoints)
        resumeConstellation.scale = 1/2

        noise = p.random(1, 5)
        console.log(canvas)
        sketch.foo = "fug"
        console.log(sketch.foo)
        sketch.centerPoint = [p.windowWidth / 2, p.windowHeight / 2]
    }
   
    p.windowResized = () => {
        noise = p.random(1, 5)
        sketch.centerPoint = [p.windowWidth / 2, p.windowHeight / 2]
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
   
    
    //TODO: Vary star count base don screen size
    p.draw = () => {
        let cp = sketch.centerPoint;
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
        /**
         * Set up Font Details
         */
        p.fill(255, 255, 255, 160)

        p.textSize(50)
        p.textFont('Exo 2')

        let nameWidth = p.textWidth('Blaise Marchetti')
        p.text('Blaise Marchetti', cp[0] - nameWidth/2, cp[1] - 70)
        

        resumeConstellation.setLocation(cp[0] - 180, cp[1])
        resumeConstellation.draw(p)
        github.setLocation((cp[0] + 180) - (github.getWidth()), cp[1])
        github.draw(p);
    }
}
 
var p = new p5(sketch);