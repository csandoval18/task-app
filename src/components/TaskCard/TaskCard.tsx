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
}

const TaskCard = ({ task, tasks, setTasks }: Props) => {
	const [edit, setEdit] = useState<boolean>(false)
	const [editTask, setEditTask] = useState<string>(task.text)

	const handleDone = (id: number) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, isDone: !task.isDone } : task
			)
		)
	}

	//delete task card
	const handleDelete = (id: number) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	//update input of edited taskcard in Tasks array upon form submission
	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault()

		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, text: editTask } : task))
		)
		setEdit(false)
	}

	//add focus to text input
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
