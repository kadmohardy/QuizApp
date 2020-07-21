import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

import Option from './Option';

@Entity('questions')
class Question {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  materia: string;

  @Column()
  vestibular: string;

  @Column()
  resolucao: string;

  @Column()
  enunciado: string;

  @Column()
  numeroQuestao: number;

  @Column()
  ano: number;

  @Column({ default: false })
  disponivel: boolean;

  @Column(type => Option)
  alternativas: Option[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Question;
