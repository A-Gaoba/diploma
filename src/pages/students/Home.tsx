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
    <img
      src={student.image}
      alt={`${student.firstName} ${student.lastName}`}
      className="mb-2 w-32 h-32 object-cover rounded-full bg-dark-purple"
    />
    <p className="text-lg font-semibold">{`${student.firstName} ${student.lastName}`}</p>
    <p className="text-gray-600">{`Class ${student.class}`}</p>
    <p className="text-gray-600">{`ID: ${student.id}`}</p>
    <Link to={`/students/${student.id}`}>
      <button className="mt-2 bg-dark-purple text-white px-4 py-2 rounded hover:bg-blue-600">View</button>
    </Link>
  </div>
);

// Updated Home component
const Home: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;

  const filteredStudents = filter
    ? studentsData.filter((student) => student.class === filter)
    : studentsData;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedStudents = filteredStudents.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handleFilterClick = (selectedFilter: string | null) => {
    setFilter(selectedFilter);
    setCurrentPage(1);
  };

  const showPagination = filteredStudents.length > itemsPerPage;

  return (
    <div>
      {/* Navbar for filtering */}
      <nav className=" ">
        <div className="flex items-center text-white">
          <span className="text-black text-lg font-semibold">Class:</span>
          <button className={`ml-4 bg-dark-purple p-2 rounded-xl ${filter === null ? 'text-dark-purple bg-white' : ''}`} onClick={() => handleFilterClick(null)}>
            All
          </button>
          {["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"].map((classOption) => (
            <button
              key={classOption}
              className={`ml-4 bg-dark-purple p-2 rounded-xl text-sm${filter === classOption ? ' text-dark-purple bg-white' : ''}`}
              onClick={() => handleFilterClick(classOption)}
            >
              {classOption}
            </button>
          ))}
        </div>
      </nav>

      {/* Student cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        {paginatedStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {showPagination && (
        <div className="flex justify-center mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-dark-purple text-white' : 'bg-white'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;