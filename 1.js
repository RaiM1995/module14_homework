var car={
    color:"black",
    madeYear:2009
};
var Mercedes=Object.create(car)
Mercedes.price=10000
function f(obj){
    for (let key in obj) {

        if (obj.hasOwnProperty(key)) {
    
            console.log(key); // ownPropertie
        }   
    }
}
f(Mercedes);