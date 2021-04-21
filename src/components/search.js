import React from "react";

function SearchForm(props) {
    return (
        <form className="m-3">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label className="mr-3">Search by employee:</label>
                    <input 
                        value={props.desiredName}
                        onChange={props.findEmployeeByName}
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label className="mr-3">Order by:</label>
                    <select onChange={props.handleOrderChange}>
                        <option value="0">Order</option> 
                        <option value="1">First Name</option>
                        <option value="2">Last Name</option>
                        <option value="3">Country</option>
                    </select>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;