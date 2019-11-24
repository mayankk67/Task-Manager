import React from 'react';
import {connect} from 'react-redux';
import fetchTasks from '../actions/getTasks';

class Homepage extends React.Component{
    componentDidMount(){
        this.props.fetchtsk();
    }
    render(){
        return(
            <div>
                <h1>Welcome to My Task-Manager Page</h1>
                <input type='text' placeholder='insert task'></input>
                <button value='insert task'>Insert task</button>
                <h3>Here are the tasks:</h3>
                <h4>Unchecked:</h4>
                {this.props.root.map((item,index)=>{
                    return <p key={index}>{item.data}</p>
                })}
                <h4>Checked:</h4>
            </div>
        )
    }
}
const matchStatetoProps = (state) =>{
    return {root:state.root};
}

const dispatchStatetoProps = (dispatch) =>{
    return{
        fetchtsk:()=> dispatch(fetchTasks)
    }
}

export default connect(matchStatetoProps,dispatchStatetoProps)(Homepage);