import { Alumno } from "src/_evaluacion/alumno/entities/alumno.entity";
import { ExamenTeorico } from "src/_evaluacion/examenteotico/entities/examenteotico.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AlumnoHaceExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Alumno, (alumno) => alumno.examenes)
  alumno: Alumno;

  @ManyToOne(() => ExamenTeorico, (examen) => examen.alumnos)
  examen: ExamenTeorico;

  @Column()
  nota: number;
}