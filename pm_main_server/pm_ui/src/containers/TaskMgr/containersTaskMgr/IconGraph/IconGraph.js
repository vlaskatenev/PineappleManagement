import React from 'react'
import {initialState} from '../../../../components/Graph/initialState'
import Graph from '../../../../components/Graph/Graph'


export const IconGraph = ({ title, state }) => {
    return <div className='icon'>
    <h3>{ title }</h3>
    <div>
        <Graph
            initialState={initialState('CPU', state)}
        />
    </div>
</div>
}
