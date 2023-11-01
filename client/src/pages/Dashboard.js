import React from 'react'
import { Link } from 'react-router-dom'
import HeaderDashboard from '../components/HeaderDashboard'
import Footer from '../components/Footer'
import NoteElement from '../components/NoteElement.js'
import '../styles/Dashboard.css'


const Dashboard = () => {

    const [userD, setUserD] = React.useState({})
    const [currNote, setCurrNote] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [pageOff, setPageOff] = React.useState(false);

    React.useEffect(() => {
        try {
            fetch(`/api/v1/dashboard?page=${page}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
                .then(res => res.json())
                .then(data => {
                    setUserD(data);

                    if (data.notes.length > 0) {
                        const noteElements = data.notes.map((note) => (
                            <NoteElement
                                key={note._id}
                                id={note._id}
                                title={note.title}
                                body={note.body}
                            />
                        ));
                        setCurrNote(noteElements);
                    }
                    else {
                        setPageOff(true);
                        setCurrNote(
                            <div className="Dboard-new-notes">
                                <h2 className="Dboard-new-msg"> let's start with you first Note</h2>
                                <Link to="/dashboard/addNote" className="newNotebtn">Create One!</Link>
                            </div>
                        )
                    }
                });
        }
        catch (error) {
            console.log(`${error}`);
        }
    }, [page])


    return (
        <div className="Dashboard">
            <HeaderDashboard />
            <div className="Dashboard-body">
                <div className="Dboard-intro">
                    <h1 className="Heyuser"> Hey, {userD.userName}</h1>
                    <Link to="/dashboard/addNote" className="newNotebtn">+ New Note</Link>
                </div>
                <div className="Dboard-notes">
                    {currNote}
                </div>
                <div className={pageOff ? "pagination-off pagination" : "pagination"}>
                    <button className={page === 1 ? "pagination-btn btn-disabled" : "pagination-btn"} disabled={page === 1} onClick={() => { setPage(page - 1) }}>Previous</button>
                    <button className={page === userD.pages ? "pagination-btn btn-disabled" : "pagination-btn"} disabled={page === userD.pages} onClick={() => { setPage(page + 1) }}>Next</button>
                </div>
            </div>
            <Footer clname={"footer"} />
        </div>
    )
}

export default Dashboard