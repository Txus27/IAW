import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cine {
    @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
        id: number;
      @Column({ type: 'varchar', length: 150 })
        titulo: string;
      @Column()
        director: string;
      @Column()
        año: number;
      @Column()
        duracion: number;
}
