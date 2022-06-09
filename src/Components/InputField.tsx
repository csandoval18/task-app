import React from 'react'
import './Styles.scss'

interface Props {
	toDo: string
	setToDo: React.Dispatch<React.SetStateAction<string>>
	handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ toDo, setToDo, handleAdd }) => {
	return (
		<form className='input' onSubmit={handleAdd}>
			<input
				type='text'
				// value={toDo}
				onChange={(e) => setToDo(e.target.value)}
				placeholder='Enter a task'
				className='input_box'
			/>
			<button className='input_submit' type='submit'>
				Go
			</button>
		</form>
	)
}

export default InputField
