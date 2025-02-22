import { ExamenTeorico } from "src/_evaluacion/examenteotico/entities/examenteotico.entity";
import { ProfesorDisenaPractica } from "src/_evaluacion/profesordisenapractica/entities/profesordisenapractica.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(() => ExamenTeorico, (examen) => examen.profesor)
  examenes: ExamenTeorico[];

  @OneToMany(() => ProfesorDisenaPractica, (disena) => disena.profesor)
  practicasDisenadas: ProfesorDisenaPractica[];
}