type MessageSturcture = {
  nickname: {
    incorrectFormat: string;
    duplicate: string;
  };
  password: {
    incorrectFormat: string;
    notEqual: string;
  };
  email: {
    incorrectFormat: string;
    alreadyExisting: string;
  };
  user: {
    noExisting: string;
    failedJoin: string;
  };
  success: string;
};

export const message: MessageSturcture = {
  nickname: {
    incorrectFormat: '올바르지 않은 닉네임 형식입니다.',
    duplicate: '이미 사용 중인 닉네임입니다.',
  },
  password: {
    incorrectFormat: '올바르지 않은 비밀번호 형식입니다.',
    notEqual: '비밀번호가 일치하지 않습니다.',
  },
  email: {
    incorrectFormat: '올바르지 않은 이메일 형식입니다.',
    alreadyExisting: '이미 존재하는 이메일입니다.',
  },
  user: {
    noExisting: '존재하지 않은 사용자입니다.',
    failedJoin: '회원가입에 실패하였습니다.',
  },
  success: 'Succeed!',
};

export type Nickname = Partial<MessageSturcture['nickname']>;
export type Password = Partial<MessageSturcture['password']>;
export type Email = Partial<MessageSturcture['email']>;
export type User = Partial<MessageSturcture['user']>;
export type Success = MessageSturcture['success'];
export type Message = Nickname | Password | Email | User | Success;
