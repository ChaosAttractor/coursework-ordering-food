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
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { Role } from './role/entities/role.entity';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles/role.guards';
import { StatusModule } from './status/status.module';
import { Status } from './status/entities/status.entity';
import { OrderListModule } from './order_list/order_list.module';
import { OrderList } from './order_list/entities/order_list.entity';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { PaymentMethod } from './payment_method/entities/payment_method.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'menu',
      entities: [FoodType, Menu, User, Role, Status, OrderList, PaymentMethod],
      synchronize: true,
    }),
    FoodTypeModule,
    MenuModule,
    PhotosModule,
    MulterModule.register({
      dest: './uploads',
    }),
    UserModule,
    AuthModule,
    StatusModule,
    OrderListModule,
    PaymentMethodModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
