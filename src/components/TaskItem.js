export const TaskItem = ({isChecked, taskName, onTaskChange}) => {

    const styleOfTheComponent = {
        textDecoration: isChecked ? "line-through" : ""
    }

    return(
        <li>
            <input className="input-cb" onChange={onTaskChange} checked={isChecked} type="checkbox"/>
            <span style={styleOfTheComponent} className="li-span">{taskName}</span>
            
        </li>
    );
};