import React from 'react'
import HeaderDashboard from '../components/HeaderDashboard'
import { useParams } from 'react-router-dom'
import SearchRes from '../components/SearchRes'
import BASE_URL from '../helper'

const SearchNote = () => {
    const { query } = useParams();
    const [res, setRes] = React.useState();
    React.useEffect(() => {
        try {
            fetch(`${BASE_URL}/api/v1/dashboard/search`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    searchTerm: query
                }),
                credentials: "include"
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data !== undefined && data.notes.length > 0) {
                        const sRes = data.notes.map((note) => {
                            return <SearchRes
                                key={note._id}
                                id={note._id}
                                title={note.title}
                            />
                        })
                            setRes(sRes);
                    }
                    else {
                        console.log("error in search result formation")
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }, [query]);

    return (
        <div className="searchNote">
            <HeaderDashboard/>
            <div className="searchResult">
                {res}
            </div>
        </div>
    )
}

export default SearchNote