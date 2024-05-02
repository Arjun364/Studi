import React, { useEffect, useState } from 'react'
import "../../userStyle.css"
import adobeIcon from "../../../../assets/drive-pdf.png"
import downloadIcon from "../../../../assets/download.png"
import backIcon from "../../../../assets/back.svg"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../../Config/Firebase';

const Subject = ({ onBackButtonClick }) => {

    const [selectModule, setSelectModule] = useState(false)
    const [subject, setSubject] = useState()
    const [modulelistAr, setModulelistAr] = useState([])
    const handleSub = () => {

        onBackButtonClick();
    }

    const handleModule=(mod)=>{
        setSelectModule(mod)
        localStorage.setItem("module", JSON.stringify(mod+1));

    }


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('sub'));
        if (items) {
            setSubject(items)
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
        }

        fetchModuleList();
    }, [])

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
                        {/* <div className="modules">Module 2</div>
                <div className="modules">Module 3</div>
                <div className="modules">Module 4</div>
                <div className="modules">Module 5</div>
                <div className="modules">Module 6</div> */}
                    </div>
                </div>
                <div className="subject-details-container">
                    <div className="menulist">
                        <div className="nav">
                            <a className="hovering">Pdf Notes</a>
                            <a className="hovering">Youtube Links</a>
                            <a className="hovering">Prepared Notes</a>
                            <a className="hovering">Comments</a>
                        </div>
                        <hr className='line' />
                    </div>
                    <div className="bottom">
                        <div className="note">
                            <div className="notes">
                                <div className="left-side">
                                    <img src={adobeIcon} alt="Pdf icon" />
                                    <p className="text"> Note 1.pdf</p>
                                </div>
                                <div className="right-side">
                                    <img src={downloadIcon} alt="Download icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Subject
