interface MenuItem {
  title: string;
  src: string;
  path: string;
  subMenuItem?: MenuItem[];
  gap?: boolean;
  submenu?: boolean; // Make it optional
  isOpen?: boolean;
}

const Menus: MenuItem[] = [
  { title: "Dashboard", src: "dashboard", path: "/", submenu: false },
  {
    title: "Teachers",
    src: "teacher",
    path: "/teachers",
    submenu: true,
    subMenuItem: [
      { title: "List of Teachers", src: "student", path: "/teachers/list" },
      { title: "Add Teacher", src: "student", path: "/teachers/add" },
    ],
  },
  {
    title: "Students",
    src: "student",
    path: "/students",
    submenu: true,
    subMenuItem: [
      { title: "List of Students", src: "student", path: "/students/list" },
      { title: "Add Student", src: "student", path: "/students/add" },
    ],
  },
  { title: "Classes", src: "class", path: "/classes", submenu: false },
  { title: "Subjects", src: "subject", path: "/subjects", submenu: false },
  {
    title: "Attendance",
    src: "attendance",
    path: "/attendance",
    submenu: false,
  },
  { title: "Exams", src: "exam", path: "/exams", submenu: false },
  { title: "Settings", src: "Setting", path: "/settings", submenu: false },
  {
    title: "Log out",
    src: "logout",
    path: "/login",
    gap: true,
    submenu: false,
  }, // Add submenu property
];

