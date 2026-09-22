const robot = {
  name: "CyberChef",
  specialty: "Ramen",
  //Si usas las flechas en las funciones this no apunta al propio objeto
  greet() {
    console.log(`Hola, soy ${this.name} y preparo ${this.specialty}`);
  },
};
robot.greet();
