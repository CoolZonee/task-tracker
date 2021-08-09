import "./Modal.css"
import { CSSTransition } from 'react-transition-group'
import ReactDOM from "react-dom"
import React, { useEffect } from "react"

const Modal = ({ toggleModal, showModal, onDelete, id, darkMode }) => {
    const nodeRef = React.useRef(null)
    useEffect(() => {
        // Esc key to close modal
        const closeOnEscapeKeyDown = (e) => {
            if ((e.charCode || e.keyCode) === 27) {
                toggleModal()
            }
        }
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [toggleModal])

    return ReactDOM.createPortal(
        <CSSTransition
            nodeRef = {nodeRef}
            in = {showModal}
            unmountOnExit
            timeout={{ enter:0, exit: 300}}
        >
        <div ref={nodeRef} className="modal" onClick={toggleModal}>
            <div className={`modal-content ${darkMode ? 'dark' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Delete Task</h4>
                </div>
                <div className={`modal-body ${darkMode ? 'dark' : ''}`}>
                    Are you sure you want to delete this task?
                </div>
                <div className="modal-footer">
                    <button className="btn" onClick={toggleModal} style={darkMode ? {background: "#1e2020"} : {}}>Close</button>
                    <button className="btn" style={{background: "red"}} onClick={() => onDelete(id)}>Confirm</button>
                </div>
            </div>
        </div>
        </CSSTransition>,
        document.getElementById('root')
    )
}

export default Modal
