import React from 'react'
import '../styles/ViewNote.css'
import HeaderDashboard from '../components/HeaderDashboard'
import Footer from '../components/Footer'
import ViewNoteBody from '../components/ViewNoteBody'
import { useParams } from 'react-router-dom';
import BASE_URL from '../helper'


const ViewNote = () => {
    const { nId } = useParams();
    const [bd,setBd] = React.useState();
    React.useEffect(() => {
        try {
            fetch(`${BASE_URL}/api/v1/dashboard/item/${nId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
                .then(res => res.json())
                .then(data => {
                    const noteEle = <ViewNoteBody
                    key = {data.note._id}
                    id={data.note._id}
                    title={data.note.title}
                    body={data.note.body}
                    />
                    setBd(noteEle);
                });
        }
        catch (error) {
            console.log(error);
        }
    }, [nId] )
  return (
    <div className = "ViewNote">
        <HeaderDashboard/>
        {bd}
        <Footer clname = {"footer"}/>
    </div>
  )
}

export default ViewNote;