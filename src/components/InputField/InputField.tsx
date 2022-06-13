import React, { useRef } from 'react'
import './InputField.scss'

interface Props {
	task: string
	setTask: React.Dispatch<React.SetStateAction<string>>
	handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ task, setTask, handleAdd }) => {
	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<div className='inputfield-container'>
			<form
				className='task'
				onSubmit={(e) => {
					handleAdd(e)
					inputRef.current?.blur()
				}}
			>
				<input
					ref={inputRef}
					value={task}
					type='text'
					onChange={(e) => setTask(e.target.value)}
					placeholder='Enter a task'
					className='task-input'
				/>
				<button className='task-submit-btn' type='submit'>
					Go
				</button>
			</form>
		</div>
	)
}

export default InputField
