
class Appliance {     
    constructor() {
    }
   
    turnOn(){
    return `Appliance is turned on`;
   }
  
  turnOff(){
        return `Appliance is turned off`;

  }
   
   }

class Comp extends Appliance {
    constructor(){
        super();
      
        
 }	
 turnOn() {
   
   return super.turnOn();
 
}
  capacity(){
    
    return 'Computer consumes 300 Watt per hour'
  }
}

class Lamp extends Appliance {
    constructor(){
       super();
      
        
 }	
 turnOn() {
   
   return super.turnOn();
 
}
  capacity(){
    
    return 'TableLamp consumes 60 Watt per hour'
  }
}

const computer = new Comp()
const tableLamp = new Lamp()

console.log(computer.turnOff())
console.log(tableLamp.capacity())
