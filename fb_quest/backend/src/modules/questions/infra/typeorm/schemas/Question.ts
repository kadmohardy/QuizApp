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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Question;
