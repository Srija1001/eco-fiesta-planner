
import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, Plus, Trash2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  eventId: string;
}

const TodoList: React.FC<TodoListProps> = ({ eventId }) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const { toast } = useToast();

  // In a real app, you would fetch todos from a database
  useEffect(() => {
    // For demo purposes, we'll set some default todos based on the event ID
    const defaultTodos = [
      { id: '1', text: 'Send invitations', completed: false },
      { id: '2', text: 'Confirm venue booking', completed: true },
      { id: '3', text: 'Order eco-friendly decorations', completed: false },
      { id: '4', text: 'Arrange sustainable catering', completed: false },
      { id: '5', text: 'Set up recycling stations', completed: false }
    ];
    
    setTodos(defaultTodos);
  }, [eventId]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    const newItem: TodoItem = {
      id: Date.now().toString(),
      text: newTodo,
      completed: false
    };
    
    setTodos([...todos, newItem]);
    setNewTodo('');
    
    toast({
      title: "Task added",
      description: "Your new task has been added to the list",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    
    toast({
      title: "Task removed",
      description: "The task has been removed from your list",
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  return (
    <div className="bg-white dark:bg-eco-forest/30 rounded-xl shadow-sm border border-green-100 dark:border-green-900 h-full">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-eco-forest dark:text-white mb-3 flex items-center">
          <CheckSquare className="mr-2 text-eco-leaf" size={20} />
          Event To-Do List
        </h2>
        
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-300">{completedCount} of {todos.length} tasks completed</span>
            <span className="font-medium text-eco-leaf">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-eco-leaf h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Add new todo */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            className="eco-input flex-grow"
          />
          <button 
            onClick={addTodo}
            className="ml-2 bg-eco-leaf text-white p-2 rounded-lg hover:bg-eco-moss transition-colors"
            aria-label="Add task"
          >
            <Plus size={20} />
          </button>
        </div>
        
        {/* Todo list */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {todos.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">
              No tasks yet. Add some tasks to get started!
            </p>
          ) : (
            todos.map(todo => (
              <div 
                key={todo.id} 
                className={`flex items-start p-3 rounded-lg ${
                  todo.completed 
                    ? 'bg-eco-leaf/10 dark:bg-eco-leaf/20' 
                    : 'bg-gray-100 dark:bg-gray-800/30'
                }`}
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="mt-0.5 mr-3 text-eco-leaf flex-shrink-0"
                  aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
                >
                  {todo.completed ? (
                    <CheckSquare size={20} />
                  ) : (
                    <Square size={20} />
                  )}
                </button>
                <p className={`flex-grow ${
                  todo.completed ? 'text-gray-500 dark:text-gray-400 line-through' : 'text-gray-800 dark:text-gray-200'
                }`}>
                  {todo.text}
                </p>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="ml-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors flex-shrink-0"
                  aria-label="Delete task"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
