import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService extends TypeOrmCrudService<Author> {
  constructor(@InjectRepository(Author) repo) {
    super(repo);
  }
}
