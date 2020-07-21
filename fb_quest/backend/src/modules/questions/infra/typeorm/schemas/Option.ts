import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('questions')
class Question {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  letra: string;

  @Column()
  correta: string;

  @Column()
  texto: string;
}

export default Question;
