import { IsEmail, IsNotEmpty, IsPositive } from 'class-validator';

export class EmailOfuscateDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  email2: string;
}
