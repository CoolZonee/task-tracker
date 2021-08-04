const Modal = ({ setShowModal, showModal, onDelete, id }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Delete Task</h4>
                </div>
                <div className="modal-body">
                    Are you sure you want to delete this task?
                </div>
                <div className="modal-footer">
                    <button className="btn" onClick={()=> setShowModal(!showModal)}>Close</button>
                    <button className="btn" style={{background: "red"}} onClick={() => onDelete(id)}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
