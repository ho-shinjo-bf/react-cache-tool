import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Logger,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUID } from 'crypto';
import { GetUserDto } from './dto/get-user.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<GetUserDto> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<GetUserDto[]> {
    this.logger.log('Finding all users');
    return this.usersService.findAll();
  }

  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: UUID): Promise<GetUserDto> {
    return this.usersService.findOne(id);
  }

  @ApiParam({ name: 'id', type: String })
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<GetUserDto> {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: UUID): Promise<void> {
    void this.usersService.delete(id);
  }
}
