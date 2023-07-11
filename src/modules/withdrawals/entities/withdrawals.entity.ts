import { Account } from '@/modules/accounts/entities/account.entity';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Withdrawals {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  amount: number;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @ManyToOne(() => Account, (account) => account.withdrawals, { cascade: true })
  @JoinColumn({ name: 'account_id' })
  @Exclude()
  account: Account;

  @Column({ name: 'account_id' })
  account_id: number;
}
