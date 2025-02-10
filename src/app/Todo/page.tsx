'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import React, { useState, useRef } from 'react';
import './style.css';
import { Checkbox } from '@/components/ui/checkbox';

const Todo = () => {
  const [todolist, setTodolist] = useState([]);
  const [filterType, setFilterType] = useState('all'); 
  const todoTextRef = useRef(null);

  const addTodo = (event) => {
    event.preventDefault();
    const todoText = todoTextRef.current;
    const todoTextValue = todoText.value;
    setTodolist((val) => [
      ...val,
      { id: new Date().valueOf(), todoText: todoTextValue, isDone: false },
    ]);
    todoText.value = '';
  };

  const toggleTodoStatus = (todoItem) => {
    setTodolist((val) =>
      val.map((item) =>
        item.id === todoItem.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const deleteTodo = (todoItem) => {
    const index = todolist.findIndex((item) => item.id === todoItem.id);
    setTodolist((val) => [...val.slice(0, index), ...val.slice(index + 1)]);
  };

  const updateTodo = (todoItem) => {
    const index = todolist.findIndex((item) => item.id === todoItem.id);
    setTodolist((val) => [
      ...val.slice(0, index),
      { ...todoItem, isDone: !todoItem.isDone },
      ...val.slice(index + 1),
    ]);
  };

  return (
    <div className="flex flex-col mt-2 h-screen max-h-screen">
      <h1 className="text-5xl font-bold text-center my-5">Todo App</h1>
      <form className="flex justify-center container mx-auto" onSubmit={addTodo}>
        <div className="space-y-2">
          <Label htmlFor="Todo-text" className="sr-only">
            Add a Todo
          </Label>
          <div className="flex rounded-lg gap-5 shadow-sm shadow-black/5">
            <Input
              id="Todo-text"
              ref={todoTextRef}
              placeholder="Add Todo Here...."
              className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
              required
            />
            <Button
              className="inline-flex items-center rounded-e-lg border border-input bg-background px-3 text-sm bg-green-300 font-medium text-foreground outline-offset-2 transition-colors hover:bg-accent hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Add Todo
            </Button>
          </div>
        </div>
      </form>
      <div className="flex w-full flex-col p-4 gap-6 mt-2">
        {todolist.map((todoItem) => {
          if (
            filterType === 'all' ||
            (filterType === 'pending' && !todoItem.isDone) ||
            (filterType === 'completed' && todoItem.isDone)
          ) {
            return (
              <div key={todoItem.id} className="flex items-center gap-4">
                <div>
                  <Label htmlFor={`isdone-checkbox-${todoItem.id}`} className="sr-only">
                    Todo Text
                  </Label>
                  <Checkbox
                    id={`isdone-checkbox-${todoItem.id}`}
                    checked={todoItem.isDone}
                    onCheckedChange={() => toggleTodoStatus(todoItem)}
                  />
                </div>
                <p className="flex-1">{todoItem.todoText}</p>
                <Button
                  variant="secondary"
                  className="bg-red-500"
                  onClick={() => deleteTodo(todoItem)}
                >
                  Delete
                </Button>
              </div>
            );
          }
          return null;
        })}
        <div className="flex w-full mt-auto fixed bottom-0 left-0">
          <Button
            variant={filterType === 'all' ? 'default' : 'secondary'}
            className={`flex flex-1 bg-green-300 rounded-none ${
              filterType === 'all' ? 'bg-green-500' : ''
            }`}
            onClick={() => setFilterType('all')}
          >
            All
          </Button>
          <Button
            variant={filterType === 'pending' ? 'default' : 'secondary'}
            className={`flex flex-1 bg-green-300 rounded-none ${
              filterType === 'pending' ? 'bg-green-500' : ''
            }`}
            onClick={() => setFilterType('pending')}
          >
            Pending
          </Button>
          <Button
            variant={filterType === 'completed' ? 'default' : 'secondary'}
            className={`flex flex-1 bg-green-300 rounded-none ${
              filterType === 'completed' ? 'bg-green-500' : ''
            }`}
            onClick={() => setFilterType('completed')}
          >
            Completed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
