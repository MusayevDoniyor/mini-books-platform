import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Genre {
  FICTION = 'Fiction',
  NON_FICTION = 'Non-fiction',
  SCIENCE = 'Science',
  FANTASY = 'Fantasy',
  MYSTERY = 'Mystery',
  BIOGRAPHY = 'Biography',
  HISTORY = 'History',
  ROMANCE = 'Romance',
  SELF_HELP = 'Self-help',
  CHILDREN = 'Children',
}

@Schema({ timestamps: true })
export class Book {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  author: string;

  @Prop({ type: Date })
  publishedDate: Date;

  @Prop({ type: Number })
  pages: number;

  @Prop({ type: [String], enum: Object.values(Genre) })
  genres: Genre[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
