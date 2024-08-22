import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import TodoList from './TodoList';

const Tasks = () => {
  const [todoLists, setTodoLists] = useState([]);

  const addTodoList = () => {
    const name = prompt("Name of your new To-Do List:");
    const priority = parseInt(prompt("Priority (1 = highest, 10 = lowest):"), 10);
    if (name && !isNaN(priority)) {
      setTodoLists([...todoLists, { name, priority, tasks: [] }]);
    }
  };

  const sortedLists = todoLists.sort((a, b) => a.priority - b.priority);

  return (
    <Container sx={{marginTop: 10}}>

      <Button variant="contained" color="secondary" onClick={addTodoList}>
        Add To-Do List
      </Button>
      {sortedLists.map((list, index) => (
        <TodoList key={index} list={list} setTodoLists={setTodoLists} />
      ))}
    </Container>
  );
};

export default Tasks;
