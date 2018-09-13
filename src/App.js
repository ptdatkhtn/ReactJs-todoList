import React, {Component} from 'react';
import Title from "./components/Title";
import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import tasks from "./mocks/tasks";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: tasks,
            isShowForm: false,
            strSearch: ''
        };
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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
    render() {
        //console.log(this.state.items);
        //console.log(this.state.strSearch);
        let itemsOrigin = this.state.items;
        let items = [];
        let elmForm = null;
        let search = this.state.strSearch;
        if(this.state.isShowForm){
            elmForm = <Form onClickCancel = {this.closeForm}/>
        }

        if(search.length > 0){
            itemsOrigin.forEach((item) => {
                if(item.name.toLowerCase().indexOf(search) !== -1)
                    items.push(item);
            })
        }else{
            items = itemsOrigin;
        }

        return (
            <div>
                <div>
                    {/* TITLE : START */}
                    <Title/>
                    {/* TITLE : END */}
                    {/* CONTROL (SEARCH + SORT + ADD) : START */}
                    <Control
                        onClickAdd={this.handleToggleForm}
                        isShowForm={this.state.isShowForm}
                        onClickSearchGo={this.handleSearch}
                    />
                    {/* CONTROL (SEARCH + SORT + ADD) : END */}
                    {/* FORM : START */}
                    {elmForm}
                    {/* FORM : END */}
                    {/* LIST : START */}
                    <List items = {items}/>
                    {/* LIST : END */}
                </div>

            </div>
        );
    }
}

export default App;
