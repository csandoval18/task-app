import React, { useState } from 'react'
import './App.scss'
import InputField from './Components/InputField'
import { ToDo } from './Model'

const App: React.FC = () => {
	const [toDo, setToDo] = useState<string>('')
	const [toDos, setToDos] = useState<ToDo[]>([])

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault()
	}

	if (toDo) {
		setToDos([...toDos, { id: Date.now(), toDo, isDone: false }])
		setToDo('')
	}

	console.log('toDo val: ' + toDo)

	return (
		<div className='App'>
			<span className='App-heading'>Taskify</span>
			<InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
		</div>
	)
}
export default App
