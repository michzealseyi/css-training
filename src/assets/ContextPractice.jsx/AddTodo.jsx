import {useState} from 'react'

function AddTodo(props) {
    const [title,setTitle]=useState('')
    const onChange=(e)=>setTitle(e.target.value)
    const onSubmit=(e)=>{e.preventDefault();props.addTodo2(title);setTitle('')}
  return (
    <form onSubmit={onSubmit} style={{display:'flex'}}>
        <input
        type="text"
        name="title"
        style={{flex:'20', padding:'10px'}}
        placeholder="Add Todo ..."
        value={title}
        onChange={onChange}
        />
        <input 
        type="submit"
        value="Submit"
        className="btn"
        style={{flex:'1'}}
        />
    </form>
  )
}

export default AddTodo