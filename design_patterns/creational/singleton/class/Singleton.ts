interface IUsers  {
  firstName: string;
  lastName: string;
}

export class Singleton {
  public static instance: Singleton | null = null;

  private Users: IUsers[] = [];

  private constructor() {
    /** Não permite criar uma instância a partir do Singleton */
  }

  static getInstance() {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  /** Quebra o príncipio de responsabilidade única */
  addUsers(user: IUsers) {
    this.Users.push(user);
  }

  getUser() {
    return this.Users;
  }

  delUser(index: number) {
    this.Users.splice(index, 1);
  }
}

const singleton = Singleton.getInstance();

singleton.addUsers({ firstName: 'Carlos', lastName: 'Magno' });
singleton.addUsers({ firstName: 'Paul', lastName: 'Magno' });
singleton.getUser().map((user) => console.log(user));
console.log("\n")
singleton.delUser(0);
singleton.getUser().map(user => console.log(user));
