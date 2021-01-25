import React, {useState} from 'react';


function Task(props) {

    return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.task.name}</h5>
                <p className="card-text">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        {props.task.status !== 'todo' && <button type="button" className="btn btn-danger" onClick={() => props.left(props.task.id)}>Left</button>}

                        {props.task.status !== 'done' && <button type="button" className="btn btn-success" onClick={() => props.right(props.task.id)}>Right</button>}
                    </div>

                </p>

            </div>
        </div>

    );
}

export default Task;
