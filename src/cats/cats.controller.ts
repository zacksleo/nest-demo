import { Body, Controller, Get, Param, Post, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from 'cats/dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @HttpCode(201)
  @Post()
  async create(@Res() res, @Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params) {
    // console.log(params.id);
    return {};
  }
}