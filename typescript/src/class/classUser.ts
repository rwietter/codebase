class UserAccount {
  public name: string;
  readonly age: number; /* só tem permissão de leitura */

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  logDetails(): void {
    console.log(`The player is ${this.name} is ${this.age} years old.`)
  }
  public getAge() {
    return this.age;
  }
  get getName() {
    return this.name;
  }
}
const robert = new UserAccount('Robert', 70)
robert.logDetails()

/* -------------------------------------------- */
/*  Extends class - methods getters and setters
/* -------------------------------------------- */
class CharAccount extends UserAccount {
  private nickname: string;
  private level: number;
  protected skin: string; /* a classe extendida tem acesso a propriedade, mas fora dela e da sua mãe, não se pode acessá-la */

  constructor(name: string, age: number, nickname: string, level: number, skin: string) {
    super(name, age); // herança
    this.nickname = nickname;
    this.level = level;
    this.skin = skin;
  }
  public getSkin() {
    console.log(`This skin ${this.skin}`)
  }
  set setLevel(level: number) {
    if (level) {
      this.level = level;
    }
  }
}

const jhon = new CharAccount('Jhon', 43, 'json', 19, 'blue');
console.log(jhon);
jhon.logDetails(); /* herança */
// jhon.nickname = "_robert" /* error, nickname is private of external objects */
console.log(jhon);
console.log(jhon.age)
// jhon.age = 1; /* Cannot assign to 'age' because it is a read-only property */
console.log(robert.getName) /* get é uma propriedade e não um função */
jhon.setLevel = 20;
console.log(jhon)

/* -------------------------------------------- */
/*  Abstract Class
/* -------------------------------------------- */
/* são usadas como classe modelo, mas não se pode criar objetos a partir dela */
abstract class UserPlay {
  name: string;

  constructor(name: string){
    this.name = name;
  }
}
class UserGame extends UserPlay {
    name: string;

  constructor(name: string) {
    super(name);
    this.name = name;
  }
}
// const ford = new UserPlay('ford'); /* Cannot create an instance of an abstract class. */
