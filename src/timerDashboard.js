import React from 'react';
import EditableTimerList from './editableTimerList';



class TimerDashboard extends React.Component{
    render(){
        return(
            <div className="ui column centered grid">
            <div className="column">
            <EditableTimerList />
            <ToggleTimerForm 
            isOpen={true}/>
            </div>
            </div>
        );
    }
}

export default TimerDashboard;