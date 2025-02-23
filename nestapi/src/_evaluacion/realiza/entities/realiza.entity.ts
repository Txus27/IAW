import { Alumno } from 'src/_evaluacion/alumno/entities/alumno.entity';
import { Practica } from '../../practica/entities/practica.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Realiza {
  @PrimaryColumn()
  AlumnoId: number;
  @PrimaryColumn()
  PracticaId: number;
  @PrimaryColumn()
  fecha: Date;
  @Column()
  nota: number;
  @ManyToOne(() => Alumno, (alumno) => alumno.realiza)
  @JoinColumn({ name: 'AlumnoId' })
  alumno: Alumno;
  @ManyToOne(() => Practica, (practica) => practica.realiza)
  @JoinColumn({ name: 'PracticaId' })
  practica: Practica;
}