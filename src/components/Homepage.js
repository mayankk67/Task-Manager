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
                    if(item.isChecked===0)
                        return (<div><span key={index}>{item.data}</span><input type='checkbox' onClick={()=>this.props.changeCheck(item.insertionId)}></input></div>)
                    return '';
                })}
                <h4>Checked:</h4>
                {this.props.root.map((item,index)=>{
                    if(item.isChecked===1)
                        return (<div><span key={index}>{item.data}</span><input type='checkbox' checked="checked" onClick={()=>this.props.changeCheckR(item.insertionId)}></input></div>)
                    return '';
                })}
            </div>
        )
    }
}
const matchStatetoProps = (state) =>{
    return {root:state.root};
}

const dispatchStatetoProps = (dispatch) =>{
    return{
        fetchtsk:()=> dispatch(fetchTasks),
        changeCheck: (insertionId)=> dispatch({type:'CHANGECHK',payload:insertionId}),
        changeCheckR: (insertionId)=> dispatch({type:'CHANGECHKR',payload:insertionId})
    }
}

export default connect(matchStatetoProps,dispatchStatetoProps)(Homepage);