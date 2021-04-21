import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/search";
import Table from "../components/table"

class EmployeeContainer extends Component {
    state = {
        number: "",
        results: [],
        desiredName: "",
        sortBy: ""
    };

    componentDidMount() {
        this.getEmployees(this.state.number);
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

    handleInputChange = event => {
        const {value} = event.target;

        this.setState({
            desiredName: value
        })
    }

    render() {
        return (
            <div className="container">
                <Search results={this.state.results} handleInputChange={this.handleInputChange} desiredName={this.state.desiredName}/>
                <Table results={this.state.results} desiredName={this.state.desiredName} />
            </div>
            
        )
    }
}

export default EmployeeContainer;