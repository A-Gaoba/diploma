// src/components/StudentPage.tsx
import React from 'react';
import { studentsData, Student } from '../../data/index';

interface StudentPageProps {
  student: Student;
}

const StudentPage: React.FC<StudentPageProps> = ({ student }) => (
  <div>
    <h1>{`${student.firstName} ${student.lastName}'s Profile`}</h1>
    <div>
      <img src={student.image} alt={`${student.firstName} ${student.lastName}`} className="w-64 h-64 object-cover rounded-full mb-4" />
      <p>About: ...</p>
      {/* <p>Email: {student.email}</p> */}
      <p>Class: {`Class ${student.grade}`}</p>
      {/* Add more information as needed */}
    </div>
  </div>
);

export default StudentPage;
