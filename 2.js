

var car={
    color:"black",
    madeYear:2009,
    price:8000,
    model:"Toyota"
};

function f(obj,string){
    for (let key in obj) {

        if (key==string) {
    
          return  true; // ownPropertie
        }   
    }
}
f(car,"model");