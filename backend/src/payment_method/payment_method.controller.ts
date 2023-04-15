import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Res,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { RoleList } from 'src/auth/roles/role.enum';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles/role.decorator';
import { Response } from 'express';
import { PaymentMethod } from './entities/payment_method.entity';
import { Public } from 'src/auth/roles/public';

@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Post()
  create(
    @Res({ passthrough: true }) res: Response,
    @Body() createPaymentMethodDto: CreatePaymentMethodDto,
  ): Promise<PaymentMethod> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get()
  findAll(@Res({ passthrough: true }) res: Response): Promise<PaymentMethod[]> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.paymentMethodService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get(':id')
  findOne(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PaymentMethod> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.paymentMethodService.findOne(id);
  }

  @Patch(':id')
  update(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto,
  ): Promise<PaymentMethod> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.paymentMethodService.update(id, updatePaymentMethodDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Delete(':id')
  remove(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.paymentMethodService.remove(id);
  }
}