export interface StudentPageProps {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  address: string;
  grade: number;
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
    grade: 3,
    image: "https://source.unsplash.com/64x64/?student",
  },

  // Grade 4
  {
    id: 7,
    firstName: "Grace",
    lastName: "Anderson",
    dateOfBirth: "2012-02-28",
    email: "grace.anderson@example.com",
    phoneNumber: "555-789-0123",
    address: "987 Maple St, Hilltop",
    grade: 4,
    image: "https://source.unsplash.com/64x64/?student",
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Martin",
    dateOfBirth: "2012-06-15",
    email: "henry.martin@example.com",
    phoneNumber: "456-789-1230",
    address: "123 Cedar St, Lakeside",
    grade: 4,
    image: "https://source.unsplash.com/64x64/?student",
  },

  // Grade 5
  {
    id: 9,
    firstName: "Ivy",
    lastName: "Cooper",
    dateOfBirth: "2011-04-20",
    email: "ivy.cooper@example.com",
    phoneNumber: "789-012-3456",
    address: "456 Pine St, Riverside",
    grade: 5,
    image: "https://source.unsplash.com/64x64/?student",
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "Parker",
    dateOfBirth: "2011-09-10",
    email: "jack.parker@example.com",
    phoneNumber: "123-456-7890",
    address: "789 Elm St, Mountainside",
    grade: 5,
    image: "https://source.unsplash.com/64x64/?student",
  },

  /// Grade 6
  {
    id: 11,
    firstName: "Katherine",
    lastName: "Murray",
    dateOfBirth: "2010-02-15",
    email: "katherine.murray@example.com",
    phoneNumber: "555-789-0123",
    address: "987 Oak St, Meadowland",
    grade: 6,
    image: "https://source.unsplash.com/64x64/?student",
  },
  {
    id: 12,
    firstName: "Leo",
    lastName: "Richardson",
    dateOfBirth: "2010-08-20",
    email: "leo.richardson@example.com",
    phoneNumber: "456-789-1230",
    address: "123 Birch St, Hilltop",
    grade: 6,
    image: "https://source.unsplash.com/64x64/?student",
  },

  // Grade 7
  {
    id: 13,
    firstName: "Mia",
    lastName: "Simmons",
    dateOfBirth: "2009-05-10",
    email: "mia.simmons@example.com",
    phoneNumber: "789-012-3456",
    address: "456 Maple St, Riverside",
    grade: 7,
    image: "https://source.unsplash.com/64x64/?student",
  },
  {
    id: 14,
    firstName: "Noah",
    lastName: "Evans",
    dateOfBirth: "2009-11-28",
    email: "noah.evans@example.com",
    phoneNumber: "123-456-7890",
    address: "789 Cedar St, Mountainside",
    grade: 7,
    image: "https://source.unsplash.com/64x64/?student",
  },

  // Grade 8
  {
    id: 15,
    firstName: "Olivia",
    lastName: "Clark",
    dateOfBirth: "2008-03-15",
    email: "olivia.clark@example.com",
    phoneNumber: "555-789-0123",
    address: "987 Willow St, Countryside",
    grade: 8,
    image: "https://source.unsplash.com/64x64/?student",
  },
  {
    id: 16,
    firstName: "Preston",
    lastName: "Harrison",
    dateOfBirth: "2008-09-20",
    email: "preston.harrison@example.com",
    phoneNumber: "456-789-1230",
    address: "123 Elm St, Lakeside",
    grade: 8,
    image: "https://source.unsplash.com/64x64/?student",
  },

  // Grade 9
  {
    id: 17,
    firstName: "Quinn",
    lastName: "Morgan",
    dateOfBirth: "2007-06-10",
    email: "quinn.morgan@example.com",
    phoneNumber: "789-012-3456",
    address: "456 Cedar St, Townsville",
    grade: 9,
    image: "https://source.unsplash.com/64x64/?student",
  },
  {
    id: 18,
    firstName: "Riley",
    lastName: "Garcia",
    dateOfBirth: "2007-12-28",
    email: "riley.garcia@example.com",
    phoneNumber: "123-456-7890",
    address: "789 Oak St, Suburbia",
    grade: 9,
    image: "https://source.unsplash.com/64x64/?student",
  },
  // Grade 10
  {
    id: 19,
    firstName: "Samuel",
    lastName: "Ward",
    dateOfBirth: "2006-04-15",
    email: "samuel.ward@example.com",
    phoneNumber: "555-789-0123",
    address: "987 Pine St, Mountainside",
    grade: 10,
    image: "https://source.unsplash.com/64x64/?student",
  },
  {
    id: 20,
    firstName: "Tara",
    lastName: "Fisher",
    dateOfBirth: "2006-10-20",
    email: "tara.fisher@example.com",
    phoneNumber: "456-789-1230",
    address: "123 Birch St, Hilltop",
    grade: 10,
    image: "https://source.unsplash.com/64x64/?student",
  },

  // Grade 11
  {
    id: 21,
    firstName: "Ulysses",
    lastName: "Nelson",
    dateOfBirth: "2005-07-10",
    email: "ulysses.nelson@example.com",
    phoneNumber: "789-012-3456",
    address: "456 Oak St, Countryside",
    grade: 11,
    image: "https://source.unsplash.com/64x64/?student",
  },
  {
    id: 22,
    firstName: "Violet",
    lastName: "Reyes",
    dateOfBirth: "2005-12-28",
    email: "violet.reyes@example.com",
    phoneNumber: "123-456-7890",
    address: "789 Willow St, Riverside",
    grade: 11,
    image: "https://source.unsplash.com/64x64/?student",
  },

  // Grade 12
  {
    id: 23,
    firstName: "Winston",
    lastName: "Lopez",
    dateOfBirth: "2004-09-15",
    email: "winston.lopez@example.com",
    phoneNumber: "555-789-0123",
    address: "987 Elm St, Lakeside",
    grade: 12,
    image: "https://source.unsplash.com/64x64/?student",
  },
  {
    id: 24,
    firstName: "Xena",
    lastName: "Wang",
    dateOfBirth: "2004-11-20",
    email: "xena.wang@example.com",
    phoneNumber: "456-789-1230",
    address: "123 Maple St, Townsville",
    grade: 12,
    image: "https://source.unsplash.com/64x64/?student",
  },
];

export default Menus;
