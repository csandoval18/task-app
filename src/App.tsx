import React, { useState } from 'react'
import './App.scss'
import InputField from './Components/InputField'
import TaskList from './Components/TaskList'
import { Task } from './model'

const App: React.FC = () => {
	const [task, setTask] = useState<string>('')
	const [tasks, setTasks] = useState<Task[]>([])

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault()
		if (task) {
			if (tasks.length === 0) {
				setTasks([...tasks, { id: 0, taskInput: task, isDone: false }])
			} else {
				setTasks([
					...tasks,
					{ id: tasks.length, taskInput: task, isDone: false },
				])
				setTask('')
			}
			console.log('task: ' + task)
		}
	}
	console.log(tasks)

	return (
		<div className='App'>
			<span className='App-heading'>Taskify</span>
			<InputField task={task} setTask={setTask} handleAdd={handleAdd} />
			<TaskList tasks={tasks} setTasks={setTasks} />
		</div>
	)
}
export default App
