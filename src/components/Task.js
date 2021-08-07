import { useState, useCallback } from 'react'
import { FaTimes } from 'react-icons/fa'
import Modal from './Modal/Modal'

const Task = ({ task, onDelete, onToggle, darkMode }) => {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = useCallback(() => {
        setShowModal(false)
    }, [])
    return (
        <div className={`task ${task.reminder ? 'reminder' : '' } ${darkMode ? 'dark' : ''}`} onDoubleClick={() => onToggle(task)}>
            <h3>{task.text} 
            <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={()=>setShowModal(true)} /></h3>
            <p>{task.day}</p>
            <Modal toggleModal={toggleModal} showModal={showModal} onDelete={onDelete} id={task.id} />
        </div>
        
    )
}

export default Task
