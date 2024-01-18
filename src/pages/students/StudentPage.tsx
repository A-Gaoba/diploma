import React from 'react';
import { useParams } from 'react-router-dom';
import { studentsData } from '../../data/index';


interface PersonalInfoProps {
  label: string;
  value: string | number;
}
interface AcademicInfoProps {
  label: string;
  value: string | number;
}

const AcademicInfo: React.FC<AcademicInfoProps> = ({ label, value }) => (
  <p className="mb-2 md:text-base text-sm">
    <strong>{label}:</strong> {value}
  </p>
);

interface PersonalInfoProps {
  label: string;
  value: string | number;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ label, value }) => (
  <p className="mb-2 text-sm md:text-base">
    <strong className="text-gray-700">{label}:</strong> {value}
  </p>
);

const StudentPage: React.FC = () => {
  const attendanceInfo = {
    totalClassesAttended: 25,
    attendancePercentage: 80,
  };

  const { id } = useParams<{ id?: string }>();
  const student = studentsData.find((s) => s.id === parseInt(id || '', 10));

  if (!id || !student) {
    return <div className="text-red-500">{!id ? 'Invalid student ID' : 'Student not found'}</div>;
  }

  return (
    <div className="md:p-8 bg-gray-100">
      <h1 className="md:text-3xl font-bold mb-4">{`${student.firstName} ${student.lastName}'s Profile`}</h1>

      {/* Personal Information */}
      <section className="mb-8 bg-white p-6 rounded-md shadow-md">
        <h2 className="md:text-xl font-semibold mb-2">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <img
              src={student.image}
              alt={`${student.firstName} ${student.lastName}`}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-3xl bg-slate-300"
            />
          </div>
          <div>
            <PersonalInfo label="Full Name" value={`${student.firstName} ${student.lastName}`} />
            <PersonalInfo label="Date of Birth" value={student.dateOfBirth} />
            <PersonalInfo label="Email" value={student.email} />
          </div>
          <div>
            <PersonalInfo label="Phone Number" value={student.phoneNumber} />
            <PersonalInfo label="Address" value={student.address} />
          </div>
        </div>
      </section>

      {/* Academic Information */}
      <section className="mb-8 bg-white p-6 rounded-md shadow-md">
        <h2 className="md:text-xl font-semibold mb-2">Academic Information</h2>
        <PersonalInfo label="Student ID" value={student.id} />
        <PersonalInfo label="Class/Grade Level" value={`Class ${student.grade}`} />
      </section>

      {/* Attendance Information */}
      <section className="mb-8 bg-white p-6 rounded-md shadow-md">
        <h2 className="md:text-xl font-semibold mb-2">Attendance Information</h2>
        <AcademicInfo label="Total Classes Attended" value={attendanceInfo.totalClassesAttended} />
        <AcademicInfo label="Attendance Percentage" value={`${attendanceInfo.attendancePercentage}%`} />
      </section>
    </div>
  );
};

export default StudentPage;
