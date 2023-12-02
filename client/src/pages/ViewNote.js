import React from 'react'
import '../styles/ViewNote.css'
import HeaderDashboard from '../components/HeaderDashboard'
import Footer from '../components/Footer'
import ViewNoteBody from '../components/ViewNoteBody'
import Loading from '../components/Loading.js'
import { useParams } from 'react-router-dom';
import BASE_URL from '../helper'
import SEO from '../components/SEO'

const ViewNote = () => {
    const { nId } = useParams();
    const [bd,setBd] = React.useState();
    const [profileImg,setProfileImg] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

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
                    setProfileImg(data.profileImg);
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
        <SEO
                title="View Note - Noteracy"
                description="Noteracy: Your connected workspace for taking, managing, and organizing notes. Write your thoughts as they come to you, create, update, delete, and search notes effortlessly. A versatile note-taking solution for all your ideas and tasks"
                name="@lamajribbahs"
                image="../assets/icons/icon96.ico" />
        <HeaderDashboard profileUrl = {profileImg}/>
        <Loading
                isloading={isLoading}
                setIsLoading={setIsLoading} />
        {bd}
        <Footer clname = {"footer"}/>
    </div>
  )
}

export default ViewNote;