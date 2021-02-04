interface IUsers {
  firstName: string;
  lastName: string;
}

export const Singleton = (() => {
  const users: IUsers[] = [];

  return {

    add(user: IUsers) {
      users.push(user);
    },

    del(index: number) {
      users.splice(index, 1);
    },

    show() {
      return users;
    }
    
  }
})()


Singleton.add({ firstName: "Maurício", lastName: "Witter" })

Singleton.show().map(users => console.log(users))

Singleton.del(0);
