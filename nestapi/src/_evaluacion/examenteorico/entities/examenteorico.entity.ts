import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Profesor } from 'src/_evaluacion/profesor/entities/profesor.entity';
import { AlumnoHaceExamenTeorico } from 'src/_evaluacion/alumnorhaceexamenteorico/entities/alumnorhaceexamenteorico.entity';

@Entity()
export class ExamenTeorico {
  @PrimaryGeneratedColumn()
  examenteoricoId: number;

  @Column()
  titulo: string;

  @Column()
  numeroPreguntas: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Profesor, profesor => profesor.examenes)
  @JoinColumn({ name: 'profesor_id' })
  profesor: Profesor;

  @OneToMany(() => AlumnoHaceExamenTeorico, (alumnohaceexamenteorico) => alumnohaceexamenteorico.examenTeorico)
  alumnos: AlumnoHaceExamenTeorico[];
}