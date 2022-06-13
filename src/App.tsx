import React, { useState } from 'react'
import './App.scss'
import InputField from './components/InputField/InputField'
import TaskList from './components/TaskList/TaskList'
import { Task } from './model'

const App: React.FC = () => {
	const [task, setTask] = useState<string>('')
	const [tasks, setTasks] = useState<Task[]>([])

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault()
		if (task) {
			if (tasks.length === 0) {
				setTasks([...tasks, { id: 0, text: task, isDone: false }])
				setTask('')
			} else {
				let len = tasks.length
				let nextID = tasks[len - 1].id + 1
				setTasks([...tasks, { id: nextID, text: task, isDone: false }])
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
