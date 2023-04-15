import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethod } from './entities/payment_method.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectRepository(PaymentMethod)
    private readonly PaymentMethodRepository: Repository<PaymentMethod>,
  ) {}

  create(
    createPaymentMethodDto: CreatePaymentMethodDto,
  ): Promise<PaymentMethod> {
    const payment_method = new PaymentMethod();

    payment_method.payment_id = createPaymentMethodDto.payment_id;
    payment_method.payment_name = createPaymentMethodDto.payment_name;
    return this.PaymentMethodRepository.save(payment_method);
  }

  async findAll(): Promise<PaymentMethod[]> {
    return await this.PaymentMethodRepository.find();
  }

  async findOne(id: number): Promise<PaymentMethod> {
    return await this.PaymentMethodRepository.findOneBy({ payment_id: id });
  }

  async update(
    id: number,
    updatePaymentMethodDto: UpdatePaymentMethodDto,
  ): Promise<PaymentMethod> {
    const payment_method = await this.PaymentMethodRepository.findOneBy({
      payment_id: id,
    });

    payment_method.payment_id = updatePaymentMethodDto.payment_id;
    payment_method.payment_name = updatePaymentMethodDto.payment_name;

    return this.PaymentMethodRepository.save(payment_method);
  }

  async remove(id: number): Promise<void> {
    await this.PaymentMethodRepository.delete(id);
  }
}
