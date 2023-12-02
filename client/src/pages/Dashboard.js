import React from 'react'
import { Link } from 'react-router-dom'
import HeaderDashboard from '../components/HeaderDashboard'
import Footer from '../components/Footer'
import NoteElement from '../components/NoteElement.js'
import Loading from '../components/Loading.js'
import '../styles/Dashboard.css'
import SEO from '../components/SEO'
import prev from '../assets/icons/prev.svg'
import next from '../assets/icons/next.svg'

const Dashboard = () => {

    const [userD, setUserD] = React.useState({})
    const [currNote, setCurrNote] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [pageOff, setPageOff] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    let username = "";
    React.useEffect(() => {
        try {
            setIsLoading(true);
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
                    if (userD.userName !== undefined) {
                        username = (userD.userName).toLowerCase();
                    }
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
                setIsLoading(false);
        }
        catch (error) {
            console.log(`${error}`);
        }
    }, [page])


    return (
        <div className="Dashboard">
            <SEO
                title=" Dashboard - Noteracy"
                description="Noteracy: Your connected workspace for taking, managing, and organizing notes. Write your thoughts as they come to you, create, update, delete, and search notes effortlessly. A versatile note-taking solution for all your ideas and tasks"
                name="@lamajribbahs"
                image="../assets/icons/icon96.ico" />
            <HeaderDashboard profileUrl = {userD.profileImg}/>
            <Loading
                isloading={isLoading}
                setIsLoading={setIsLoading} />
            <div className="Dashboard-body">
                <div className="Dboard-intro">
                    <h1 className="Heyuser">Hey, {(userD.userName !== undefined) ? (userD.userName).toLowerCase() : "user"}</h1>
                    <Link to="/dashboard/addNote" className="newNotebtn">+ New Note</Link>
                </div>
                <div className="Dboard-notes">
                    {currNote}
                </div>
                <div className={pageOff ? "pagination-off pagination" : "pagination"}>
                    <img className={page === 1 ? "pagination-btn btn-disabled" : "pagination-btn"} disabled={page === 1} onClick={() => { setPage(page - 1) }} src={prev} />
                    <div className="pagination-number">1</div>
                    <div className="pagination-number-curr">{page}</div>
                    <div className="pagination-number">{userD.pages}</div>
                    <img className={page === userD.pages ? "pagination-btn btn-disabled" : "pagination-btn"} disabled={page === userD.pages} onClick={() => { setPage(page + 1) }} src={next} />
                </div>
            </div>
            <Footer clname={"footer"} />
        </div>
    )
}

export default Dashboard