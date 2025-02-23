import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Hace } from '../../hace/entities/hace.entity';

@Entity()
export class ExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  numeroPreguntas: number;
  @OneToMany(() => Hace, (hace) => hace.examenTeorico)
  hace: Hace[];
}
