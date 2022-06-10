import React from 'react'
import { Task } from '../model'
import './TaskList.scss'

interface Props {
	tasks: Task[]
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
	return (
		<div className='tasks'>
			{tasks.map((task) => (
				<li key={task.id}>{task.taskInput}</li>
			))}
		</div>
	)
}

export default TaskList
