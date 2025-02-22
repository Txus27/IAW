import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Practica } from 'src/_evaluacion/practica/entities/practica.entity';
import { ExamenTeorico } from 'src/_evaluacion/examenteorico/entities/examenteorico.entity';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nif: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @ManyToMany(() => Practica, practica => practica.profesores)
  practicas: Practica[];

  @OneToMany(() => ExamenTeorico, examen => examen.profesor)
  examenes: ExamenTeorico[];
}