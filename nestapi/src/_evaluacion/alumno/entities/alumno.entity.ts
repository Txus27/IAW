import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { ExamenTeorico } from 'src/_evaluacion/examenteorico/entities/examenteorico.entity';
import { Practica } from 'src/_evaluacion/practica/entities/practica.entity';


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

  @ManyToMany(() => Practica, practica => practica.alumnos)
  practicas: Practica[];

  @ManyToMany(() => ExamenTeorico, examen => examen.alumnos)
  @JoinTable({
    name: 'alumno_hace_examen_teorico',
    joinColumn: { name: 'alumno_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'examen_teorico_id', referencedColumnName: 'id' },
  })
  examenes: ExamenTeorico[];
}