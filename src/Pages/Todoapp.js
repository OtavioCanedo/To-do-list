import React, { useState } from 'react';
import { RiSendPlaneFill as Send } from 'react-icons/ri'
import { MdOutlineRemoveCircle as Remove } from 'react-icons/md'

import './Todoapp.css'

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { text: 'Aprender React' },
    { text: 'Criar aplicativo to-do' },
    { text: 'Celebrar' }
  ]);

  const [tasksInProgress, setTasksInProgress] = useState([]);

  const [tasksFinished, setTasksFinished] = useState([])

  const addTask = (text) => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

  const startTask = (text, index) => {
    const newTasks = [...tasksInProgress, { text }];
    setTasksInProgress(newTasks);
  }

  const finishTask = (text) => {
    const newTasks = [...tasksFinished, { text }];
    setTasksFinished(newTasks);
  }

  return (
    <div>
      <div className="todo-app">
        <h1>Minha lista de tarefas</h1>
        <form className="todo-form" onSubmit={(e) => {
          e.preventDefault();
          addTask(e.target.elements.todo.value);
          e.target.elements.todo.value = '';
        }}>
          <input type="text" name="todo" />
          <button type="submit">Adicionar tarefa</button>
        </form>
      </div>
      <div className="container">
        <div className="col-1">
          <ul className="todo-list">
            <h2>Tarefas adicionadas</h2>
            {tasks.map((todo, index) => (
              <li
                key={index}
                className={todo.completed ? 'completed' : ''}
              >
                {todo.text}
                <button 
                  className='button1'
                  onClick={(e) => {
                    e.preventDefault();
                    startTask(todo.text);
                    // e.target.value = '';
                  }}
                >
                  <Send />
                </button>
                <button className='button2'><Remove /></button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-2">
          <ul className="todo-list">
            <h2>Tarefas em andamento</h2>
            {tasksInProgress.map((task, index) => (
              <li
                key={index}
              >
                {task.text}
                <button 
                  className='button1'
                  onClick={(e) => {
                    e.preventDefault();
                    finishTask(task.text);
                    // e.target.value = '';
                  }}
                >
                  <Send />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-3">
          <ul className="todo-list">
            <h2>Tarefas concluídas</h2>
              {tasksFinished.map((task, index) => (
                <li
                  key={index}
                >
                  {task.text}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
