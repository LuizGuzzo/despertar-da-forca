import {Connection} from 'typeorm';
import { Cliente } from 'src/despertar/model/cliente.entity';


export const ClienteProvider = [
    {
        provide: 'cliente_database',
        useFactory: (connection: Connection) => connection.getRepository(Cliente),
        inject: ['despertar_backend']
    }
]