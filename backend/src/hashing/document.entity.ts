import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column({ unique: true })
  hash: string;

  @CreateDateColumn()
  createdAt: Date;
}
