import React, { useState } from 'react';
import { Box, Typography, Button, List, TextField, IconButton, Divider } from '@mui/material';
import Task from './Task';
import AddIcon from '@mui/icons-material/Add';

const TodoList = ({ list, setTodoLists }) => {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [...list.tasks, { text: newTask, completed: false }];
      const updatedList = { ...list, tasks: updatedTasks };
      updateTodoLists(list.name, updatedList);
      setNewTask('');
    }
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = list.tasks.map((task, i) => (i === index ? updatedTask : task));
    const updatedList = { ...list, tasks: updatedTasks };
    updateTodoLists(list.name, updatedList);
  };

  const deleteTask = (index) => {
    const updatedTasks = list.tasks.filter((_, i) => i !== index);
    const updatedList = { ...list, tasks: updatedTasks };
    updateTodoLists(list.name, updatedList);
  };

  const updateTodoLists = (name, updatedList) => {
    setTodoLists((prevLists) =>
      prevLists.map((l) => (l.name === name ? updatedList : l))
    );
  };

  return (
    <Box
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        boxShadow: 3,
        marginTop: 2
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        {list.name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          sx={{ flexGrow: 1, mr: 1 }}
        />
        <IconButton color="primary" onClick={addTask}>
          <AddIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {list.tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
