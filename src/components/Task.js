import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Modal from './Modal'

const Task = ({ task, onDelete, onToggle }) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick={() => onToggle(task)}>
            <h3>{task.text} 
            <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => setShowModal(!showModal)} /></h3>
            <p>{task.day}</p>
            {showModal ? <Modal setShowModal={setShowModal} showModal={showModal} onDelete={onDelete} id={task.id} /> : null}
        </div>
        
    )
}

export default Task
