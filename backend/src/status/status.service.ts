import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './entities/status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private readonly StatusRepository: Repository<Status>,
  ) {}

  create(createStatusDto: CreateStatusDto): Promise<Status> {
    const status = new Status();

    status.status_id = createStatusDto.status_id;
    status.status_name = createStatusDto.status_name;
    return this.StatusRepository.save(status);
  }

  async findAll(): Promise<Status[]> {
    return await this.StatusRepository.find();
  }

  async findOne(id: number): Promise<Status> {
    return await this.StatusRepository.findOneBy({ status_id: id });
  }

  async update(id: number, updateStatusDto: UpdateStatusDto): Promise<Status> {
    const status = await this.StatusRepository.findOneBy({ status_id: id });

    status.status_id = updateStatusDto.status_id;
    status.status_name = updateStatusDto.status_name;

    return this.StatusRepository.save(status);
  }

  async remove(id: number): Promise<void> {
    await this.StatusRepository.delete(id);
  }
}
