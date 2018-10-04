import React, {Component} from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            strSearch : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearhGo = this.handleSearhGo.bind(this);
    }

    handleSearhGo(){
        this.props.handleSearch(this.state.strSearch);
    }

    handleChange(event){
        this.setState({
           strSearch: event.target.value
        });
    }

    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input value={this.state.strSearch} onChange={this.handleChange} type="text" className="form-control"  placeholder="Search for..."/>
                    <span className="input-group-btn">
                            <button onClick={this.handleSearhGo} className="btn btn-info" type="button">Go!</button>
                        </span>
                </div>
            </div>

        );
    }
}

export default Search;