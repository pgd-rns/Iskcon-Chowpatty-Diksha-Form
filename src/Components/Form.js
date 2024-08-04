import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const counsellorOptions = [
  "Abhirāma Dāsa",
  "Adhokṣaja Dāsa",
  "Ādi Keśava Dāsa",
  "Ānanda Gopāla Dāsa",
  "Ānanda Rāma Dāsa",
  "Ānandinī Sundarī Devi Dāsī",
  "Anupama Dāsa",
  "Arvinda Mādhava Dāsa",
  "Bāla Kṛṣṇa Dāsa",
  "Bāla Svarupa Dāsa",
  "Bālajī Govinda Dāsa",
  "Balārāma Ānanda Dāsa",
  "Bhakta Carana Dāsa",
  "Bṛhad Bhāgavata Dāsa",
  "Dāmodara Dāsa",
  "Dāmodara Sakhā Dāsa",
  "Dayālā Candra Dāsa",
  "Dayānidhi Dāsa",
  "Dharmarāja Dāsa",
  "Dvārakādhiṣa Dāsa",
  "Gaura Gopāla Dāsa",
  "Gaura Hari Dāsa",
  "Gaura Naṭarāja Dāsa",
  "Gaurāṅga Dāsa",
  "Gaurāṅga Priyā Dāsa",
  "Girirāja Dāsa",
  "Gopāla Kṛṣṇa Dāsa",
  "Haladhara Priyā Dāsa",
  "Hanumānā Dāsa",
  "Hare Kṛṣṇa Dāsa",
  "Haribol Ānanda Dāsa",
  "Hṛṣīkeśa Ānanda Dāsa",
  "Jagannātha Vallabha Dāsa",
  "Jāhnavā Priyā Devi Dāsī",
  "Jaya Jagadīśa Dāsa",
  "Jaya Kṛṣṇa Dāsa",
  "Kānāi Thākur Dāsa",
  "Kṛṣṇa Caitanya Dāsa",
  "Kṛṣṇa Candra Dāsa",
  "Kṛṣṇa Gaura Dāsa",
  "Kṛṣṇa Gopāla Dāsa",
  "Kṛṣṇa Nāma Dāsa",
  "Līlā Śuka Dāsa",
  "Madana Murāri Dāsa",
  "Mādhava Carana Dāsa",
  "Mādhavānanda Dāsa",
  "Mahājana Dāsa",
  "Mukunda Dāsa",
  "Mukundānanda Dāsa",
  "Murālīdhara Dāsa",
  "Murāri Priyā Devi Dāsī",
  "Nanda Dulāla Dāsa",
  "Navina Gopāla Dāsa",
  "Nitya Kṛṣṇa Dāsa",
  "Nityānanda Carana Dāsa",
  "Pāṇ̣ḍūraṅga Dāsa",
  "Paramahaṃsa Dāsa",
  "Pradyumna Miśrā Dāsa",
  "Prahlāda Priyā Dāsa",
  "Prakāśānanda Dāsa",
  "Prāṇeśvara Dāsa",
  "Puruṣottama Dāsa",
  "Rādhā Dāmodara Dāsa",
  "Rādhā Kānta Dāsa",
  "Rādhā Pati  Dāsa",
  "Rādhikā Ramaṇa Dāsa",
  "Rāma Govinda Dāsa",
  "Rāma Svarūpa Dāsa",
  "Rāmārāja Dāsa",
  "Rāsa Gopāla  Dāsa",
  "Rāsa Parāyaṇa Dāsa",
  "Rāsa Vigraha Dāsa",
  "Rasārāja Gopāla Dāsa",
  "Rasikācārya Dāsa",
  "Rohiṇī Nandana Dāsa",
  "Rohinī̄ Priyā Dāsa",
  "Rudranātha Dāsa",
  "Śacī Jīvana Dāsa",
  "Sahadeva Dāsa",
  "Sanātana Prāṇa Dāsa",
  "Śaṅkara Paṇḍita Dāsa",
  "Satsvarūpa Dāsa",
  "Satyānanda Dāsa",
  "Satyanārāyaṇa Dāsa",
  "Siddha Svarūpa Dāsa",
  "Siddheśvara Dāsa",
  "Sītā Nātha Dāsa",
  "Śrīdāmā Dāsa",
  "Śrīdāmā Sakhā Dāsa",
  "Śrīvāsa Ṭhākura Dāsa",
  "Sundara Caitanya Dāsa",
  "Sundara Rūpa Dāsa",
  "Suresh Sampath Chari",
  "Śyāma Kuṇḍa Dāsa",
  "Tulāsī Mañjarī Devi Dāsī",
  "Umeśa Candra Dāsa",
  "Upendra Dāsa",
  "Vallabha Caitanya Dāsa",
  "Vamsi Gopāla Dāsa",
  "Veda Māta Devi Dāsī",
  "Vijaya Govinda Dāsa",
  "Viśvarūpa Dāsa",
  "Vraja Mohana Dāsa",
  "Vraja Vallabha Dāsa",
  "Yudhiṣṭhira Dāsa",
  "Yugāvatāra Dāsa",
];

