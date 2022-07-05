import { Injectable } from '@nestjs/common';

type GetHelloResponse = {
  message: string;
};

@Injectable()
export class AppService {
  getHello(): GetHelloResponse {
    return { message: 'Hello World!' };
  }
}
