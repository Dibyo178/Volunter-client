import React, { createContext ,useState,useEffect} from 'react';
export const AllDataContext = createContext();
export const DataContext = (props) => {
    const [volunteer, setVolunteer] = useState([])

    useEffect(() => {
        fetch('https://dry-savannah-72207.herokuapp.com/allEvents')
            .then(response => response.json())
            .then(data => setVolunteer(data))
    }, [])
    return (
        <AllDataContext.Provider value={[volunteer,setVolunteer]}>
            {props.children}
        </AllDataContext.Provider>
    );
};

