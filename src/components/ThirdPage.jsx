import React, { useEffect, useState } from "react";

const ThirdPage = () => {

  const studentData = JSON.parse(localStorage.getItem('studentData'));
  console.log(studentData);

  const [hindi, setHindi] = useState(0);
  const [sanskrit, setSanskrit] = useState(0);
  const [math, setMath] = useState(0);
  const [science, setScience] = useState(0);
  const [social, setSocial] = useState(0);
  const [eng, setEng] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getRandomMarks = () => Math.floor(Math.random() * (100 - 60 + 1)) + 60;

    const hindiMarks = getRandomMarks();
    const sansMarks = getRandomMarks();
    const mathMarks = getRandomMarks();
    const sciMarks = getRandomMarks();
    const socMarks = getRandomMarks();
    const engMarks = getRandomMarks();

    setHindi(hindiMarks);
    setSanskrit(sansMarks);
    setMath(mathMarks);
    setScience(sciMarks);
    setSocial(socMarks);
    setEng(engMarks);

    setTotal(hindiMarks + sansMarks + mathMarks + sciMarks + socMarks)
  }, [])



  return (
    <>
      <div  className="h-full w-full max-w-md border-2 border-black mx-auto p-2">
        <div className="flex flex-col md:flex-row justify-start items-center relative ">
          <img
            className="h-20 w-20 object-contain ml-4"
            src="/bseb-logo.jpg"
            alt=""
          />
          <span
            style={{ color: "#a94442" }}
            className="font-bold text-[14px] md:text-[18px] text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
          >
            Bihar School Examination Board
            <br />
            RESULT
            <br />
            ANNUAL SECONDARY EXAMINATION-2025
          </span>
          <br />
        </div>
        <hr />

        <div className=''>
          <table className=" table-auto border border-b-gray-700 w-full">
            <thead>
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-1xl text-left whitespace-nowrap">
                  BSEB Unique Id
                </th>
                <th className="border text-left pl-2 ">1234555</th>
              </tr>
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-1xl text-left">
                  Student Name
                </th>
                <th className="border text-left pl-2">{studentData.name}</th>
              </tr>
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left ">
                  Father Name
                </th>
                <th className="border text-left pl-2">{studentData.fatherName}</th>
              </tr>
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">
                  School Name
                </th>
                <th className="text-left pl-2 ">
                  {studentData.schoolName}
                </th>
              </tr>
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left ">
                  Roll Code
                </th>
                <th className="border text-left pl-2 ">{studentData.rollCode}</th>
              </tr>
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left ">
                  Roll No
                </th>
                <th className="border text-left pl-2 ">{studentData.rollNo}</th>
              </tr>
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left ">
                  Registration No
                </th>
                <th className="border text-left pl-2 ">43036-00225-78</th>
              </tr>
            </thead>
            
          </table>
        </div>

        <div className="flex justify-center items-center w-auto h-10 bg-amber-500">
          <h3 className=" text-[16px] md:text-[18px]">Mark Details</h3>
        </div>

        <div className='overflow-x-auto'>
          <table className="min-w-[900px] table-auto border border-b-gray-700 w-full">
            <thead>
              <tr>
                <th className="border border-gray-700 px-4 py-2 whitespace-nowrap">Subject</th>
                <th className="border border-gray-700 px-4 py-2 whitespace-nowrap">F.Marks</th>
                <th className="border border-gray-700 px-4 py-2 whitespace-nowrap">P.Marks</th>
                <th className="border border-gray-700 px-4 py-2 whitespace-nowrap">Theory</th>
                <th className="border border-gray-700 px-4 py-2 whitespace-nowrap">INT/PRAC</th>
                <th className="border border-gray-700 px-4 py-2 whitespace-nowrap">Regulation</th>
                <th className="border border-gray-700 px-4 py-2 whitespace-nowrap">
                  Subject Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border whitespace-nowrap">M.I.L HINDI</th>
                <th className="border whitespace-nowrap">100</th>
                <th className="border whitespace-nowrap">030</th>
                <th className="border whitespace-nowrap">{hindi}</th>
                <th className="border whitespace-nowrap">-</th>
                <th className="border whitespace-nowrap">-</th>
                <th className="border whitespace-nowrap">{hindi}</th>
              </tr>

              <tr>
                <th className="border whitespace-nowrap">S.I.L SANSKRIT</th>
                <th className="border whitespace-nowrap">100</th>
                <th className="border whitespace-nowrap">030</th>
                <th className="border whitespace-nowrap">{sanskrit}</th>
                <th className="border whitespace-nowrap">-</th>
                <th className="border whitespace-nowrap">-</th>
                <th className="border whitespace-nowrap">{sanskrit}</th>
              </tr>
              <tr>
                <th className="border whitespace-nowrap">MATHEMATICS</th>
                <th className="border whitespace-nowrap">100</th>
                <th className="border whitespace-nowrap">030</th>
                <th className="border whitespace-nowrap">{math}</th>
                <th className="border whitespace-nowrap">-</th>
                <th className="border whitespace-nowrap">-</th>
                <th className="border whitespace-nowrap">{math}</th>
              </tr>
              <tr>
                <th className="border whitespace-nowrap">SCIENCE</th>
                <th className="border whitespace-nowrap">100</th>
                <th className="border whitespace-nowrap">030</th>
                <th className="border whitespace-nowrap">{science}</th>
                <th className="border whitespace-nowrap">020</th>
                <th className="border whitespace-nowrap">-</th>
                <th className="border whitespace-nowrap">{science}</th>
              </tr>
              <tr>
                <th className="border whitespace-nowrap">SOCIAL SCIENCE</th>
                <th className="border whitespace-nowrap">100</th>
                <th className="border whitespace-nowrap">030</th>
                <th className="border whitespace-nowrap">{social}</th>
                <th className="border whitespace-nowrap">010 + 010</th>
                <th className="border whitespace-nowrap">-</th>
                <th className="border whitespace-nowrap">{social}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center w-auto h-10 text-[18px]">
          <h4>Final Result</h4>
        </div>

        <div className='overflow-x-auto'>
          <table className="min-w-[900px] table-auto border border-b-gray-700 w-full">
            <tr>
              <th className="border whitespace-nowrap">Result/Division</th>
              <th className="border whitespace-nowrap">1st Division</th>
              <th className="whitespace-nowrap">Total Marks:</th>
              <th className="whitespace-nowrap">{total}</th>
            </tr>
          </table>
        </div>

        <div className='overflow-x-auto'>
          <table className="min-w-[900px] table-auto border border-b-gray-700 w-full">
            <tr>
              <th className="border whitespace-nowrap">ENGLISH</th>
              <th className="border whitespace-nowrap">100</th>
              <th className="border whitespace-nowrap">030</th>
              <th className="border whitespace-nowrap">{eng}</th>
              <th className="border whitespace-nowrap">-</th>
              <th className="border whitespace-nowrap">-</th>
              <th className="border whitespace-nowrap">{eng}</th>
            </tr>
          </table>
        </div>
        <hr />
        <div className="flex flex-row justify-center items-center overflow-x-auto">
          <p>F :- Fail</p>
          <p>C :- Compartmental</p>
          <p>B :- Betterment</p>
          <p>U/R :- Under Regulation</p>
          <p>Abs :- Absent</p>
          <p>Int :- Internal</p>
          <p>PRAC :- Practical</p>
          <p>CCE :- Continous and Comprehensive Evaluation </p>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
