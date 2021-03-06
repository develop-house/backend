const bcrypt = require('bcryptjs');

class Bcrypt {
  private saltRounds = 10;
  constructor() {}

  toCompare(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }
  toHash(password: string): string {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    return bcrypt.hashSync(password, salt);
  }
}
export default Bcrypt;
