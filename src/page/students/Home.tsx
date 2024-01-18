// Home.tsx
import React, { useState } from 'react';
import { studentsData, StudentPageProps } from '../../data/index';
import { Link } from 'react-router-dom';
// import logo from "../../assets/image.jpg"


interface StudentCardProps {
  student: StudentPageProps;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => (
  <div className="border p-4 flex flex-col justify-center items-center">
    <img src={student.image} alt={`${student.firstName} ${student.lastName}`} className="mb-2 w-32 h-32 object-cover rounded-full" />
    <p className="text-lg font-semibold">{`${student.firstName} ${student.lastName}`}</p>
    <p className="text-gray-600">{`Class ${student.grade}`}</p>
    <p className="text-gray-600">{`ID: ${student.id}`}</p>
    <Link to={`/students/${student.id}`}>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View</button>
    </Link>
  </div>
);

const Home: React.FC = () => {
  const [filter, setFilter] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  const filteredStudents = filter
    ? studentsData.filter((student) => student.grade === filter)
    : studentsData;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedStudents = filteredStudents.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handleFilterClick = (selectedFilter: number | null) => {
    setFilter(selectedFilter);
    setCurrentPage(1); // Reset page when changing the filter
  };

  return (
    <div>
      {/* Navbar for filtering */}
      <nav className="bg-white p-4 ">
        <div className="flex items-center">
          <span className="text-black text-lg font-semibold">Filter by Grade:</span>
          <button className={`ml-4 ${filter === null ? 'font-bold' : ''}`} onClick={() => handleFilterClick(null)}>
            All
          </button>
          {[...Array(12).keys()].map((grade) => (
            <button
              key={grade}
              className={`ml-4 ${filter === grade + 1 ? 'font-bold' : ''}`}
              onClick={() => handleFilterClick(grade + 1)}
            >
              {grade + 1}
            </button>
          ))}
        </div>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        {paginatedStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 mx-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
