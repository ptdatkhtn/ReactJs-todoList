import React, {Component} from 'react';
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        let elmAddTask = <button onClick={this.props.handleToggleAdd} type="button" className="btn btn-info btn-block">Add Task</button>;
        if (this.props.isShowForm){
            elmAddTask = <button onClick={this.props.handleToggleAdd} type="button" className="btn btn-info btn-block">Close Task</button>;
        }
        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search handleSearch={this.props.handleSearch}/>
                {/* SEARCH : END */}
                {/* SORT : START */}
                <Sort
                    orderBy={this.props.orderBy}
                    orderDir={this.props.orderDir}
                    handleSort={this.props.handleSort}
                />
                {/* SORT : END */}
                {/* ADD : START */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    {elmAddTask}
                </div>
                {/* ADD : END */}
            </div>

        );
    }
}

export default Control;