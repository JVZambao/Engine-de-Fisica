class vector{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    sum (amount) {
        this.x += amount
        this.y += amount
    }
}

export default vector