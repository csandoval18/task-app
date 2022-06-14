import React from 'react'
import { Task } from '../../model'
import TaskCard from '../TaskCard/TaskCard'
import './TaskList.scss'

interface Props {
	tasks: Task[]
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
	completedTasks: Task[]
	setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({
	tasks,
	setTasks,
	completedTasks,
	setCompletedTasks,
}) => {
	return (
		<div className='tasklist-container tasklist'>
			<div className='tasklist-active'>
				<span className='heading'>Active Tasks</span>
				{tasks.map((task) => (
					<TaskCard
						key={task.id}
						task={task}
						tasks={tasks}
						setTasks={setTasks}
						completedTasks={completedTasks}
						setCompletedTasks={setCompletedTasks}
					/>
				))}
			</div>
			<div className='tasklist-complete'>
				<span className='heading'>Completed Tasks</span>
				{completedTasks.map((task) => (
					<TaskCard
						key={task.id}
						task={task}
						tasks={tasks}
						setTasks={setTasks}
						completedTasks={completedTasks}
						setCompletedTasks={setCompletedTasks}
					/>
				))}
			</div>
		</div>
	)
}

export default TaskList
