import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/search";
import Table from "../components/table"

class EmployeeContainer extends Component {
    state = {
        number: "",
        results: [],
        desiredName: "",
        order: "",
        employees: []
    };

    componentDidMount() {
        this.getEmployees(this.state.number);
    };

    getEmployees = query => {
        API.search(query)
            .then(res => {
                // console.log(res.data.results)
                this.setState({ results: res.data.results, employees: res.data.results})
                console.log('state', this.state.results)
            })
            
            .catch(err => console.log(err));
    }

    handleOrderChange = event => {
        const {value} = event.target;
        switch(value) {
            case "1": return this.orderByFirstName();
            case "2": return this.orderByLastName();
            case "3": return this.orderByCountry();
            case "4": return 
            default: return null;
        }
    }

    orderByFirstName = () => {
        const sorted = this.state.employees.sort((a,b) =>  {   
            if(a.name.first < b.name.first) { return -1; }
            if(a.name.first > b.name.first) { return 1; }
            return 0;
        })
        this.setState({
            employees: sorted
        })
    }

    orderByLastName = () => {
        const sorted = this.state.employees.sort((a,b) =>  {   
            if(a.name.last < b.name.last) { return -1; }
            if(a.name.last > b.name.last) { return 1; }
            return 0;
        })
        this.setState({
            employees: sorted
        })
    }

    orderByCountry = () => {
        const sorted = this.state.employees.sort((a,b) =>  {   
            if(a.location.country < b.location.country) { return -1; }
            if(a.location.country > b.location.country) { return 1; }
            return 0;
        })
        this.setState({
            employees: sorted
        })
    }

    findEmployeeByName = event => {
        const {value} = event.target;
        let filteredArr = this.state.results.filter(employee => employee.name.first.toLowerCase().includes(value) || employee.name.last.toLowerCase().includes(value))

        this.setState({
            employees: filteredArr,
            desiredName: value
        })
    }

    render() {
        return (
            <div className="container">
                <Search 
                    desiredName={this.state.desiredName} 
                    handleOrderChange={this.handleOrderChange}
                    findEmployeeByName={this.findEmployeeByName}
                />
                <Table 
                    employees={this.state.employees}

                />
            </div>
        )
    }
}

export default EmployeeContainer;