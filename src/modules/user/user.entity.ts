
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  login_id!: string;

  @Column({ select: false })
  password!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  kashisha_id: number;

  @Column({ nullable: true })
  role!: string;

  @Column({ type: 'timestamp', nullable: true })
  last_login: Date;

  @Column({ type: 'timestamp', nullable: true })
  last_logout: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  deleted_at: Date;
}
