import React, { useEffect, useState } from 'react';
import Semester from './Semester';
import SubjectList from './SubjectList';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../Config/Firebase';

const Studymaterial = ({ onSubClick }) => {
  const [state, setState] = useState(true);
  const [select, setSelect] = useState(null);
  const [semar, setSemar] = useState([]);
  const [semester, setSemester] = useState(null);

  const handleClick = (sem) => {
    setState(!state);
    setSelect(sem);
    localStorage.setItem("sem", JSON.stringify(sem));
  }

  useEffect(() => {
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
          setSemar(semarArray);



        } else {
          console.error("Document does not exist:", docSnapshot);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchSubjectlist();
  }, []);

  return (
    <>
      <div className="studymaterial-container">
        <div className="top-section">
          <h1 className="title">Study materials</h1>
          <hr className="line" />
        </div>
        <div className="bottom-section">
          {state ? (
            semar.map(({ sem }) => {

              return (
                <div key={sem} onClick={() => handleClick(sem)}>
                  {}
                  <Semester sem={sem} />
                </div>
              );
            })

          ) : (
            <SubjectList sem={select} semester={semester} onSubClick={onSubClick} />
          )}
        </div>
      </div>
    </>
  );
}

export default Studymaterial;
