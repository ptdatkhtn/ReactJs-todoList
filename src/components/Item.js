import React, {Component} from 'react';



class Item extends Component {

    showElmLevel(level){
        let elmLevel = <span className="label label-default">Small</span>;
        if(level === 1){
            elmLevel = <span className="label label-info">Medium</span>;
        }
        else if(level === 2){
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
    }
    render() {
        //console.log(this.props.item);
        const item = this.props.item;

        return (

                <tr>
                    <td className="text-center">{this.props.index + 1}</td>
                    <td>{item.name}</td>
                    <td className="text-center">{this.showElmLevel(this.props.item.level)}</td>
                    <td>
                        <button type="button" className="btn btn-warning">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </td>
                </tr>

         )
        ;
    }

}

export default Item;
