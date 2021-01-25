import React, {useState} from 'react';
import {upperFirst} from 'lodash'
import Task from "./Task";


function Panel(props) {

    const colorMap = {
        todo: 'border-secondary',
        progress: 'border-primary',
        review: 'border-warning',
        done: 'border-success',
    }

    return (
        <div>
            <h1 className={`border-bottom border-4 ${colorMap[props.status]} `}>{upperFirst(props.status)}</h1>
            {props.tasks
                .filter(task => task.status === props.status)
                .map((task) => <Task key={task.id} task={task} left={props.left} right={props.right}/>)}

        </div>
    );
}

export default Panel;
