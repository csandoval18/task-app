import React, { useState } from 'react'
import './App.scss'
import InputField from './Components/InputField'

const App: React.FC = () => {
	const [toDo, setToDo] = useState<string>('')
	return (
		<div className='App'>
			<span className='App-heading'>Taskify</span>
			<InputField />
		</div>
	)
}
export default App
