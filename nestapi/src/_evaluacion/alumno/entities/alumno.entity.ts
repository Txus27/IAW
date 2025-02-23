import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Realiza } from '../../realiza/entities/realiza.entity';
import { Hace } from '../../hace/entities/hace.entity';

@Entity()
export class Alumno {
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
  @Column()
  grupo: Number;
 // Relaciones
  @OneToMany(() => Realiza, (Realiza) => Realiza.alumno)
  realiza: Realiza[];
  @OneToMany(() => Hace, (hace) => hace.alumno)
  hace: Hace[];
}
