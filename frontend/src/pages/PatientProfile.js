import { useEffect, useState } from 'react';
import { usePatientContext } from '../hooks/usePatientContext';
import { SET_PATIENTS } from '../context/patientContextDeclarations';
import { useParams } from 'react-router-dom';

// components
import PatientDetails from '../components/PatientComponents/PatientDetails';

const PatientProfile = () => {
  const { patients, dispatch } = usePatientContext();
  const { id } = useParams();

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch('/api/patients/');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: SET_PATIENTS, payload: json });
      }
    };

    fetchPatients();
  }, []);

  const patient =
    patients && patients.filter((patient) => patient._id === id)[0];

  return (
    <div className="patient-profile">
      {patient ? <PatientDetails patient={patient} /> : <div>Loading...</div>}
    </div>
  );
};
export default PatientProfile;
