import { ConfigModule } from '@nestjs/config';

export function loadConfig() {
  return ConfigModule.forRoot({});
}
