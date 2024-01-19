export interface StudentPageProps {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  address: string;
  grade: number;
  class?: string;
  city: string;
  image: string;
}

export const studentsData: StudentPageProps[] = [
  // Grade 1
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    dateOfBirth: "2015-09-05",
    email: "alice.johnson@example.com",
    phoneNumber: "555-123-4567",
    address: "789 Pine St, Villagetown",
    grade: 1,
    class: "Class 1",
    city: "Villagetown",
    image: "https://source.unsplash.com/64x64/?student=diana",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Williams",
    dateOfBirth: "2015-11-12",
    email: "bob.williams@example.com",
    phoneNumber: "333-555-7890",
    address: "101 Elm St, Suburbia",
    grade: 1,
    class: "Class 1",
    city: "Suburbia",
    image: "https://source.unsplash.com/64x64/?student=alice",
  },

  // Grade 2
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Smith",
    dateOfBirth: "2014-08-22",
    email: "charlie.smith@example.com",
    phoneNumber: "987-654-3210",
    address: "456 Oak St, Townsville",
    grade: 2,
    class: "Class 2",
    city: "Townsville",
    image: "https://source.unsplash.com/64x64/?student=bob",
  },
  {
    id: 4,
    firstName: "Diana",
    lastName: "Brown",
    dateOfBirth: "2014-05-15",
    email: "diana.brown@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Cityville",
    grade: 2,
    class: "Class 2",
    city: "Cityville",
    image: "https://source.unsplash.com/64x64/?student=charlie",
  },

  // Grade 3
  {
    id: 5,
    firstName: "Ethan",
    lastName: "Miller",
    dateOfBirth: "2013-03-10",
    email: "ethan.miller@example.com",
    phoneNumber: "555-987-6543",
    address: "456 Birch St, Countryside",
    grade: 3,
    class: "Class 3",
    city: "Countryside",
    image: "https://source.unsplash.com/64x64/?student",
  },
  {
    id: 6,
    firstName: "Fiona",
    lastName: "Taylor",
    dateOfBirth: "2013-07-18",
    email: "fiona.taylor@example.com",
    phoneNumber: "789-456-1230",
    address: "789 Willow St, Meadowland",
    grade: 4,
    class: "Class 4",
    city: "Meadowland",
    image: "https://source.unsplash.com/64x64/?student",
  },

  // ... (rest of the data, including additional fields)
];
