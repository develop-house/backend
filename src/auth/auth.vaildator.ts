import { Login } from 'src/type/auth';
import { CreateUserDto } from 'src/user/dto/user-create.dto';
import { Password, message, Success, Email, Nickname, Message } from './auth.message';

class AuthVaildator {
  private PASSWORD = 'password';
  private NICKNAME = 'nickname';
  private EMAIL = 'email';

  private passwordRegex = new RegExp('^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,}$');
  private emailRegex = new RegExp('/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i');
  private nicknameRegex = new RegExp('/^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/');

  constructor() {}

  private match(target: string, type: string): RegExpMatchArray | null {
    switch (type) {
      case 'password':
        return target.match(this.passwordRegex);
      case 'nickname':
        return target.match(this.nicknameRegex);
      case 'email':
        return target.match(this.emailRegex);
    }
  }
  private passwordVerify(password: string): Password | Success {
    const result = this.match(password, this.PASSWORD);
    if (!result) return message.password.incorrectFormat;
    return message.success;
  }
  private emailVerify(email: string): Email | Success {
    const result = this.match(email, this.EMAIL);
    if (!result) return message.email.incorrectFormat;
    return message.success;
  }
  private nicknameVerify(nickname: string): Nickname | Success {
    const result = this.match(nickname, this.NICKNAME);
    if (!result) return message.nickname.incorrectFormat;
    return message.success;
  }

  join(user: CreateUserDto): Message {
    const emailResult = this.emailVerify(user.email);
    if (emailResult !== message.success) return emailResult;

    const nicknameResult = this.nicknameVerify(user.nickname);
    if (nicknameResult !== message.success) return emailResult;

    const passwordResult = this.passwordVerify(user.password);
    if (passwordResult !== message.success) return passwordResult;

    return message.success;
  }

  login(user: Login): Message {
    const emailResult = this.emailVerify(user.email);
    if (emailResult !== message.success) return emailResult;

    return message.success;
  }
}
export default AuthVaildator;
