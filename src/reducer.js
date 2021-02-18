
export default function reducer(state={},action) {
   switch (action.type) {
       case 'ADD_TODO':
           const newState = {...state,todo:[...state.todo,action.payload]}
           return newState;
        case 'STATUS_COMPLETE':
            
            const completeStatus ={...state, todo:[
               ...state.todo.slice(0,action.payload),
               {...state.todo[action.payload],status:!state.todo[action.payload].status},
               ...state.todo.slice(action.payload+1)
            ]}
            console.log(completeStatus)
             return completeStatus;
         case 'TASK_DELETE' :
            const deleteStatus = {...state,todo:[...state.todo.slice(0,action.payload),...state.todo.slice(action.payload +1)]}
            return deleteStatus;
       default:
          return state;
   }
}

