import { Transactions } from '@/modules/transactions/entities/transaction.entity';
import { Transfers } from '@/modules/transfers/entities/transfers.entity';
import { Withdrawals } from '@/modules/withdrawals/entities/withdrawals.entity';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  username: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  api_secret: string;

  @Column({ type: 'int', default: 0 })
  balance: number;

  @OneToMany(() => Withdrawals, (withdrawal) => withdrawal.account)
  @ApiHideProperty()
  withdrawals: Withdrawals[];

  @OneToMany(() => Transfers, (transfer) => transfer.fromAccount)
  @ApiHideProperty()
  sentTransfers: Transfers[];

  @OneToMany(() => Transfers, (transfer) => transfer.toAccount)
  @ApiHideProperty()
  receivedTransfers: Transfers[];

  @OneToMany(() => Transactions, (transaction) => transaction.account)
  @ApiHideProperty()
  transactions: Transactions[];
}
