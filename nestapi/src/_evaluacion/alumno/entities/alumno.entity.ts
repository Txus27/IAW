import { AlumnoHaceExamenTeorico } from "src/_evaluacion/alumnohaceexamenteorico/entities/alumnohaceexamenteorico.entity";
import { AlumnoRealizaPractica } from "src/_evaluacion/alumnorealizapractica/entities/alumnorealizapractica.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nif: string;

  @Column()
  grupo: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @OneToMany(() => AlumnoRealizaPractica, (realiza) => realiza.alumno)
  practicas: AlumnoRealizaPractica[];

  @OneToMany(() => AlumnoHaceExamenTeorico, (hace) => hace.alumno)
  examenes: AlumnoHaceExamenTeorico[];
}