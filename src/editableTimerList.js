import React from 'react';




class EditableTimerList extends React.Component{
    render(){
    return(
        <div id="timers">
        <EditableTimer
        title='Learn React'
        project='Web Development'
        elapsed='8600090'
        runningSince={null}
        editFormOpen={false}
        />
        <EditableTimer
        title='Learn React'
        project='Web Development'
        elapsed='8600090'
        runningSince={null}
        editFormOpen={true}
        />
        </div>
    );
}
}

export default EditableTimerList;