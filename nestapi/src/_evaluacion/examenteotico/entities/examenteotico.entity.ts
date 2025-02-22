import { AlumnoHaceExamenTeorico } from "src/_evaluacion/alumnohaceexamenteorico/entities/alumnohaceexamenteorico.entity";
import { Profesor } from "src/_evaluacion/profesor/entities/profesor.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  numero_preguntas: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Profesor, (profesor) => profesor.examenes)
  profesor: Profesor;

  @OneToMany(() => AlumnoHaceExamenTeorico, (hace) => hace.examen)
  alumnos: AlumnoHaceExamenTeorico[];
}