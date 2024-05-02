import React, { useEffect, useState } from 'react';
import "../../userStyle.css";
import adobeIcon from "../../../../assets/drive-pdf.png";
import downloadIcon from "../../../../assets/download.png";
import backIcon from "../../../../assets/back.svg";
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../Config/Firebase';

const Subject = ({ onBackButtonClick }) => {
    const [selectModule, setSelectModule] = useState(false);
    const [subject, setSubject] = useState("");
    const [semester, setSemester] = useState("");
    const [module, setModule] = useState("");
    const [noteData, setNoteData] = useState([]);
    const [modulelistAr, setModulelistAr] = useState([]);

    const handleSub = () => {
        localStorage.setItem("module", JSON.stringify(0));
        localStorage.setItem("sub", JSON.stringify(""));
        localStorage.setItem("sem", JSON.stringify(""));
        onBackButtonClick();
    };

    const handleModule = (mod) => {
        setSelectModule(mod);
        localStorage.setItem("module", JSON.stringify(mod + 1));
        setModule(mod+1)
    };

    useEffect(() => {
        const sub = JSON.parse(localStorage.getItem('sub'));
        if (sub) {
            setSubject(sub);
        }

        const semester = JSON.parse(localStorage.getItem('sem'));
        if (semester) {
            setSemester(semester);
        }

        // Update module state from localStorage
        const moduleFromLocalStorage = JSON.parse(localStorage.getItem('module'));
        if (moduleFromLocalStorage) {
            // setModule(moduleFromLocalStorage);
        }

        const fetchModuleList = async () => {
            try {
                const moduleDocRef = doc(db, "Subject_list", "Modulelist");
                const docSnapshot = await getDoc(moduleDocRef);
                if (docSnapshot.exists()) {
                    const modulelist = docSnapshot.data();
                    const moduleArray = Object.entries(modulelist).map(([subject, module]) => ({
                        subject: subject,
                        module: module
                    }));
                    setModulelistAr(moduleArray);
                } else {
                    console.error("Document does not exist:", docSnapshot);
                }
            } catch (err) {
                console.error(err);
            }
        };

        const fetchNotes = async () => {
            try {
                const noteQuery = query(
                    collection(db, "StudyMaterials"),
                    where("semester", "==", semester),
                    where("subject", "==", subject), // Use subject instead of sub
                    where("module", "==", module),
                );
        
                const querySnapshot = await getDocs(noteQuery);
        
                const notesData = querySnapshot.docs.map(doc => doc.data());
        
                setNoteData(notesData);
                localStorage.setItem("notesData", JSON.stringify(notesData));
                console.log("fetched notes: ", notesData);
            } catch (err) {
                console.error("error fetching the notes", err);
            }
        };
        
        fetchNotes();
        fetchModuleList();
    }, [semester, subject, module]);

    return (
        <>
            <div className="subjects">
                <div className="subject-name-container">
                    <div className="top-section">
                        <div className="title"><img src={backIcon} alt="back" onClick={handleSub} />{subject}</div>
                        <hr className="line" />
                    </div>
                    <div className="bottom-section">
                        {modulelistAr.map(({ subject: subItem, module }) => {
                            if (subItem === subject) {
                                return module.map((mod, idx) => (
                                    <div
                                        key={idx}
                                        className={`modules ${selectModule === idx ? 'modules module-active' : 'modules'}`}
                                        onClick={() => handleModule(idx)}
                                    >
                                        Module {mod}
                                    </div>
                                ));
                            }
                            return null;
                        })}
                    </div>
                </div>
                <div className="subject-details-container">
                    <div className="menulist">
                        <div className="nav">
                            <a className="hovering">Pdf Notes</a>
                        </div>
                        <hr className='line' />
                    </div>
                    <div className="bottom">
                        <div className="notes">
                            {noteData.map((note, index) => (
                                <a key={index} className="note" href={note.resourceLink || note.resourceLink } target='blank'>
                                    <div className="left-side">
                                        <img src={adobeIcon} alt="Pdf icon" />
                                        <p className="text">Note {index+1}</p>
                                    </div>
                                    <div className="right-side">
                                        <img src={downloadIcon} alt="Download icon" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subject;
