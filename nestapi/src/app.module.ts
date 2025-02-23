import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
//import { AlumnoModule } from './alumno/alumno.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { CineModule } from './cine/cine.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { AlumnorealizapracticaModule } from './_evaluacion/alumnorealizapractica/alumnorealizapractica.module';
import { AlumnoModule } from './_evaluacion/alumno/alumno.module';
import { AlumnorhaceexamenteoricoModule } from './_evaluacion/alumnorhaceexamenteorico/alumnorhaceexamenteorico.module';
import { ExamenteoricoModule } from './_evaluacion/examenteorico/examenteorico.module';
import { PracticaModule } from './_evaluacion/practica/practica.module';
import { ProfesorModule } from './_evaluacion/profesor/profesor.module';
import { ProfesordisenapracticaModule } from './_evaluacion/profesordisenapractica/profesordisenapractica.module';

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
      name:'evaluacion',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAMETAREAS,
      autoLoadEntities:true,
      synchronize:true
    }),
    UsuarioModule,
    //AlumnoModule
    BibliotecaModule,
    CineModule,
    PokemonModule,
    AlumnorealizapracticaModule,
    AlumnoModule,
    AlumnorhaceexamenteoricoModule,
    ExamenteoricoModule,
    PracticaModule,
    ProfesorModule,
    ProfesordisenapracticaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
