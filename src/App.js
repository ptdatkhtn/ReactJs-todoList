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
            isShowForm: false
        };
        this.handleToggleForm = this.handleToggleForm.bind(this);
    }
    handleToggleForm(){
        this.setState({isShowForm: !this.state.isShowForm});
        }
    render() {
        //console.log(this.state.items);
        let items = this.state.items;
        let elmForm = null;
        if(this.state.isShowForm){
            elmForm = <Form/>
        }

        return (
            <div>
                <div>
                    {/* TITLE : START */}
                    <Title/>
                    {/* TITLE : END */}
                    {/* CONTROL (SEARCH + SORT + ADD) : START */}
                    <Control onClickAdd={this.handleToggleForm}/>
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
