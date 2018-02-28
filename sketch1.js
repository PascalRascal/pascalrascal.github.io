let ns = (x) => {
    return Math.abs(Math.sin(x));
};
let R = (a1, a2, a3, a4) => {
    return "rgba(" + a1 + "," + a2 + "," + a3 + "," + a4 + ")";
};
var sketch = (p) => {
    let drawStar = (w, s, a, c) => {
        c.fillStyle = R(a, a, a, a);
        c.fillRect(w * 2e3, w % 1079, s, s);
    };
    p.preload = () => {
    };
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        this.canvasContext = document.getElementsByTagName('canvas').item(0).getContext("2d");
    };
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    //demo vars
    let positionX = 10;
    let positionY = 10;
    let cubeSize = 50;
    let drawTrippyShit = () => {
        let c = this.canvasContext;
        let speed = 20;
        let timeElapsed = p.millis() / 1000;
        let t = Math.PI / 2 * (timeElapsed) * (1 / speed);
        let w = p.width;
        let h = p.height;
        p.background(255, 255, 255);
        p.stroke(0);
        p.strokeWeight(1);
        let hslColor = 180 + Math.sin(t) * 20;
        p.fill('hsl(180, 50%, 50%)');
        for (var i = 0; i < 8e3; i++) {
            // Why 795????
            // Constant Values
            // Modifying this increases the "complexity" as it goes in
            let z = Math.PI * Math.sin(t / 4);
            // Radius of the shape
            let r = 300;
            let v = i / 795;
            let s = z * Math.sin(t) * Math.sin(5 * v);
            let q = s * s;
            s *= 1 - q / 3 * (1 - q / 12) * (3 + q / 6);
            let k = r * ((2 - q / 3) * (1 - q / 14));
            c.fillRect((w / 2) + k * Math.cos(s += v), (h / 2) + k * Math.sin(s), 2, 2);
        }
    };
    p.draw = () => {
        drawTrippyShit();
    };
};
//# sourceMappingURL=sketch1.js.map