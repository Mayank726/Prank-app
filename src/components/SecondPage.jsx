import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router';

const SecondPage = () => {

  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [rollCode, setRollCode] = useState('');
  const [rollNo, setRollNo] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !fatherName || !schoolName || !rollCode || !rollNo) {
      alert('please fill the all fields');
      return
    }

    const studentData = {
      name,
      fatherName,
      schoolName,
      rollCode,
      rollNo,
    }

    localStorage.setItem('studentData', JSON.stringify(studentData));

    navigate('/result');
  }

  return (
    <>
      <div className='flex flex-col justify-start h-screen items-center'>
        <img className='max-w-full h-auto' src="/biharlogo.png" alt="" />
        <h3 style={{color: '#a94442'}} className='text-[24px] font-[500] mt-10 underline '>:- ANNUAL SECONDARY SCHOOL EXAMINATION RESULT, 2025 :-</h3>

        <form onSubmit={handleSubmit} className='flex flex-col mt-8 gap-5'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' style={{border: 'solid black 1px', borderRadius: '4px'}} className='h-5 w-80 p-4'/>


            <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} placeholder="Enter Your Father's Name" style={{border: 'solid black 1px', borderRadius: '4px'}} className='h-5 w-80 p-4'/>


            <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} placeholder='Enter Your School Name' style={{border: 'solid black 1px', borderRadius: '4px'}} className='h-5 w-80 p-4'/>


            <input type="number" value={rollCode} onChange={(e) => setRollCode(e.target.value)} placeholder='Enter Roll Code' style={{border: 'solid black 1px', borderRadius: '4px'}} className='h-5 w-80 p-4' />


            <input type="number" value={rollNo} onChange={(e) => setRollNo(e.target.value)} placeholder='Enter Roll No' style={{border: 'solid black 1px', borderRadius: '4px'}} className='h-5 w-80 p-4 mt-0.5' />

            <button type='submit' style={{background: '#d9534f'}} className='ml-20' >Search Result</button>
        </form>
      </div>
    </>
    
  )
}

export default SecondPage

