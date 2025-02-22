import { AlumnoRealizaPractica } from 'src/_evaluacion/alumnorealizapractica/entities/alumnorealizapractica.entity';
import { ProfesorDisenaPractica } from 'src/_evaluacion/profesordisenapractica/entities/profesordisenapractica.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  dificultad: string;

  @OneToMany(() => AlumnoRealizaPractica, (realiza) => realiza.practica)
  alumnos: AlumnoRealizaPractica[];

  @OneToMany(() => ProfesorDisenaPractica, (disena) => disena.practica)
  profesores: ProfesorDisenaPractica[];
}