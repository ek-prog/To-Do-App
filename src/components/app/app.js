import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoListMain from "../todo-list-main";
import ItemAddForm from "../item-add-form";
import Clock from "../clock";
import ToggleButton from "../toggle-button";
import Agreement from "../agreement/agreement";

import "./app.css";


export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createToDoItem('Drink Coffee'),
            this.createToDoItem('Make Awesome App'),
            this.createToDoItem('Have a lunch'),

        ],
        term: '',
        filter: 'all' // active, all, done
    };




    createToDoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++

        };
    };

    AddItem = (text) => {
        this.setState(({todoData}) => {
            const createNewItem = this.createToDoItem(text);
            const newItem = [
                ...todoData,
                createNewItem
            ];
            return {
                todoData: newItem
            };
        });
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];


    }

    onToggleDone = (id) => {

        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')

            };

        });


    };

    onToggleImportant = (id) => {

        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };

        });
    };

    onFilterChange =(filter) =>{
        this.setState({filter});
    };

    search(items, term) {
        if(term.length === 0){
            return items;
        }
        return items.filter((item)=>{
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    };

    onSearchChange =(term) =>{
        this.setState({term});
    };
    filter = (items, filter) =>{
        switch (filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=> !item.done);
            case 'done':
                return items.filter((item)=> item.done);
            default:
                return items;
        }
    };

    render() {
        const {todoData, term, filter} = this.state;

        const visibleItems = this.filter(
        this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo__app">
                <div className="todo__tasks">
                    <AppHeader toDo={todoCount} done={doneCount}/>
                    <div className="top-panel d-flex">
                        <SearchPanel onSearchChange ={this.onSearchChange}/>
                        <ItemStatusFilter filter={filter}
                        onFilterChange={this.onFilterChange}/>
                    </div>
                    <TodoListMain todos={visibleItems}
                                  onDeleted={this.deleteItem}
                                  onToggleImportant={this.onToggleImportant}
                                  onToggleDone={this.onToggleDone}
                    />
                    <ItemAddForm onAddedItem={this.AddItem}/>
                    {/*< Clock/>*/}

                    {/*<Agreement />*/}

                </div>
            </div>
        );
    }
};
