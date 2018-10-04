import React, {Component} from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.buttonDelete = this.buttonDelete.bind(this);
    }

    buttonDelete(id){
        this.props.handleDelete(id)
    }

    render() {
        let elmLevel = <span className="label label-danger">High</span>;
        if (this.props.item.level === 0){
            elmLevel = <span className="label label-danger">Small</span>;
        }
        else if (this.props.item.level === 1){
            elmLevel = <span className="label label-danger">Medium</span>;
        }
        return (
            <tr>
                <td className="text-center">{this.props.index + 1}</td>
                <td>{this.props.item.name}</td>
                <td className="text-center">{elmLevel}</td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button onClick={()=>this.buttonDelete(this.props.item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>

        );
    }
}

export default Item;