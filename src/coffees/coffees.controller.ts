import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll(): string {
    return 'this action return all coffes';
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return `this action returns #${id} id`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
