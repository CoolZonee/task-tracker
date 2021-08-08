import { useState } from "react"

const AddTask = ({ onAdd, darkMode }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className={`form-control ${darkMode ? 'dark' : ''}`}>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Add Task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    />
            </div>
            <div className={`form-control ${darkMode ? 'dark' : ''}`}>
                <label>Day & Time</label>
                <input type='date' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className={`form-control-check form-control ${darkMode ? 'dark' : ''}`} >
                <label>Set Reminder</label>
                <input 
                    type='checkbox' 
                    checked={reminder}
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input className='btn btn-block' 
                    type='submit' 
                    value='Save Task'
                    style={{backgroundColor: 'green'}}
                    />
        </form>
    )
}

export default AddTask
