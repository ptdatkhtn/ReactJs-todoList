import React, {Component} from 'react';
import Item from "./Item";

// class component
// function component: stateless component

class List extends Component {
    constructor(props){
        super(props);
        //console.log(this.props.items);

    }

    render() {
        const items = this.props.items;
        //console.log(items);
        const elmItem = items.map((item, index)=>{
            return (
                <Item
                    onClickDelete={this.props.onClickDelete}
                    onClickEdit={this.props.onClickEdit}
                    key={index} item = {item} index = {index}/>
            )
        })
        return (

            <div className="panel panel-success">
                <div className="panel-heading">List Task</div>
                <table className="table table-hover ">
                    <thead>
                    <tr>
                        <th style={{width: '10%'}} className="text-center">#</th>
                        <th>Task</th>
                        <th style={{width: '20%'}} className="text-center">Level</th>
                        <th style={{width: '20%'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {elmItem}
                    </tbody>
                </table>
            </div>

         )
        ;
    }
}

export default List;
