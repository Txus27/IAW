import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Profesor } from 'src/_evaluacion/profesor/entities/profesor.entity';
import { AlumnoRealizaPractica } from 'src/_evaluacion/alumnorealizapractica/entities/alumnorealizapractica.entity';

@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  dificultad: string;

  @ManyToMany(() => Profesor, profesor => profesor.practicas)
  @JoinTable({
    name: 'profesor_disena_practica',
    joinColumn: { name: 'practica_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'profesor_id', referencedColumnName: 'id' },
  })
  profesores: Profesor[];

  @OneToMany(() => AlumnoRealizaPractica, (arp) => arp.practica)
  alumnos: AlumnoRealizaPractica[];
}