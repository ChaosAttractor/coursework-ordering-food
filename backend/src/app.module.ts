import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodTypeModule } from './food_type/food_type.module';
import { FoodType } from './food_type/entities/food_type.entity';
import { MenuModule } from './menu/menu.module';
import { Menu } from './menu/entities/menu.entity';
import { PhotosModule } from './photos/photos.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'menu',
      entities: [FoodType, Menu],
      synchronize: true,
    }),
    FoodTypeModule,
    MenuModule,
    PhotosModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}