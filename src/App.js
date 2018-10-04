import React, {Component} from 'react';
import './App.css';
import Title from "./components/Title";
import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import items from "./mocks/tasks";
import {orderBy as funcSort, remove} from 'lodash';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: items,
            isShowForm: false,
            strSearch: '',
            orderBy: 'name',
            orderDir: 'asc',
            isSelected: ''
        };
        this.handleToggleAdd = this.handleToggleAdd.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleDelete(id){
        let items = this.state.items;
        remove(items, (item) => {
            return item.id === id;
        });
        this.setState({
            items: items
        });

    }

    handleSort(orderBy,orderDir){
        this.setState({
           orderBy: orderBy,
           orderDir: orderDir
        });
    }

    handleSearch(value){
        this.setState({
           strSearch: value
        });
    }

    handleToggleAdd(){
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    }

    render() {
        let elmShowForm = null;
        if(this.state.isShowForm){
            elmShowForm = <Form handleToggleAdd={this.handleToggleAdd}/>;
        }
        //console.log(this.state.strSearch);
        let initialItems = [...this.state.items];
        let items = [];
        let search = this.state.strSearch;
        if(search.length > 0){
            initialItems.forEach((item)=>{
               if(item.name.toLowerCase().indexOf(search) !== -1) {
                   items.push(item);
                   console.log(item)
               }
            });
        }else {
            items = initialItems;
        }

        //console.log(this.state.orderBy,this.state.orderDir);
        items = funcSort(initialItems, [this.state.orderBy], [this.state.orderDir]);
        //console.log(this.state.isSelected);
        return (
            <div className="container">
                {/* TITLE : START */}
                <Title/>
                {/* TITLE : END */}
                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control
                    orderBy={this.state.orderBy}
                    orderDir={this.state.orderDir}
                    handleSort={this.handleSort}
                    handleSearch={this.handleSearch}
                    handleToggleAdd={this.handleToggleAdd}
                    isShowForm={this.state.isShowForm}
                />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}
                {/* FORM : START */}
                {elmShowForm}
                {/* FORM : END */}
                {/* LIST : START */}
                <List
                    isSelected={this.state.isSelected}
                    handleDelete={this.handleDelete}
                    items={items}
                />
                {/* LIST : END */}

            </div>

        );
    }
}

export default App;
