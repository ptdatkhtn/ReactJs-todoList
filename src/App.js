import React, {Component} from 'react';
import Title from "./components/Title";
import Control from "./components/Control";


class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    {/* TITLE : START */}
                    <Title/>
                    {/* TITLE : END */}
                    {/* CONTROL (SEARCH + SORT + ADD) : START */}
                    <Control/>
                    {/* CONTROL (SEARCH + SORT + ADD) : END */}
                    {/* FORM : START */}
                    <div className="row">
                        <div className="col-md-offset-7 col-md-5">
                            <form  className="form-inline">
                                <div className="form-group">
                                    <label className="sr-only" >label</label>
                                    <input type="text" className="form-control" placeholder="Task Name"
                                           ref="task_name"/>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" >label</label>
                                    <select name="ds" id="inputDs" className="form-control" required="required"
                                            ref="task_level">
                                        <option value={0}>Small</option>
                                        <option value={1}>Medium</option>
                                        <option value={2}>High</option>
                                    </select>
                                </div>
                                <button type="button" className="btn btn-primary">Submit</button>
                                <button type="button" className="btn btn-default">Cancel</button>
                            </form>
                        </div>
                    </div>
                    {/* FORM : END */}
                    {/* LIST : START */}
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
                            <tr>
                                <td className="text-center">1</td>
                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
                                <td className="text-center"><span className="label label-danger">High</span></td>
                                <td>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
                                <td className="text-center"><span className="label label-default">Small</span></td>
                                <td>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
                                <td className="text-center"><span className="label label-info">Medium</span></td>
                                <td>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
