import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { Profesor } from 'src/_evaluacion/profesor/entities/profesor.entity';
import { Alumno } from 'src/_evaluacion/alumno/entities/alumno.entity';

@Entity()
export class ExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  numeroPreguntas: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Profesor, profesor => profesor.examenes)
  @JoinColumn({ name: 'profesor_id' })
  profesor: Profesor;

  @ManyToMany(() => Alumno, alumno => alumno.examenes)
  alumnos: Alumno[];
}