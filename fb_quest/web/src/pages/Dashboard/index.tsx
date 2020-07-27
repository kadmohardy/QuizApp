import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { FaEdit } from 'react-icons/fa';

import { Container, Header, EditButton } from './styles';
import { AiOutlineDashboard } from 'react-icons/ai';

import api from '../../services/api';
import { IQuestion } from '../../interfaces/Questions';
import QuestionModal from '../../components/QuestionModal';

interface QuestionColumn {
  id: string;
  label: string;
  minWidth: number;
  align: string;
}

const columns: QuestionColumn[] = [
  { id: 'numeroQuestao', label: 'N Questão', minWidth: 170, align: 'center' },
  { id: 'materia', label: 'Matéria', minWidth: 100, align: 'center' },
  {
    id: 'vestibular',
    label: 'Vestibular',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'ano',
    label: 'Ano',
    minWidth: 170,
    align: 'right',
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  container: {
    maxHeight: 840,
  },
});

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const [loadEditModal, setLoadEditModal] = useState(false);
  const [nextPageButton, setNextPageButton] = useState(true);
  const [backPageButton, setBackPageButton] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | undefined>(
    undefined,
  );
  const [questionsList, setQuestionsList] = useState<IQuestion[]>([]);

  useEffect(() => {
    async function loadQuestionsList() {
      const response = await api.get('questions/list/1');
      setQuestionsList(response.data);
    }
    loadQuestionsList();
  }, []);

  const loadQuestionEditModal = (question: IQuestion) => {
    setCurrentQuestion(question);
    console.log(currentQuestion);
    setLoadEditModal(true);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <Header>
        <AiOutlineDashboard size={18} />
        <span>Dashboard</span>
      </Header>

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    //align={column.align}
                    //style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {questionsList != null &&
                questionsList.map((question) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={question.numeroQuestao}
                    >
                      {columns.map((column) => {
                        return (
                          <TableCell key={column.id}>
                            {question[column.id]}
                          </TableCell>
                        );
                      })}
                      <TableCell key={question.id}>
                        <EditButton
                          onClick={() => loadQuestionEditModal(question)}
                        >
                          <FaEdit size={24} color="#4267B2" />
                        </EditButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={questionsList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="questões por página"
          nextIconButtonProps={{
            disabled: nextPageButton,
          }}
          backIconButtonProps={{
            disabled: backPageButton,
          }}
        />
      </Paper>
      {currentQuestion !== undefined && loadEditModal && (
        <QuestionModal
          question={currentQuestion}
          isOpen={loadEditModal}
          close={() => setLoadEditModal(false)}
        />
      )}
    </Container>
  );
};

export default Dashboard;
