import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Disena } from '../../disena/entities/disena.entity';

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
  @OneToMany(() => Disena, (disena) => disena.profesor)
  disena: Disena[];
}
