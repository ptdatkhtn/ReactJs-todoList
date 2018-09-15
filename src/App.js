import React, {Component} from 'react';
import Title from "./components/Title";
import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import tasks from "./mocks/tasks";
import {filter, includes, orderBy as funcOrderBy, remove} from "lodash";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: tasks,
            isShowForm: false,
            strSearch: '',
            orderBy: 'name',
            orderDir: 'asc',
        };
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id){
        //console.log(id);
        let items = this.state.items;
        remove(items, (item) => {
            return item.id === id;
        });
        this.setState({
            items: items
        })
    }

    handleToggleForm(){
        this.setState({isShowForm: !this.state.isShowForm});
    }

    closeForm(){
        this.setState({isShowForm: false});
    }

    handleSearch(value){
        this.setState({strSearch: value});
    }

    handleSort(orderBy, orderDir){
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }

    render() {
        //console.log(this.state.items);
        //console.log(this.state.strSearch);
        let itemsOrigin = [...this.state.items];
        let items = [];
        let elmForm = null;
        let search = this.state.strSearch;
        let orderBy = this.state.orderBy;
        let orderDir = this.state.orderDir;

        if(this.state.isShowForm){
            elmForm = <Form onClickCancel = {this.closeForm}/>
        }

        /*
        if(search.length > 0){
            itemsOrigin.forEach((item) => {
                if(item.name.toLowerCase().indexOf(search) !== -1)
                    items.push(item);
            })
        }else{
            items = itemsOrigin;
        }
        */

        items = filter(itemsOrigin, (item) => {
            return includes(item.name.toLowerCase(), search.toLowerCase());
        })

        items = funcOrderBy(items, [orderBy], [orderDir]);

        return (
            <div>
                <div>
                    {/* TITLE : START */}
                    <Title/>
                    {/* TITLE : END */}
                    {/* CONTROL (SEARCH + SORT + ADD) : START */}
                    <Control
                        orderBy={orderBy}
                        orderDir={orderDir}
                        onClickAdd={this.handleToggleForm}
                        isShowForm={this.state.isShowForm}
                        onClickSearchGo={this.handleSearch}
                        onClickSort={this.handleSort}
                    />
                    {/* CONTROL (SEARCH + SORT + ADD) : END */}
                    {/* FORM : START */}
                    {elmForm}
                    {/* FORM : END */}
                    {/* LIST : START */}
                    <List
                        onClickDelete={this.handleDelete}
                        items = {items}/>
                    {/* LIST : END */}
                </div>

            </div>
        );
    }
}

export default App;
