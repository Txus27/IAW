import { Practica } from "src/_evaluacion/practica/entities/practica.entity";
import { Profesor } from "src/_evaluacion/profesor/entities/profesor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProfesorDisenaPractica {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profesor, (profesor) => profesor.practicasDisenadas)
  profesor: Profesor;

  @ManyToOne(() => Practica, (practica) => practica.profesores)
  practica: Practica;

  @Column()
  fecha: Date;
}