import { Alumno } from '../../alumno/entities/alumno.entity';
import { ExamenTeorico } from '../../examenteorico/entities/examenteorico.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Hace {
  @PrimaryColumn()
  AlumnoId: number;
  @PrimaryColumn()
  ExamenTeoricoId: number;
  @Column()
  nota: number;
  @ManyToOne(() => Alumno, (alumno) => alumno.hace)
  @JoinColumn({ name: 'AlumnoId' })
  alumno: Alumno;
  @ManyToOne(() => ExamenTeorico, (examen) => examen.hace)
  @JoinColumn({ name: 'ExamenTeoricoId' })
  examenTeorico: ExamenTeorico;
}