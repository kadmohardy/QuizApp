import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Checkbox from '@material-ui/core/Checkbox';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  Container,
  QuestionContainer,
  QuestionTopBarContainer,
  QuestionBottomBarContainer,
} from './styles';
import { IQuestion } from '../../interfaces/Questions';
import { Editor, EditorState, RichUtils, ContentState } from 'draft-js';
import api from '../../services/api';
import 'draft-js/dist/Draft.css';
import './editor.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

interface QuestionModalProps {
  question: IQuestion;
  close: Function;
  update: Function;
  isOpen: boolean;
}

const QuestionModal: React.FC<QuestionModalProps> = ({
  question,
  isOpen,
  close,
  update,
}) => {
  const styles = useStyles();
  const [checked, setChecked] = useState(question.disponivel);

  const [open, setOpen] = useState(false);
  const [editorDescriptionState, setEditorDescriptionState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(question.enunciado),
    ),
  );

  const [editorAnswerState, setEditorAnswerState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(question.resolucao),
    ),
  );

  const handleClose = () => {
    close();
  };

  const handleSave = async () => {
    await api.patch(`questions/${question.id}`, {
      enunciado: editorDescriptionState
        .getCurrentContent()
        .getPlainText('\u0001'),
      resolucao: editorAnswerState.getCurrentContent().getPlainText('\u0001'),
      disponivel: checked,
    });

    update();
  };

  return (
    <Container>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={styles.modal}
      >
        <QuestionContainer>
          <QuestionTopBarContainer>
            <h3>Editar questão</h3>
            <button onClick={handleClose}>
              <AiOutlineCloseCircle size={24} />
            </button>
          </QuestionTopBarContainer>
          <h4>Questão</h4>
          <Editor
            editorState={editorDescriptionState}
            onChange={setEditorDescriptionState}
          />
          <h4>Resolução</h4>
          <Editor
            editorState={editorAnswerState}
            onChange={setEditorAnswerState}
          />
          {/* <h4>{question.enunciado}</h4> */}
          <QuestionBottomBarContainer>
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>disponível</span>
            <button onClick={handleSave}>Salvar</button>
          </QuestionBottomBarContainer>
        </QuestionContainer>
      </Modal>
    </Container>
  );
};

export default QuestionModal;
