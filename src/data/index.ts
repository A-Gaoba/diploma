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
    path: "/",
    submenu: true,
    subMenuItem: [
      { title: "List of Teachers", src: "student", path: "/teachers" },
      { title: "Add Teacher", src: "student", path: "/teachers/add" },
    ],
  },
  {
    title: "Students",
    src: "student",
    path: "/",
    submenu: true,
    subMenuItem: [
      { title: "List of Students", src: "student", path: "/students" },
      { title: "Add Student", src: "student", path: "/students/add" },
    ],
  },
  {
    title: "Classes",
    src: "class",
    path: "/",
    submenu: true,
    subMenuItem: [
      { title: "Class List", src: "class", path: "/classes" },
      { title: "Create Class", src: "class", path: "/classes/create" },
    ],
  },
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
  },
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
    grade: 3,
    city: "Meadowland",
    image: "https://source.unsplash.com/64x64/?student",
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
    grade: 3,
    city: "Meadowland",
    image: "https://source.unsplash.com/64x64/?student",
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
    grade: 3,
    city: "Meadowland",
    image: "https://source.unsplash.com/64x64/?student",
  },

];

export interface TeacherPageProps {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  subject: string;
  timeOfClass: string;
  gender?: string;
  dateOfBirth?: string;
  email: string;
  phone?: string;
  degrees: string[];
  institutions: string[];
  specializations: string[];
  yearsOfExperience?: number;
  previousInstitutions: string[];
  subjectsTaught: string[];
  awards: string[];
  achievements?: string;
  classSchedule?: string;
  officeLocation?: string;
  preferredCommunication?: string;
  bio?: string;
}

export const teachersData: TeacherPageProps[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    image: "https://source.unsplash.com/64x64/?student=alice",
    subject: "Mathematics",
    timeOfClass: "9:00 AM - 11:00 AM",
    gender: "Male",
    dateOfBirth: "1980-01-01",
    email: "john.doe@example.com",
    phone: "+1234567890",
    degrees: ["Bachelor of Science in Mathematics", "Master of Education"],
    institutions: ["University A", "University B"],
    specializations: ["Algebra", "Geometry"],
    yearsOfExperience: 10,
    previousInstitutions: ["School X", "School Y"],
    subjectsTaught: ["Algebra 1", "Geometry", "Trigonometry"],
    awards: ["Best Math Teacher Award", "Excellence in Education"],
    achievements: "Published a research paper on teaching methods.",
    classSchedule: "Monday: 9 AM - 11 AM, Wednesday: 2 PM - 4 PM",
    officeLocation: "Room 203",
    preferredCommunication: "Email",
    bio: "I am passionate about making math enjoyable and accessible to every student. In my free time, I enjoy solving challenging math problems and exploring new teaching techniques.",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    image: "jane-smith.jpg",
    subject: "English",
    timeOfClass: "10:00 AM - 12:00 PM",
    gender: "Female",
    dateOfBirth: "1985-05-15",
    email: "jane.smith@example.com",
    phone: "+9876543210",
    degrees: ["Bachelor of Arts in English", "Master of Arts in Education"],
    institutions: ["College C", "University D"],
    specializations: ["Literature", "Grammar"],
    yearsOfExperience: 8,
    previousInstitutions: ["High School Z", "Middle School W"],
    subjectsTaught: [
      "American Literature",
      "Grammar and Composition",
      "Creative Writing",
    ],
    awards: [
      "Outstanding English Educator Award",
      "Creative Writing Excellence",
    ],
    achievements: "Published a collection of short stories.",
    classSchedule: "Tuesday: 10 AM - 12 PM, Thursday: 3 PM - 5 PM",
    officeLocation: "Room 105",
    preferredCommunication: "Phone",
    bio: "I believe in fostering a love for literature and empowering students to express themselves through writing. Outside of teaching, I enjoy reading classic novels and supporting local poetry events.",
  },
  {
    id: 3,
    firstName: "Robert",
    lastName: "Johnson",
    image: "robert-johnson.jpg",
    subject: "Science",
    timeOfClass: "1:00 PM - 3:00 PM",
    gender: "Male",
    dateOfBirth: "1982-09-30",
    email: "robert.johnson@example.com",
    phone: "+1122334455",
    degrees: ["Bachelor of Science in Biology", "Doctorate in Education"],
    institutions: ["University E", "Graduate School F"],
    specializations: ["Biology", "Environmental Science"],
    yearsOfExperience: 12,
    previousInstitutions: ["Science Academy", "Research Institute"],
    subjectsTaught: [
      "Biology 101",
      "Environmental Science",
      "Anatomy and Physiology",
    ],
    awards: [
      "Distinguished Science Educator Award",
      "Environmental Stewardship",
    ],
    achievements:
      "Led a student research team to win the National Science Fair.",
    classSchedule: "Monday: 1 PM - 3 PM, Wednesday: 9 AM - 11 AM",
    officeLocation: "Lab 304",
    preferredCommunication: "Email",
    bio: "I am dedicated to instilling a sense of wonder and curiosity about the natural world. My goal is to inspire future scientists and environmental advocates. In my spare time, I enjoy hiking and conducting field research.",
  },
  // Add more teachers with different subjects and details
];

export const classes = [
  { id: 1, title: "Class 1", numberOfStudents: 25, numberOfGroups: 1 },
  { id: 2, title: "Class 2", numberOfStudents: 30, numberOfGroups: 1 },
  { id: 3, title: "Class 3", numberOfStudents: 22, numberOfGroups: 1 },
  { id: 4, title: "Class 4", numberOfStudents: 28, numberOfGroups: 1 },
  { id: 5, title: "Class 5", numberOfStudents: 44, numberOfGroups: 2 },
  { id: 6, title: "Class 6", numberOfStudents: 26, numberOfGroups: 1 },
  { id: 7, title: "Class 7", numberOfStudents: 39, numberOfGroups: 2 },
  { id: 8, title: "Class 8", numberOfStudents: 32, numberOfGroups: 2 },
  { id: 9, title: "Class 9", numberOfStudents: 28, numberOfGroups: 1 },
  { id: 10, title: "Class 10", numberOfStudents: 65, numberOfGroups: 3 },
  { id: 11, title: "Class 11", numberOfStudents: 35, numberOfGroups: 2 },
  { id: 12, title: "Class 12", numberOfStudents: 40, numberOfGroups: 2 },
];

export default Menus;
