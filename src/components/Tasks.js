import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, darkMode}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle} 
                    darkMode={darkMode}
                    />
            ))}
        </>
    )
}

export default Tasks
