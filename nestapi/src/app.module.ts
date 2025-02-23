import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
//import { AlumnoModule } from './alumno/alumno.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { CineModule } from './cine/cine.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { AlumnoModule } from './_evaluacion/alumno/alumno.module';
import { ExamenteoricoModule } from './_evaluacion/examenteorico/examenteorico.module';
import { PracticaModule } from './_evaluacion/practica/practica.module';
import { ProfesorModule } from './_evaluacion/profesor/profesor.module';
import { DisenaModule } from './_evaluacion/disena/disena.module';
import { RealizaModule } from './_evaluacion/realiza/realiza.module';
import { HaceModule } from './_evaluacion/hace/hace.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,}), 
    TypeOrmModule.forRoot({
      name:'base1',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAME,
      autoLoadEntities:true,//Esta es la mejor opción para que coja sólo las que haya en módulo
      synchronize:true
    }),
    TypeOrmModule.forRoot({
      name:'base2',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAME2,
      autoLoadEntities:true,//Esta es la mejor opción para que coja sólo las que haya en módulo
      synchronize:true
    }),
    TypeOrmModule.forRoot({
      name:'cine',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAMETAREAS,
      autoLoadEntities:true,
      synchronize:true
    }),
    TypeOrmModule.forRoot({
      name:'pokemon',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAMETAREAS,
      autoLoadEntities:true,
      synchronize:true
    }),
    TypeOrmModule.forRoot({
      name:'apitarea',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBAPI,
      autoLoadEntities:true,
      synchronize:true
    }),
    UsuarioModule,
    //AlumnoModule
    BibliotecaModule,
    CineModule,
    PokemonModule,
    AlumnoModule,
    ExamenteoricoModule,
    PracticaModule,
    ProfesorModule,
    DisenaModule,
    RealizaModule,
    HaceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
