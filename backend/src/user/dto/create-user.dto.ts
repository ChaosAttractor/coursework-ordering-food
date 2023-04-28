export class CreateUserDto {
  id: number;
  username: string;
  password: string;
  role: number;
  createdAt: Date;
  updatedAt: Date;
  refreshToken: string;
}
