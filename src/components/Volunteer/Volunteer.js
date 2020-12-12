import React, { useEffect,useContext } from 'react';
import { useState } from 'react';
import { AllDataContext } from '../DataContext/DataContext';
import SearchBanner from '../SearchBanner/SearchBanner';
import VolunteerType from '../VolunteerType/VolunteerType';

const Volunteer = () => {
    const [volunteer, setVolunteer] = useContext(AllDataContext);
    const [vol,setVol]=useState([]);
    const [input,setInput]=useState("");
    const handleInput=(x)=>{
        const arr=volunteer.filter(x=>{
            if(x.name.search(input)!==-1){
                
                return x;
            }
        })
        setVol(arr);
        console.log(arr);
    }
    useEffect(()=>{
        setVol(volunteer)
    },[volunteer])
    return (

        <div className="container">
            <SearchBanner inp={input} set={setInput} handle={handleInput}></SearchBanner>
            <div className="row mt-3">
                {
                    vol.map(volunteer => <VolunteerType volunteer={volunteer} key={volunteer._id}></VolunteerType>)
                }
            </div>
        </div>
    );
};

export default Volunteer;