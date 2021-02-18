import React, { Component } from 'react'
import { connect } from 'react-redux'

const style = {
    text:{
        fontFamily:"cursive",
        marginLeft:"30px",
        marginRight:"30px",
        color:"blue"
    },
    button:{
        marginLeft: "20px",
        background:"white",
        border:"1px solid blue",
        borderRadius:"5px",
        color:"blue"
    },
   
}
export class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:Math.floor(Math.random()*1000),
            text : '',
            status : false,
            filter:'all'
        }
    }
    handleSubmit = () => {
         this.props.addTodo(this.state)
         this.setState({id:Math.floor(Math.random()*1000),text:''})
    }


    render() {
        
        return (
            <div>
               
                <h3>Todo List Task Details</h3>
        
                {this.props.displayData.map((list,ind) =>{
                    if(list.status){
                        return <p style={style.completed}><strike>{list.text}</strike>
                                    <button style={style.button} onClick={() => {this.props.taskDelete(ind)}}>Delete</button>
                                </p>
                     }
                     else {
                        return <p style={style.text}>
                                    {list.text}
                                    <button style={style.button} onClick={() => {this.props.addComplete(ind)}}>Mark as Complete</button>
                                    <button style={style.button} onClick={() => {this.props.taskDelete(ind)}}>Delete</button>
                                </p>
                     }})}

            </div>
        )
    }
}
const mapStateToProps = state => {

    return{
        todoData : state
    }
}
const mapDispatchToProps = dispatch => {
    return{
        // addTodo:(val) => dispatch({type:'ADD_TODO',payload:val}),
        addComplete:(val) => dispatch({type:'STATUS_COMPLETE',payload:val}),
        taskDelete:(val) => dispatch({type:'TASK_DELETE',payload:val})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
