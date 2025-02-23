import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Alumno } from 'src/_evaluacion/alumno/entities/alumno.entity';
import { Practica } from 'src/_evaluacion/practica/entities/practica.entity';

@Entity()
export class AlumnoRealizaPractica {
  @PrimaryColumn()
  alumnoId: number;

  @PrimaryColumn()
  practicaId: number;

  @Column()
  fecha: Date;

  @Column()
  nota: number;

  @ManyToOne(() => Alumno, alumno => alumno.alumnorealizapractica)
  @JoinColumn({ name: 'alumnoId' })
  alumno: Alumno;

  @ManyToOne(() => Practica, practica => practica.alumnos)
  @JoinColumn({ name: 'practicaId' })
  practica: Practica;
}