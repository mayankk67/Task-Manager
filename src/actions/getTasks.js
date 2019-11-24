import axios from 'axios';

const fetchTasks = (dispatch) =>{
    axios.get('http://localhost:9000/sendData')
    .then(res=>{
        dispatch({type:'DISPLAY',payload:res.data})
    })
    .catch(err=>{
        alert(err);
    })
}

export default fetchTasks;