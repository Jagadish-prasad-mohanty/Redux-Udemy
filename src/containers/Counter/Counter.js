import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionType from '../../store/actions/index';
class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}/>
                <hr/>
                <button onClick={()=>this.props.onUpdateCounter(this.props.ctr)}>Click Me</button>
                <ul>
                    {this.props.resSet.map(res=>(
                        <li key={res.id} onClick={()=>this.props.onDeleteCounter(res.id)}>{res.value}</li>
                    ))}
                </ul>
            </div>

        );
    }
}

const mapStateToProps= state =>{
    return {
        ctr:state.ctr.counter,
        resSet:state.res.resultSet

    }
}


// dispatching
const mapDispatchToProps = dispatch =>{
    return {
        //using action creators
        onIncrementCounter:()=> dispatch(actionType.increment()),

        //without using the actions creators
        // onIncrementCounter:()=> dispatch({type:actions.INCREMENT}),
        onDecrementCounter:()=> dispatch(actionType.decrement()),
        onAddCounter:()=> dispatch(actionType.add_inc(10)),
        onSubCounter:()=> dispatch(actionType.sub_dec(5)),
        onUpdateCounter:(counterResult)=> dispatch(actionType.update(counterResult)),
        onDeleteCounter:(id)=> dispatch(actionType.del(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);