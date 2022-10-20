export class Star{
    constructor(x, y, height, width){
        this.height = height;
        this.width = width;
        this.size = Math.random() *  2;
        this.speed = Math.random() * 0.15;
        this.y = y;
        this.x = x;
    }

    reset(){
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.15;
        this.x = this.width;
        this.y =  Math.random() * this.height;
    }

    update(ctx){
        this.x -= this.speed;
        if(this.x < 0){
            this.reset();
        }else{
            ctx.fillRect(this.x, this.y, this.size, this.size)
        }
    }
}

export class Comet{
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.reset();
    }

    reset(){
        this.x = Math.random() * this.width;
        this.y = 0;
        this.len = Math.random() * 50 + 10;
        this.speed = Math.random() * 10 + 6;
        this.size = Math.random() * 1 + 0.1;
        this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
        this.active = false;
    }

    update(ctx){
         if(this.active){
            this.x -= this.speed;
            this.y += this.speed;
            if(this.x < 0 || this.y >= this.height){
                this.reset();
            }else{
                ctx.lineWidth = this.size;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.len, this.y - this.len);
                ctx.strokeStyle = "white"
                ctx.stroke();
            }
         }else{
            if(this.waitTime < new Date().getTime()){
                this.active = true;
            }
         }
    }

}