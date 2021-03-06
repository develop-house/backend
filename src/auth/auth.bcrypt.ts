import bcrypt from 'bcrypt';

class Bcrypt {
  private saltRounds = 10;
  constructor() {}

  toCompare(password, hash): Promise<boolean> {
    return bcrypt.compare(password, hash, (error, result) => {
      if (error) console.warn(error);
      return result;
    });
  }
  toHash(password): Promise<string> {
    return bcrypt.hash(password, this.saltRounds, (error, hash) => {
      if (error) console.warn(error);
      return hash;
    });
  }
}
export default Bcrypt;
