import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Practica } from 'src/_evaluacion/practica/entities/practica.entity';
import { Profesor } from 'src/_evaluacion/profesor/entities/profesor.entity';


@Entity()
export class ProfesorDisenaPractica {
  @PrimaryColumn()
  profesorId: number;

  @PrimaryColumn()
  practicaId: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Profesor, profesor => profesor.practicas)
  @JoinColumn({ name: 'profesorId' })
  profesor: Profesor;

  @ManyToOne(() => Practica, practica => practica.profesores)
  @JoinColumn({ name: 'practicaId' })
  practica: Practica;
}