import { Account } from '@/modules/accounts/entities/account.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transfers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  amount: number;

  @ManyToOne(() => Account, (account) => account.sentTransfers, {
    cascade: true,
  })
  @JoinColumn({ name: 'from_account_id' })
  fromAccount: Account;

  @ManyToOne(() => Account, (account) => account.receivedTransfers, {
    cascade: true,
  })
  @JoinColumn({ name: 'to_account_id' })
  toAccount: Account;

  @Column({ name: 'from_account_id', type: 'int' })
  from_account_id: number;

  @Column({ name: 'to_account_id', type: 'int' })
  to_account_id: number;

  @CreateDateColumn()
  created_at: Date;
}
