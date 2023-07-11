import { Account } from '@/modules/accounts/entities/account.entity';
import { ApiHideProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PaymentMethod } from '../enums/PaymentMethod.enum';
import { PaymentStatus } from '../enums/PaymentStatus.enum';

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({
    name: 'payment_method',
    length: 50,
    enum: PaymentMethod,
  })
  payment_method: PaymentMethod;

  @Column({ enum: PaymentStatus, default: PaymentStatus.PENDING })
  status: PaymentStatus;

  @Column({ name: 'bar_code', nullable: true })
  bar_code?: string;

  @Column({ name: 'card_number', type: 'varchar', length: 16, nullable: true })
  card_number: string;

  @Column({ name: 'card_expiration_date', length: 5, nullable: true })
  card_expiration_date: string;

  @Column({ name: 'card_cvv', type: 'varchar', length: 3, nullable: true })
  card_cvv: string;

  @Column({ name: 'card_name', length: 100, nullable: true })
  card_name: string;

  @Column({ name: 'client_name', length: 100, nullable: true })
  client_name: string;

  @Column({ name: 'client_email', length: 100, nullable: true })
  client_email: string;

  @Column({ name: 'paid_at', nullable: true })
  paid_at?: Date;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @ApiHideProperty()
  @ManyToOne(() => Account, (account) => account.transactions, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @RelationId((transaction: Transactions) => transaction.account)
  account_id: number;
}
