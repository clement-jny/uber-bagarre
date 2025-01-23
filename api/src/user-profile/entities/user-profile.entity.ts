import { User } from 'src/user/entities/user.entity';
import { UserProfileStatus } from 'src/user-profile-status/entities/user-profile-status.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_profile')
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  lastname: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  firstname: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  nickname: string;

  @Column({
    name: 'profile_image',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  profileImage: string;

  @Column({ type: 'text' })
  bio: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'fk_user' })
  user: User;

  @OneToOne(() => UserProfileStatus)
  @JoinColumn({ name: 'fk_user_profile_status' })
  userProfileStatus: UserProfileStatus;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
