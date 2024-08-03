import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [Counsellor, setCounsellor] = useState('');
  const [Candidate, setCandidate] = useState('');
  const [Status, setStatus] = useState('');
  const [Reason, setReason] = useState('');
  const [IDCcertificate, setIDCcertificate] = useState('');
  const [DikshaName1, setDikshaName1] = useState('');
  const [DikshaName2, setDikshaName2] = useState('');
  const [candidateIndex, setCandidateIndex] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const resetFields = () => {
    setCandidate('');
    setStatus('');
    setReason('');
    setIDCcertificate('');
    setDikshaName1('');
    setDikshaName2('');
    setIsAdded(false);
  };

  const handleAdd = async() => {
    const formData = {
      Counsellor,
      Candidate,
      Status,
      Reason: Status === 'Hold' ? Reason : '',
      IDCcertificate: Status === 'Recommended' ? IDCcertificate : '',
      DikshaName1: Status === 'Recommended' ? DikshaName1 : '',
      DikshaName2: Status === 'Recommended' ? DikshaName2 : '',
    };

    console.log(formData);
    

 await fetch('https://script.google.com/macros/s/AKfycbyDEy-Idf7TuuaxHV823wSjy0GzQZMeThPDgTVl34Wyc9v8M4KWYhptUYDD2bHQwhMvig/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formData
        }),
        mode: "no-cors",
      }).then(response => {
        if (response.ok) {
        toast.success('Data added successfully');
        } else {
          toast.error('Failed to add data');
        }
      }).catch(error => {
        toast.error('Error:', error);
      });
      
  };

  const handleSubmit = () => {
    if (!isAdded) {
      handleAdd();
    } else {
      toast.success('Form submitted successfully');
    }
  };

  return (
    <div className="max-w-md mx-auto sm:p-6 mt-10 p-5 border rounded shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Form</h1>

      <div className="mb-4">
        <label className="block text-gray-700">Counsellor's Name</label>
        <select
          value={Counsellor}
          onChange={(e) => setCounsellor(e.target.value)}
          className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
        >
          <option value="">Select Counsellor</option>
          <option value="Counsellor1">Counsellor 1</option>
          <option value="Counsellor2">Counsellor 2</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">{`Candidate Name-${candidateIndex}`}</label>
        <input
          type="text"
          value={Candidate}
          onChange={(e) => setCandidate(e.target.value)}
          className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Status</label>
        <select
          value={Status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
        >
          <option value="">Select Status</option>
          <option value="Recommended">Recommended</option>
          <option value="Hold">Hold</option>
        </select>
      </div>

      {Status === 'Hold' && (
        <div className="mb-4">
          <label className="block text-gray-700">Give Reasons for Hold</label>
          <textarea
            value={Reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
          />
        </div>
      )}

      {Status === 'Recommended' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">IDC Certificate Uploaded</label>
            <select
              value={IDCcertificate}
              onChange={(e) => setIDCcertificate(e.target.value)}
              className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Suggested Diksha Name-1</label>
            <input
              type="text"
              value={DikshaName1}
              onChange={(e) => setDikshaName1(e.target.value)}
              className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Suggested Diksha Name-2</label>
            <input
              type="text"
              value={DikshaName2}
              onChange={(e) => setDikshaName2(e.target.value)}
              className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
            />
          </div>
        </>
      )}

      <div>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white flex m-auto px-8 py-2 rounded-lg mb-4 transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Add
        </button>
        <li className="text-sm text-center">Note: Click on Add button for multiple entries</li>
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white flex m-auto px-10 py-2 mt-8 rounded transition duration-300 ease-in-out hover:bg-green-700"
        >
          Submit
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Form;
