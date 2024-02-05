export class Pelota {
    
    constructor(x, y, vX, vY, color, mida) {
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.color = color;
        this.mida = mida;
    }

    pinta(ctx) {
        ctx.beginPath(); 
        ctx.fillStyle = this.color; 

        ctx.arc(this.x, this.y, this.mida, 0, 2 * Math.PI); 
        ctx.fill(); 
    }

    movimiento() {
        if ((this.x + this.mida) > canvas.width || (this.x - this.mida) < 0) this.vX *= -1; 
        if ((this.y + this.mida) > canvas.height || (this.y - this.mida) < 0) this.vY *= -1;

        this.x += this.vX;
        this.y += this.vY;
    }
}