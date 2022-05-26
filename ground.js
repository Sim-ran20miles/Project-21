class Ground {
    Constructor(x,y,w,h){
        this.w = w;
        this.h = h;

        var options = {
            isStatic : true
        }

    }

    show(){
        this.body = Bodies.rectangle(this.w,this.h,options);
    }
}