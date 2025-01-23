import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity('user_profile_tag')
export class UserProfileTag {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'varchar', length: 50 })
  label: string;

  @OneToOne(() => UserProfile)
  @JoinColumn({ name: 'fk_user_profile' })
  userProfile: UserProfile;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
