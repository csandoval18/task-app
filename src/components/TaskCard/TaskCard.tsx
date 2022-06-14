import React, { useEffect, useRef, useState } from 'react'
import { Task } from '../../model'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './TaskCard.scss'
import { classicNameResolver } from 'typescript'

type Props = {
	task: Task
	tasks: Task[]
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
	completedTasks: Task[]
	setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskCard = ({
	task,
	tasks,
	setTasks,
	completedTasks,
	setCompletedTasks,
}: Props) => {
	const [edit, setEdit] = useState<boolean>(false)
	const [editTask, setEditTask] = useState<string>(task.text)

	//delete task card
	const handleDelete = (id: number) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	const handleDeleteCompleted = (id: number) => {
		setCompletedTasks(completedTasks.filter((task) => task.id !== id))
	}

	//update input of edited taskcard in Tasks array upon form submission
	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault()

		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, text: editTask } : task))
		)
		setEdit(false)
	}

	const handleDone = (id: number) => {
		//search if completed task already exists in completed tasks array
		console.log('passed id: ' + id)
		let el = completedTasks.filter((task) => task.id === id)
		//add checkmarked task to completed tasks container
		console.log(el)
		if (el.length === 0) {
			setCompletedTasks([
				...completedTasks,
				/* id needs to be different in completedTasks array since tasks array auto increments task 
        ids starting from 0. Once an active task is moved to completed tasks it would cause issues 
        of id duplicates which would allow completed tasks to be duplicated infinetly if the checkmark
        is clicked once again
        */
				{ id: task.id + Math.random(), text: task.text, isDone: !task.isDone },
			])
			//remove task finished from tasks array displayed in active tasks
			handleDelete(id)
		} else if (el[0].isDone === true) {
			console.log('el isdone: ' + el[0].isDone)
			handleDeleteCompleted(id)
			setTasks([
				...tasks,
				{ id: task.id + Math.random(), text: task.text, isDone: false },
			])
		}
	}

	//add focus to text input once edit btn is clicked
	const inputRef = useRef<HTMLInputElement>(null)
	useEffect(() => {
		inputRef.current?.focus()
	}, [edit])

	return (
		<div className='taskcard-container'>
			<form
				id={task.id.toString()}
				className='taskcard'
				onSubmit={(e) => handleEdit(e, task.id)}
			>
				{edit ? (
					<input
						ref={inputRef}
						value={editTask}
						onChange={(e) => setEditTask(e.target.value)}
						className='taskcard-input'
					/>
				) : task.isDone ? (
					<s className='taskcard-text'>{task.text}</s>
				) : (
					<span className='taskcard-text'>{task.text}</span>
				)}
				<div>
					<span
						className='taskcard-icon'
						onClick={() => {
							if (!edit && !task.isDone) {
								setEdit(!edit)
							}
						}}
					>
						<AiOutlineEdit />
					</span>
					<span className='taskcard-icon' onClick={() => handleDelete(task.id)}>
						<AiOutlineDelete />
					</span>
					<span className='taskcard-icon' onClick={() => handleDone(task.id)}>
						<MdDone />
					</span>
				</div>
			</form>
		</div>
	)
}

export default TaskCard
