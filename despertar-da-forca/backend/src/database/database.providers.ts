
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'despertar_backend',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'tuffi.db.elephantsql.com',
      port: 5432,
      username: 'xeifvaii',
      password: 't_kZtgPzTfzHlImPwgdWmIdFcOWt2pRe',
      database: 'xeifvaii',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];