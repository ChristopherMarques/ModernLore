import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService extends TypeOrmCrudService<Book> {
  constructor(@InjectRepository(Book) repo) {
    super(repo);
  }
}
