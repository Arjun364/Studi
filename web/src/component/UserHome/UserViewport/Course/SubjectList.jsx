import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../Config/Firebase';

const SubjectList = ({ sem, onSubClick, }) => {
    const [sublistAr, setSublistAr] = useState([]);
    const [loading, setLoading] = useState(true); // Track whether data is loading
    const [semester, setSemester] = useState(""); // Track whether data is loading

    const handleSubject = (subject) => {
        onSubClick(subject);
        localStorage.setItem("sub", JSON.stringify(subject));
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('sem'));
        if (items) {
          setSemester(items)
        }


        const fetchSubjectlist = async () => {
            try {
                const subjectDocRef = doc(db, "Subject_list", "semesterlist");
                const docSnapshot = await getDoc(subjectDocRef);

                if (docSnapshot.exists()) {
                    const subjectlist = docSnapshot.data();
                    const semarArray = Object.entries(subjectlist).map(([sem, subjects]) => ({
                        sem: sem,
                        subjects: subjects
                    }));
                    setSublistAr(semarArray);
                    console.log(semarArray);
                } else {
                    console.error("Document does not exist:", docSnapshot);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false); // Set loading to false after data is fetched or error occurs
            }
        }

        fetchSubjectlist();
    }, []); // Empty dependency array

    if (loading) {
        return <div>Loading...</div>; // Render loading indicator while data is being fetched
    }

    return (
        <>
            <div className="subjectlist-container">
                <div className="left-section">
                    <h1 className="title">{sem}</h1>
                </div>
                <div className="right-section">
                    <div className="top">
                        <h1 className="title">Subjects</h1>
                    </div>
                    <div className="bottom">
                        <ul>
                            {sublistAr.map(({ sem: semItem, subjects }) => {
                                if (semItem === semester) {
                                    return subjects.map((subject, index) => (
                                        <li className='sub-list' key={index} onClick={() => handleSubject(subject)}>
                                            {subject}
                                        </li>
                                    ));
                                }
                                console.log(semester)
                                return null; // Render nothing if the semester doesn't match
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubjectList;