const Form = () => {
  const [forms, setForms] = useState([
    {
      Counsellor: "",
      Candidate: "",
      DID: "",
      Status: "",
      Reason: "",
      IDCcertificate: "",
      DikshaName1: "",
      DikshaName2: "",
      isAdded: false,
      isEditable: true,
    },
  ]);

  const navigate = useNavigate();

  const resetFields = (counsellor) => ({
    Counsellor: counsellor,
    Candidate: "",
    DID: "",
    Status: "",
    Reason: "",
    IDCcertificate: "",
    DikshaName1: "",
    DikshaName2: "",
    isAdded: false,
    isEditable: true,
  });

  const validateForm = (form) => {
    if (!form.Counsellor || !form.Candidate || !form.DID || !form.Status) {
      return false;
    }
    return true;
  };

  const handleAdd = async (index) => {
    const formData = forms[index];
    if (!validateForm(formData)) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwA41ZKljd0LsqJ0Ro6ef1egJ5xU2NeyuIWkLt1mDEq5S4LldYMEyBsTHXJdwtOUm1I/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formData,
          }),
          mode: "no-cors",
        }
      );
      toast.success(`Member added successfully`);
      setForms((prevForms) => {
        const updatedForms = [...prevForms];
        updatedForms[index].isAdded = true;
        updatedForms[index].isEditable = false;
        const lastCounsellor = prevForms[prevForms.length - 1].Counsellor;
        updatedForms.push(resetFields(lastCounsellor));
        return updatedForms;
      });
    } catch (error) {
      toast.error("Error:", error);
    }
  };

  const handleSubmit = async () => {
    const formData = forms[forms.length - 1];
    if (!validateForm(formData)) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwA41ZKljd0LsqJ0Ro6ef1egJ5xU2NeyuIWkLt1mDEq5S4LldYMEyBsTHXJdwtOUm1I/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formData,
          }),
          mode: "no-cors",
        }
      );
      toast.success("Form submitted successfully");
      navigate("/thankyou");
    } catch (error) {
      toast.error("Error:", error);
    }
  };

  const handleChange = (index, field, value) => {
    setForms((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms[index][field] = value;
      return updatedForms;
    });
  };

  return (
    <div className="max-w-full mx-auto sm:p-6 mt-10 p-5 border rounded shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Member Form Submission
      </h1>

      <div className="mb-4">
        <label className="block text-gray-700">Counsellor's Name</label>
        <select
          value={forms[0].Counsellor}
          onChange={(e) => {
            const newCounsellor = e.target.value;
            setForms((prevForms) => {
              const updatedForms = prevForms.map((form) => ({
                ...form,
                Counsellor: newCounsellor,
              }));
              return updatedForms;
            });
          }}
          className="form-select mt-1 block w-full"
        >
          <option value="">Select Counsellor</option>
          {counsellorOptions.map((name, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {forms.map((form, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row lg:space-x-4 ${
            !form.isEditable ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <div className="mb-4 flex-1 lg:w-1/5">
            <label className="block text-gray-700">{`Candidate Name-${
              index + 1
            }`}</label>
            <input
              type="text"
              value={form.Candidate}
              onChange={(e) => handleChange(index, "Candidate", e.target.value)}
              className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
            />
          </div>

          <div className="mb-4 flex-1 lg:w-1/5">
            <label className="block text-gray-700">DID</label>
            <input
              type="text"
              value={form.DID}
              onChange={(e) => handleChange(index, "DID", e.target.value)}
              className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
            />
          </div>

          <div className="mb-4 flex-1 lg:w-1/5">
            <label className="block text-gray-700">Status</label>
            <select
              value={form.Status}
              onChange={(e) => handleChange(index, "Status", e.target.value)}
              className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
            >
              <option value="">Select Status</option>
              <option value="Recommended">Recommended</option>
              <option value="Hold">Hold</option>
            </select>
          </div>

          {form.Status === "Hold" && (
            <div className="mb-4 flex-1 lg:w-1/5">
              <label className="block text-gray-700">
                Give Reasons for Hold
              </label>
              <textarea
                value={form.Reason}
                onChange={(e) => handleChange(index, "Reason", e.target.value)}
                className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
              />
            </div>
          )}

          {form.Status === "Recommended" && (
            <>
              <div className="mb-4 flex-1 lg:w-1/5">
                <label className="block text-gray-700">
                  IDC Certificate Uploaded
                </label>
                <select
                  value={form.IDCcertificate}
                  onChange={(e) =>
                    handleChange(index, "IDCcertificate", e.target.value)
                  }
                  className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mb-4 flex-1 lg:w-1/5">
                <label className="block text-gray-700">
                  Suggested Diksha Name-1
                </label>
                <input
                  type="text"
                  value={form.DikshaName1}
                  onChange={(e) =>
                    handleChange(index, "DikshaName1", e.target.value)
                  }
                  className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
                />
              </div>
              <div className="mb-4 flex-1 lg:w-1/5">
                <label className="block text-gray-700">
                  Suggested Diksha Name-2
                </label>
                <input
                  type="text"
                  value={form.DikshaName2}
                  onChange={(e) =>
                    handleChange(index, "DikshaName2", e.target.value)
                  }
                  className="w-full border px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-100"
                />
              </div>
            </>
          )}
          <div className="flex justify-center lg:justify-end py-1 mb-5 mt-5">
            <button
              onClick={() => handleAdd(forms.length - 1)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700"
            >
              Add Member
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-8">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-8 py-2 rounded transition duration-300 ease-in-out hover:bg-green-700"
        >
          Submit
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Form;
