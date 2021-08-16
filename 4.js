function Appliance(){
    this.turnOn = function(){
      console.log(`Appliance is turned on`);
    }
    this.turnOff = function(){
        console.log(`Appliance is turned off`);
      }
  
  }

  function Comp(){
      this.capacity=200 ;
    
  }
  
  function Lamp(){
    this.capacity=60;
}

Comp.prototype=new Appliance();
Lamp.prototype=new Appliance();

  const computer = new Comp();
  const tableLamp = new Lamp();
 tableLamp.turnOn();
console.log(computer.capacity);