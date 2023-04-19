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
  Req,
} from '@nestjs/common';
import { OrderListService } from './order_list.service';
import { CreateOrderListDto } from './dto/create-order_list.dto';
import { UpdateOrderListDto } from './dto/update-order_list.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleList } from 'src/auth/roles/role.enum';
import { Roles } from 'src/auth/roles/role.decorator';
import { Response, Request } from 'express';
import { OrderList } from './entities/order_list.entity';
import { Public } from 'src/auth/roles/public';

@Controller('order-list')
export class OrderListController {
  constructor(private readonly orderListService: OrderListService) {}

  @UseGuards(JwtAuthGuard)
  @Public()
  @Post()
  create(
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
    @Body() createOrderListDto: CreateOrderListDto,
  ): Promise<OrderList> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.orderListService.create(createOrderListDto, req);
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get()
  findAll(@Res({ passthrough: true }) res: Response): Promise<OrderList[]> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.orderListService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get('/user')
  findAllUserOrder(
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ): Promise<OrderList[]> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.orderListService.findAllUserOrder(req);
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get(':id')
  findOne(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<OrderList> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.orderListService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin, RoleList.Kitchen)
  @Patch(':id')
  update(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderListDto: UpdateOrderListDto,
  ): Promise<OrderList> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.orderListService.update(id, updateOrderListDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Delete(':id')
  remove(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.orderListService.remove(id);
  }
}
