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
            items: tasks
        };
    }
    render() {
        //console.log(this.state.items);
        let items = this.state.items;
        return (
            <div>
                <div>
                    {/* TITLE : START */}
                    <Title/>
                    {/* TITLE : END */}
                    {/* CONTROL (SEARCH + SORT + ADD) : START */}
                    <Control/>
                    {/* CONTROL (SEARCH + SORT + ADD) : END */}
                    {/* FORM : START */}
                    <Form/>
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
