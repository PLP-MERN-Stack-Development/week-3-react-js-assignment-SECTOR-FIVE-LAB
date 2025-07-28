import tasks from '../data/tasks.json';

export async function fetchTasks() {
  try {
    // Simulate an API call delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(tasks), 500);
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}