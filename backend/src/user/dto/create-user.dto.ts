export class CreateUserDto {
  id: number;
  login: string;
  password: string;
  role: number;
  createdAt: Date;
  updatedAt: Date;
  refreshToken: string;
}
