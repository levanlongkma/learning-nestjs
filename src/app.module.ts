import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './modules/product/product.controller';
import { ProductService } from './modules/product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'msa_danho',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsersModule,
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
