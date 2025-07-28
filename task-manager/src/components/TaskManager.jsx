import { useEffect, useState } from 'react';
import { fetchTasks } from '../api/fetchTasks';
import { formatDate } from '../utils/formatDate';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    async function loadTasks() {
      const data = await fetchTasks();
      setTasks(data);
    }
    loadTasks();
  }, []);

  const addTask = () => {
    if (task.trim()) {
      const newTask = {
        id: tasks.length + 1, // Generate a unique ID
        title: task,
        completed: false,
        createdAt: new Date().toISOString(), // Add the current date
      };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border rounded px-4 py-2 w-full"
          placeholder="Enter a task"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Task
        </button>
      </div>
      <ul className="list-disc pl-5">
        {tasks.map((t) => (
          <li key={t.id} className="text-gray-700 dark:text-gray-300">
            {t.title} - {formatDate(t.createdAt)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;