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
            .then(res => {
                // console.log(res.data.results)
                this.setState({ results: res.data.results})
                console.log('state', this.state.results)
            })
            
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