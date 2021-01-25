import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Panel from "./Panel";
import faker from 'faker'

const statuses = ['todo', 'progress', 'reviw', 'done']
const initialState = [{
    id: Math.random(),
    name: faker.random.words(),
    status: statuses[0],
    priority: 2
},
    {
        id: Math.random(),
        name: faker.random.words(),
        status: statuses[1],
        priority: 1
    },
    {
        id: Math.random(),
        name: faker.random.words(),
        status: statuses[2],
        priority: 1
    },
    {
        id: Math.random(),
        name: faker.random.words(),
        status: statuses[3],
        priority: 2
    }]

function App() {
    const nextStatus = (status) => {
        return statuses[statuses.indexOf(status) + 1]
    }
    const previosStatus = (status) => {
        return statuses[statuses.indexOf(status) - 1]
    }


    const left = (id) => {
        const updateTasks = tasks.map(el => el.id === id ? {...el, status: previosStatus(el.status)} : el)
        setTasks(updateTasks)
    }
    const right = (id) => {
        // const task = tasks.find(el => el.id === id)
        const updateTasks = tasks.map(el => el.id === id ? {...el, status: nextStatus(el.status)} : el)
        setTasks(updateTasks)
    }
    const [tasks, setTasks] = useState(initialState)
    return (
        <div className="container">
            <div className="row align-items-start">
                {statuses.map((status, index) =>
                    <div key={status} className="col">
                        <Panel status={status} tasks={tasks} left={left} right={right}/>
                    </div>
                )}

            </div>


        </div>
    );
}

export default App;
