import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div>
                <p>test</p>
                <button className="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    console.log("here",props.results)
                    }}>me</button>
            </div>
        </form>
    )
}

export default SearchForm;