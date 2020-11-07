interface IDatabase {
  fetch(): string;
}

class MySQL {
  fetch(): string {
    return 'MySQL'
  }
}

class Postgres {
  fetch(): string {
    return 'Postgres'
  }
}

class App {
  private database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }
  public fetch() {
    return this.database.fetch()
  }
}

const app = new App(new Postgres())
app.fetch()
