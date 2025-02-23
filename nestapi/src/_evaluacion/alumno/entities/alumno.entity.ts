import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { AlumnoHaceExamenTeorico } from 'src/_evaluacion/alumnorhaceexamenteorico/entities/alumnorhaceexamenteorico.entity';
import { AlumnoRealizaPractica } from 'src/_evaluacion/alumnorealizapractica/entities/alumnorealizapractica.entity';


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

  @OneToMany(
    () => AlumnoHaceExamenTeorico,
    (alumnoshacenexamenteorico) => alumnoshacenexamenteorico.alumno,
  )
  alumnosHacenExamenTeorico: AlumnoHaceExamenTeorico[];

  @OneToMany(() => AlumnoRealizaPractica, (arp) => arp.alumno)
  alumnorealizapractica: AlumnoRealizaPractica[];
}