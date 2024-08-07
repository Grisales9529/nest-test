import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://grisales95:Wyq7MckHuEsnwdbd@cluster0.qmfg7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
