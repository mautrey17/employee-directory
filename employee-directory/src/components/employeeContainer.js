import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/search";

class EmployeeContainer extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.getEmployees('results=15');
    };

    getEmployees = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.data}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Search results={this.state.results}/>
                
            </div>
            
        )
    }
}

export default EmployeeContainer;