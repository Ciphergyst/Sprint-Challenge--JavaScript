// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(atrributes) {
    this.length = atrributes.length;
    this.width = atrributes.width;
    this.height = atrributes.height;
  }

}
console.log(CuboidMaker);


class cuboid1 extends CuboidMaker {
  constructor(volume) {
    super(volume);
  }
   volume(){
     return this.length * this.width * this.height;
   }

}


class cuboid2 extends CuboidMaker {
  constructor(surfaceArea) {
  super(surfaceArea);
}
    surfaceArea(){
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }


}
// length: 4, width: 5, and height: 5 to cuboid.
let newCub = new Cuboid(4, 5, 5);




// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(CuboidMaker.volume()); // 100
console.log(cuboidMaker.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
