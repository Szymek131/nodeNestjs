import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 20)
  client: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  address: string;
}
