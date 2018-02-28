var sketch = (p) => {
    p.preload = () => {
    };
    let T = (w, s, a, c) => {
        p.fill(a, a, a, a);
        c.fillRect((w * 2) % p.width, w % p.height, s, s);
    };
    let makeConstellation = (points, x1, y1, t) => {
        let c = document.getElementsByTagName("canvas")[0].getContext("2d");
        p.fill(0, 0, 0, 255);
        p.strokeWeight(2);
        p.textSize(64);
        p.textFont('Exo2-Black');
        points.forEach((point, i) => {
            let r = Math.pow(i, 4.3);
            let a = r % 5 * Math.pow(Math.sin((i * p.PI / 10) + t), 2);
            let s = 51 * a;
            p.fill(s, s, s, s);
            a = r % 3 * Math.pow(Math.sin(t), 2) + 1;
            s = 51 * a;
            p.stroke(s, s, s, s);
            point[0] = point[0] + x1;
            point[1] = point[1] + y1;
            if (i < points.length - 1) {
                p.strokeWeight(2);
                p.line(point[0], point[1], points[i + 1][0] + x1, points[i + 1][1] + y1);
            }
            c.fillRect(point[0], point[1], 5, 5);
        });
    };
    p.mouseClicked = () => {
    };
    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight).canvas;
        this.canvas = canvas;
        console.log(canvas);
    };
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    //demo vars
    let positionX = 10;
    let positionY = 10;
    let cubeSize = 50;
    //TODO: Vary star count base don screen size
    p.draw = () => {
        let c = this.canvas.getContext("2d");
        let t = p.millis() / 1000 * (1 / 4);
        p.background('black');
        for (let i = 0; i < 8e3; i++) {
            let r = Math.pow(i, 4.3);
            let a = r % 4 * Math.pow(Math.sin(i + t), 2);
            let s = 51 * a;
            if (i < 9) {
                s = 40 * a;
            }
            T((Math.pow((t / 10), (i < 9 ? 2 : 0))) * 300 + Math.pow(i, 4.3), a, s, c);
        }
        let points = [[69, 219], [69, 186], [39, 187], [4, 142], [24, 148], [69, 196], [76, 152], [23, 120], [28, 49], [29, 8], [66, 23], [133, 27], [168, 8], [175, 45], [190, 92], [177, 140], [127, 151], [141, 218]];
        points.forEach((point) => {
            point[0] = point[0] / 2;
            point[1] = point[1] / 2;
        });
        makeConstellation(points, 720, 720, t);
    };
};
var p = new p5(sketch);
//# sourceMappingURL=sketch.js.map