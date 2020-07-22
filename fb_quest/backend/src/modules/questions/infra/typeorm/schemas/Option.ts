import { ObjectID, Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('options')
class Option {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  letra: string;

  @Column()
  correta: boolean;

  @Column()
  texto: string;
}

export default Option;
