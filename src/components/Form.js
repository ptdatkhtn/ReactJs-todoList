import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            task_name: '',
            task_level: 0
        };
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form onSubmit={this.handleSubmit} className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor>label</label>
                            <input type="task_name" className="form-control" placeholder="Task Name"/>
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor>label</label>
                            <select name="task_level" className="form-control" required="required" >
                                Small
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button onClick={this.props.handleToggleAdd} type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default Form;