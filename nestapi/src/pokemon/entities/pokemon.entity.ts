import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
        id: number;
      @Column({ type: 'varchar', length: 50 })
        nombre: string;
      @Column()
        tipo: string;
      @Column()
        hp: number;
      @Column()
        habilidad: string;
}