import React, { useState } from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = ({ task, index, updateTask, deleteTask }) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    updateTask(index, { ...task, completed: !isChecked });
  };

  return (
    <ListItem
      sx={{
        textDecoration: isChecked ? 'line-through' : 'none',
        color: isChecked ? 'gray' : 'inherit',
      }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox edge="start" checked={isChecked} onChange={handleCheck} />
      <ListItemText
        primary={<Typography variant="body1">{task.text}</Typography>}
      />
    </ListItem>
  );
};

export default Task;
