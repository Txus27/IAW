import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Realiza } from '../../realiza/entities/realiza.entity';
import { Disena } from '../../disena/entities/disena.entity';

@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  dificultad: string;
  @OneToMany(() => Realiza, (realiza) => realiza.practica)
  practicarealizaalumno: Realiza[];
  @OneToMany(() => Disena, (disena) => disena.practica)
  disena: Disena[];realiza: any;
}
