//@ts-check
class Constellation{
    constructor(points){
        this.p = points;
        this.scale = 1;
        this.canvas = document.getElementsByTagName("canvas")[0].getContext("2d");
        // Create the bounding square for this constellation, used for detecting mouse over
        let bp = [points[0][0], points[0][0], points[0][1], points[0][1]]
        points.forEach((point) => {
            // Minimum X
            if(point[0] < bp[0]){
                bp[0] = point[0]
            }
            // Maximum X
            if(point[0] > bp[1]){
                bp[1] = point[0]
            }
            // Minimum Y
            if(point[1] < bp[2]){
                bp[2] = point[1]
            }
            // Maximum Y
            if(point[1] > bp[3]){
                bp[3] = point[1]
            }
        })
        this.boundingPoints = bp;
        this.x = 0;
        this.y = 0;
    }

    getWidth() {
        return this.scale * (this.boundingPoints[1] - this.boundingPoints[0])
    }

    getHeight() {
        return this.scale * (this.boundingPoints[3] - this.boundingPoints[2])
    }

    /**
     * Gets the 4 points used to construct the bounding rectangle for this constellation
     * @returns {number[]} [minX, maxX, minY, maxY]
     * 
     */

    getBoundingPoints() {
        return this.boundingPoints.map((point, i) => {
            if ( i < 2){
                return (point * this.scale) + this.x
            } else {
                return (point * this.scale) + this.y
            }
        })
    }
    /**
     * Check to see if a point lies in the bounding rectangle of this constellation
     * @param {number} x x coordinate of point to check
     * @param {number} y y coordinate of point to check
     * @returns {boolean} True if the point is inside the bounding rectangle, false otherwise 
     */
    testPoint(x,y){
        let bp = this.getBoundingPoints();
        if(x >= bp[0] && x <= bp[1] && y >= bp[2] && y <= bp[3]){
            return true
        } else {
            return false
        }
    }
    /**
     * Set the x,y coordinates where the constellation will be drawn
     * @param {number} x X coordinate
     * @param {number} y Y coordinate
     * 
     */

    setLocation(x,y){
        this.x = x;
        this.y = y;
    }

    draw(p){
        let c = this.canvas;
        let speed = 1/4;
        
        let t = p.millis() / 1000 * speed
        let points = this.p
        let x = this.x
        let y = this.y
        
        

        points.forEach((point, i) => {
            // Cool math
            let r = i ** 4.3;
            let a = r % 5 * Math.sin((i * p.PI / 10) + t) ** 2
            let s = 51 * a;
            a = r % 3 * Math.sin(t) ** 2 + 1
            s = 51 * a;
            p.stroke(s + 15, s + 15, s + 15, s + 15);
            p.fill(s + 25,s + 25,s + 25,s + 25)

            // Transform the location of the points
            let p1 = point[0]*this.scale + x;
            let p2 = point[1]*this.scale + y;
            //Draw the lines of the constellation
            if(i < points.length - 1){
                p.strokeWeight(2);
                p.line(p1, p2, points[i+1][0]*this.scale + x, points[i+1][1]*this.scale + y)
            }
            // Draw the stars of the constellation
            c.fillRect(p1, p2, 5, 5);

        })
    }
}

class TextConstellation extends Constellation {
    constructor(text, font){
        let points = font.textToPoints(text, 0, 0, 50)
        super(points)
    }
}


export {Constellation, TextConstellation}