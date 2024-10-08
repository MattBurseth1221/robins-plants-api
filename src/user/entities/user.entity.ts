import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class auth_user {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ type: 'varchar', length: 15 })
  username: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'varchar' })
  password_hash: string;
}