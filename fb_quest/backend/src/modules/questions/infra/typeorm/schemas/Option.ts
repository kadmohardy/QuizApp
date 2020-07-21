import { ObjectID, Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('options')
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
