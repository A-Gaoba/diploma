// AttendanceComponent.tsx

import React, { useState } from "react";
import { StudentPageProps, studentsData } from "../../data/index";

interface Class {
  id: number;
  name: string;
  students: StudentPageProps[];
}

const generateClasses = (): Class[] => {
  const uniqueClasses = [...new Set(studentsData.map(student => student.class))];

  return uniqueClasses.map((className, index) => {
    const filteredStudents = studentsData.filter(student => student.class === className);

    return {
      id: index + 1,
      name: className || `Class ${index + 1}`, // Provide a default value if className is undefined
      students: filteredStudents,
    };
  });
};

const months: string[] = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const AttendanceComponent: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());

  const handleClassChange = (classId: number) => {
    const selected = classes.find((c) => c.id === classId);
    setSelectedClass(selected || null);
  };

  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
  };

  const handleCheckboxChange = (studentId: number) => {
    // Implement your logic to update attendance data
    console.log(`Class ${selectedClass?.name}, Month ${months[selectedMonth]}, Student ${studentId}`);
  };

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const classes = generateClasses();

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="mb-4">
        <label htmlFor="classDropdown" className="mr-2">Select Class:</label>
        <select
          id="classDropdown"
          className="p-2 border border-gray-300 rounded"
          onChange={(e) => handleClassChange(Number(e.target.value))}
          aria-label="Select Class"
        >
          <option value="">Select Class</option>
          {classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {selectedClass && (
        <div>
          <h2 className="text-2xl font-bold mb-4">{selectedClass.name}</h2>
          <div className="flex items-center mb-4">
            <label htmlFor="monthDropdown" className="mr-2">Select Month:</label>
            <select
              id="monthDropdown"
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => handleMonthChange(Number(e.target.value))}
              value={selectedMonth}
              aria-label="Select Month"
            >
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <table className="w-full border border-collapse border-gray-300">
            <thead>
              <tr>
                <th className="border p-2">Name</th>
                {[...Array(getDaysInMonth(new Date().getFullYear(), selectedMonth))].map((_, index) => (
                  <th key={index} className="border p-2">
                    {index + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {selectedClass.students.map((student) => (
                <tr key={student.id}>
                  <td className="border p-2">{student.firstName} {student.lastName}</td>
                  {[...Array(getDaysInMonth(new Date().getFullYear(), selectedMonth))].map((_, day) => (
                    <td key={day} className="border p-2">
                      <label>
                        <input
                          type="checkbox"
                          onChange={() => handleCheckboxChange(student.id)}
                        />
                      </label>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AttendanceComponent;