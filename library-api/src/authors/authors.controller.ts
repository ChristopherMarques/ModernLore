import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Author } from './author.entity';
import { AuthorsService } from './authors.service';

@Crud({
  model: {
    type: Author,
  },
})
@Controller('authors')
export class AuthorsController implements CrudController<Author> {
  constructor(public service: AuthorsService) {}
}
