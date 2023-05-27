import React, { useState, useEffect } from 'react'
import './style.css';

const getLocalData = () => {
    const list = localStorage.getItem('items');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
}
export const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [Items, setItems] = useState(getLocalData());
    const [editItemData, setEditItemData] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    console.log(inputData);
    const addItem = () => {
        if(inputData.length > 0 && toggleButton){
            setItems(
                Items.map((ele)=>{
                    console.log()
                    if(ele.id === editItemData){
                        return {...ele, name:inputData}
                    }
                    return ele;
                })
            )
            setInputData([]);
            setEditItemData(null);
            setToggleButton(false);
        }else if (inputData.length > 0) {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...Items, myNewInputData]);
            setInputData("");
        }else {
            alert("Please Enter Data");
        }
    }

    const deleteItem = (id) => {
        const updatedItem = Items.filter((ele) => {
            return id !== ele.id;
        })
        setItems(updatedItem);
    }

    const removeAll = () => {
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(Items));
    })

    const editItem = (id) => {
        const item_todo_edit = Items.find((ele) => {
            return id === ele.id;
        })
        setInputData(item_todo_edit.name);
        setEditItemData(id);
        setToggleButton(true);
    }
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.svg" alt='todologo' />
                    </figure>
                    <div className='addItems'>
                        <input
                            type="text"
                            placeholder="✍ Add Item"
                            className="form-control"
                            value={inputData}
                            onChange={(event) => { setInputData(event.target.value) }} />
                        {toggleButton ? (
                            <i className="fa fa-edit add-btn" onClick={() => addItem()}></i>
                        ) : (
                            <i className="fa fa-plus add-btn" onClick={() => addItem()}></i>
                        )}
                    </div>
                    {/*  Show our items  */}
                    <div className='showItems'>
                        {Items.map((ele, index) => {
                            return (
                                <div className='eachItem' key={index}>
                                    <h3>{ele.name}</h3>
                                    <div className='todo-btn'>
                                        <i className="far fa-edit add-btn" onClick={() => { editItem(ele.id) }}></i>
                                        <i className="far fa-trash-alt add-btn" onClick={() => { deleteItem(ele.id) }}></i>
                                    </div>
                                </div>
                            );
                        })};
                    </div>
                    {/*  remove all items  */}
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={() => removeAll()}>
                            <span>Check List</span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
