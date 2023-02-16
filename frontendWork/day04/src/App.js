import React, { useState } from "react";
import "./App.css";

function ItemRow({item, removeList, check}) {
  //console.log(item.title)
  function rmBtn(){
    removeList(item.no)
    //console.log(item.no)
  }
  return (
    <li>
      <p>
        <input type="checkbox" checked={item.done} onChange={(e)=>{check(item.no)}}/>
        <input type="text" value={item.title} disabled className={item.done ? 'done' : 'undone'}/>
        <button onClick={rmBtn}>삭제</button>
      </p>
    </li>
  );
}

function InputItem({addList}) {
  const [newWork, setNewWork] = useState("");
  function addButton(){
    addList(newWork)
  }
  return (
    <div>
      할일 : <input type="text" value={newWork} onChange={(e)=>{setNewWork(e.target.value)}}/>
      <button onClick={addButton}>추가</button>
    </div>
  );
}

function TodoList({list, rmList, check}) {
  //console.log(list)
  //console.log(rmList)
  return (
    <div>
      <ul>
        {
          list.map((todo, idx)=>{
            return <ItemRow key={idx} item = {todo} removeList={rmList} check={check}/>
          })
        }
      </ul>
    </div>
  );
}

function App(props) {
  const [todoList, setTodoList] = useState([
    {no:1, title: "할일 1", done:false},
    {no:2, title: "할일 2", done:false},
    {no:3, title: "할일 3", done:true},
    {no:4, title: "할일 4", done:false},
    {no:5, title: "할일 5", done:false},
  ])

  function addList(title){
    setTodoList([...todoList, {no:todoList.length+1, title: title, done:false}])
  }

  function removeList(no){
    console.log(no)
    setTodoList(todoList.filter((todo)=>{
      return todo.no !== no;
    }))
  }

  function check(no){
    let tempList = [...todoList]
    tempList[no-1].done = !tempList[no-1].done
    setTodoList(tempList)

    console.log(todoList)
  }
  return (
    <>
      <h1>Todo List</h1>
      <InputItem addList={addList}/>
      <hr />
      <TodoList list={todoList} rmList={removeList} check={check}/>
    </>
  );
}

export default App;