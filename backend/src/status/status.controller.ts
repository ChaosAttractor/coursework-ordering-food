import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
  ParseIntPipe,
} from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleList } from 'src/auth/roles/role.enum';
import { Roles } from 'src/auth/roles/role.decorator';
import { Status } from './entities/status.entity';
import { Response } from 'express';
import { Public } from 'src/auth/roles/public';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Post()
  create(
    @Res({ passthrough: true }) res: Response,
    @Body() createStatusDto: CreateStatusDto,
  ): Promise<Status> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.statusService.create(createStatusDto);
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get()
  findAll(@Res({ passthrough: true }) res: Response): Promise<Status[]> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.statusService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get(':id')
  findOne(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Status> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.statusService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Patch(':id')
  update(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.statusService.update(id, updateStatusDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Delete(':id')
  remove(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.statusService.remove(+id);
  }
}
