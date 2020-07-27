import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Container, QuestionContainer } from './styles';
import { IQuestion } from '../../interfaces/Questions';
import { Editor, EditorState, RichUtils, ContentState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
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
  isOpen: boolean;
}

const QuestionModal: React.FC<QuestionModalProps> = ({
  question,
  isOpen,
  close,
}) => {
  const styles = useStyles();

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
    //setOpen(false);
  };

  // const handleKeyCommand = (command) => {
  //   const newState = RichUtils.handleKeyCommand(editorState, command);
  //   if (newState) {
  //     setEditorState(newState);
  //     return 'handled';
  //   }
  //   return 'not-handled';
  // };

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
        </QuestionContainer>
      </Modal>
    </Container>
  );
};

export default QuestionModal;
