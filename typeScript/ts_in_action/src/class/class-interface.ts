interface Human {
  name: string;
  eat(): void;
}

// 接口只能约束类的公有成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
  sleep() {}
}

interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}

const boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {},
}

class Auto {
  state = 1
  // private state1 = 2
}

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
  state = 1
}

class Bus extends Auto implements AutoInterface {
  
}
