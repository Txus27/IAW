import { Profesor } from '../../profesor/entities/profesor.entity';
import { Practica } from '../../practica/entities/practica.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Disena {
  @PrimaryColumn()
  ProfesorId: number;
  @PrimaryColumn()
  PracticaId: number;
  @PrimaryColumn()
  fecha: Date;
  @ManyToOne(() => Profesor, (profesor) => profesor.disena)
  @JoinColumn({ name: 'ProfesorId' })
  profesor: Profesor;
  @ManyToOne(() => Practica, (practica) => practica.disena)
  @JoinColumn({ name: 'PracticaId' })
  practica: Practica;
}
