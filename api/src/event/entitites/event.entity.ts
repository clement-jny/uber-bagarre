import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('event')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @CreateDateColumn({ name: 'start_date' })
  startDate: Date;

  @ManyToOne(
    () => UserProfile,
    (userProfile: UserProfile) => userProfile.events,
  )
  userProfile: UserProfile;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
