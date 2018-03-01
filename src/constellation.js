class Constellation{

    constructor(points){
        this.p = points;
        this.scale = 1;
        this.canvas = document.getElementsByTagName("canvas")[0].getContext("2d");
    }

    draw(p, x, y){
        let c = this.canvas;
        let t = p.millis() / 1000
        p.fill(0,0,0,255)
        p.strokeWeight(2)
        p.textSize(64)
        let points = this.p

        points.forEach((point, i) => {
            let r = i ** 4.3;
            let a = r % 5 * Math.sin((i * p.PI / 10) + t) ** 2
            let s = 51 * a;
            p.fill(s,s,s,s)
            a = r % 3 * Math.sin(t) ** 2 + 1
            s = 51 * a;
            p.stroke(s, s, s, s);
            let p1 = point[0]*this.scale + x;
            let p2 = point[1]*this.scale + y;
            if(i < points.length - 1){
                p.strokeWeight(2);
                p.line(p1, p2, points[i+1][0]*this.scale + x, points[i+1][1]*this.scale + y)
            }

            c.fillRect(p1, p2, 5, 5);

        })
    }
}


export default Constellation