import React from 'react'
import { Task } from '../../model'
import TaskCard from '../TaskCard/TaskCard'
import './TaskList.scss'

interface Props {
	tasks: Task[]
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
	return (
		<div className='tasklist-container tasklist'>
			<div className='tasklist-active'>
				<span className='heading'>Acive Tasks</span>
				{tasks.map((task) => (
					<TaskCard
						key={task.id}
						task={task}
						tasks={tasks}
						setTasks={setTasks}
					/>
				))}
			</div>
			<div className='tasklist-complete'>
				<span className='heading'>Completed Tasks</span>
			</div>
		</div>
	)
}

export default TaskList
