import React from "react";

function SearchForm(props) {
    return (
        <form className="m-3">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label className="mr-3">Search by employee:</label>
                    <input 
                        value={props.desiredName}
                        onChange={props.handleInputChange}
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label className="mr-3">Search by employee:</label>
                    <input 
                        
                        type="text"
                    />
                </div>
            </div>
        </form>
    )
}

export default SearchForm;