import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Alumno } from 'src/_evaluacion/alumno/entities/alumno.entity';
import { Profesor } from 'src/_evaluacion/profesor/entities/profesor.entity';


@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  dificultad: string;

  @ManyToMany(() => Profesor, profesor => profesor.practicas)
  @JoinTable({
    name: 'profesor_disena_practica',
    joinColumn: { name: 'practica_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'profesor_id', referencedColumnName: 'id' },
  })
  profesores: Profesor[];

  @ManyToMany(() => Alumno, alumno => alumno.practicas)
  @JoinTable({
    name: 'alumno_realiza_practica',
    joinColumn: { name: 'practica_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'alumno_id', referencedColumnName: 'id' },
  })
  alumnos: Alumno[];
}