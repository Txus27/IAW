import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Alumno } from 'src/_evaluacion/alumno/entities/alumno.entity';
import { ExamenTeorico } from 'src/_evaluacion/examenteorico/entities/examenteorico.entity';

@Entity()
export class AlumnoHaceExamenTeorico {
  @PrimaryColumn()
  alumnoId: number;

  @PrimaryColumn()
  examenTeoricoId: number; 

  @Column()
  nota: number;

  @ManyToOne(() => Alumno, alumno => alumno.alumnosHacenExamenTeorico)
  @JoinColumn({ name: 'alumnoId' })
  alumno: Alumno; 

  @ManyToOne(() => ExamenTeorico, examen => examen.alumnos)
  @JoinColumn({ name: 'examenTeoricoId' })
  examenTeorico: ExamenTeorico; 
}