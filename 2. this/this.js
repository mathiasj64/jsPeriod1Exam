console.log(this)//global window

var myCar = {
    name: 'fast',
    speed: 100,
    print: function(){
        console.log(this); //objectet myCar
        console.log(this.speed); //objectet myCar
    }
};

myCar.print();