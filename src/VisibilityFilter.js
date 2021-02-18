import React, { Component } from 'react'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import  AddTodo  from './AddTodo'

const style = {
    completed:{
        color:"green"
    },
    filter:{
        marginTop:"10px",
        color:"red",
        background:"white",
        border:"1px solid red",
        borderRadius:"5px",
        marginRight:"10px"
    }
}
export class VisibilityFilter extends Component {
    constructor(props){
        super(props)
        this.state= {
            filter:'all'
        }
    }

    render() {
        <AddTodo />
        const displayData = this.props.taskData.todo.filter((item,ind) => {
            if(this.state.filter === 'all'){
                return true
            }
            else if(this.state.filter === 'completed'){
                return item.status
            }
            else {
                return !item.status
            }
        });
        return (
            <div>
               <div >
                    <button style={style.filter} value="all" onClick={(e) => {this.setState({filter:e.target.value})}}>All</button>
                    <button style={style.filter} value="completed" onClick={(e) => {this.setState({filter:e.target.value})}}>Completed</button>
                    <button style={style.filter} value="uncompleted" onClick={(e) => {this.setState({filter:e.target.value})}}>Pending</button>
                </div>
                <TodoList displayData={displayData}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        taskData:state
    }
}
const mapDispatchToProps = dispatch => {
    return{
        // addTodo:(val) => dispatch({type:'ADD_TODO',payload:val}),
        addComplete:(val) => dispatch({type:'STATUS_COMPLETE',payload:val}),
        taskDelete:(val) => dispatch({type:'TASK_DELETE',payload:val})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VisibilityFilter)
