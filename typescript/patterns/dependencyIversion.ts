const SqlRecordReader = require('SqlRecordReader')

interface IRecordReader {
  getAll(): []
}

class Something {
  reader: IRecordReader;

  constructor(reader: IRecordReader) {
    this.reader = reader;
  }
}

const sqlr = new SqlRecordReader();
const ds = new Something(sqlr)

// ------------------------------------------

/*
// => With dependency SqlRecordReader
class Foo {
  reader: SqlRecordReader;

  constructor(sqlReader: SqlRecordReader) {
    this.reader = sqlReader;
  }

  doSomething() {
    var records = this.reader.readAll();
    // etc.
  }
}
*/
