export class CreateUserDto {
  id: number;
  login: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  refreshToken: string;
}
