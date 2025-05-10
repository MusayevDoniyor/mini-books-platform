import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsInt,
  IsArray,
  IsEnum,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Genre } from '../../schemas/book.schema';

export class CreateBookDto {
  @ApiProperty({ example: 'The Great Gatsby' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'F. Scott Fitzgerald' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiPropertyOptional({
    example: '1925-04-10',
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  publishedDate?: Date;

  @ApiPropertyOptional({ example: 180 })
  @IsOptional()
  @IsInt()
  pages?: number;

  @ApiPropertyOptional({
    example: [Genre.FICTION, Genre.ROMANCE],
    enum: Genre,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsEnum(Genre, { each: true })
  genres?: Genre[];
}
