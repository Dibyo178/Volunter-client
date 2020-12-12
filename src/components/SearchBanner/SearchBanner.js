import React,{useState} from 'react';
import './SearchBanner.css'

const SearchBanner = ({set,handle,inp}) => {
    
    return (
        <div className="banner-container">
            <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
            <div className="search-container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search Volunteer Events" onChange={(e)=>set(e.target.value)}></input>
                    <div className="input-group-prepend">
                        <button className="input-group-text btn-search" onClick={()=>handle(inp)}>Search</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SearchBanner;