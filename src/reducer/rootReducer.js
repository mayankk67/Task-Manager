var initState=[];

const rootReducer = (state=initState,{type,payload})=>{
    switch(type){
        case 'DISPLAY': 
            var ar=[];
            payload.map((item)=>{
                console.log(item);
                ar.push({insertionId:item.InsertionId,data:item.Data,isChecked:0});
                return ar;
            });
            return ar;
        default:return state;
    }
}

export default rootReducer;