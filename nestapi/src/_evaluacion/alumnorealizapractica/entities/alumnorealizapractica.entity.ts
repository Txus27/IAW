import { Alumno } from "src/_evaluacion/alumno/entities/alumno.entity";
import { Practica } from "src/_evaluacion/practica/entities/practica.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AlumnoRealizaPractica {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Alumno, (alumno) => alumno.practicas)
  alumno: Alumno;

  @ManyToOne(() => Practica, (practica) => practica.alumnos)
  practica: Practica;

  @Column()
  fecha: Date;

  @Column()
  nota: number;
}