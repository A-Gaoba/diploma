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

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  image: string; // URL to the student's image
}

export const studentsData: Student[] = [
  // Grade 1
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    grade: 1,
    image: "../assets/image.jpg",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    grade: 1,
    image: "jane-doe.jpg",
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Smith",
    grade: 1,
    image: "michael-smith.jpg",
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Johnson",
    grade: 1,
    image: "emily-johnson.jpg",
  },
  {
    id: 5,
    firstName: "Daniel",
    lastName: "Brown",
    grade: 1,
    image: "daniel-brown.jpg",
  },

  // Grade 2
  {
    id: 6,
    firstName: "Sophia",
    lastName: "Miller",
    grade: 2,
    image: "sophia-miller.jpg",
  },
  {
    id: 7,
    firstName: "Ethan",
    lastName: "Wilson",
    grade: 2,
    image: "ethan-wilson.jpg",
  },
  {
    id: 8,
    firstName: "Olivia",
    lastName: "Davis",
    grade: 2,
    image: "olivia-davis.jpg",
  },
  {
    id: 9,
    firstName: "Noah",
    lastName: "Taylor",
    grade: 2,
    image: "noah-taylor.jpg",
  },
  {
    id: 10,
    firstName: "Ava",
    lastName: "Moore",
    grade: 2,
    image: "ava-moore.jpg",
  },

  // Grade 3
  {
    id: 11,
    firstName: "Liam",
    lastName: "Harris",
    grade: 3,
    image: "liam-harris.jpg",
  },
  {
    id: 12,
    firstName: "Emma",
    lastName: "Turner",
    grade: 3,
    image: "emma-turner.jpg",
  },
  {
    id: 13,
    firstName: "Aiden",
    lastName: "Wilson",
    grade: 3,
    image: "aiden-wilson.jpg",
  },
  {
    id: 14,
    firstName: "Chloe",
    lastName: "Adams",
    grade: 3,
    image: "chloe-adams.jpg",
  },
  {
    id: 15,
    firstName: "Mia",
    lastName: "Robinson",
    grade: 3,
    image: "mia-robinson.jpg",
  },

  // Grade 4
  {
    id: 16,
    firstName: "Jackson",
    lastName: "Adams",
    grade: 4,
    image: "jackson-adams.jpg",
  },
  {
    id: 17,
    firstName: "Sophie",
    lastName: "Parker",
    grade: 4,
    image: "sophie-parker.jpg",
  },
  {
    id: 18,
    firstName: "Logan",
    lastName: "Mitchell",
    grade: 4,
    image: "logan-mitchell.jpg",
  },
  {
    id: 19,
    firstName: "Elijah",
    lastName: "Hall",
    grade: 4,
    image: "elijah-hall.jpg",
  },
  {
    id: 20,
    firstName: "Grace",
    lastName: "Turner",
    grade: 4,
    image: "grace-turner.jpg",
  },

  // Grade 5
  {
    id: 21,
    firstName: "Eva",
    lastName: "Baker",
    grade: 5,
    image: "eva-baker.jpg",
  },
  {
    id: 22,
    firstName: "Samuel",
    lastName: "Hill",
    grade: 5,
    image: "samuel-hill.jpg",
  },
  {
    id: 23,
    firstName: "Lily",
    lastName: "King",
    grade: 5,
    image: "lily-king.jpg",
  },
  {
    id: 24,
    firstName: "Caleb",
    lastName: "Gomez",
    grade: 5,
    image: "caleb-gomez.jpg",
  },
  {
    id: 25,
    firstName: "Sophia",
    lastName: "Evans",
    grade: 5,
    image: "sophia-evans.jpg",
  },

  // Grade 6
  {
    id: 26,
    firstName: "Oliver",
    lastName: "Parker",
    grade: 6,
    image: "oliver-parker.jpg",
  },
  {
    id: 27,
    firstName: "Isabella",
    lastName: "White",
    grade: 6,
    image: "isabella-white.jpg",
  },
  {
    id: 28,
    firstName: "Mason",
    lastName: "Davis",
    grade: 6,
    image: "mason-davis.jpg",
  },
  {
    id: 29,
    firstName: "Emma",
    lastName: "Turner",
    grade: 6,
    image: "emma-turner.jpg",
  },
  {
    id: 30,
    firstName: "Liam",
    lastName: "Harris",
    grade: 6,
    image: "liam-harris.jpg",
  },

  // Grade 7
  {
    id: 31,
    firstName: "Ava",
    lastName: "Robinson",
    grade: 7,
    image: "ava-robinson.jpg",
  },
  {
    id: 32,
    firstName: "Lucas",
    lastName: "Mitchell",
    grade: 7,
    image: "lucas-mitchell.jpg",
  },
  {
    id: 33,
    firstName: "Sophia",
    lastName: "Baker",
    grade: 7,
    image: "sophia-baker.jpg",
  },
  {
    id: 34,
    firstName: "Jackson",
    lastName: "Harris",
    grade: 7,
    image: "jackson-harris.jpg",
  },
  {
    id: 35,
    firstName: "Olivia",
    lastName: "Lewis",
    grade: 7,
    image: "olivia-lewis.jpg",
  },

  // Grade 8
  {
    id: 36,
    firstName: "Noah",
    lastName: "Adams",
    grade: 8,
    image: "noah-adams.jpg",
  },
  {
    id: 37,
    firstName: "Chloe",
    lastName: "Moore",
    grade: 8,
    image: "chloe-moore.jpg",
  },
  {
    id: 38,
    firstName: "Elijah",
    lastName: "Wilson",
    grade: 8,
    image: "elijah-wilson.jpg",
  },
  {
    id: 39,
    firstName: "Aiden",
    lastName: "Turner",
    grade: 8,
    image: "aiden-turner.jpg",
  },
  {
    id: 40,
    firstName: "Grace",
    lastName: "Taylor",
    grade: 8,
    image: "grace-taylor.jpg",
  },

  // Grade 9
  {
    id: 41,
    firstName: "Liam",
    lastName: "Smith",
    grade: 9,
    image: "liam-smith.jpg",
  },
  {
    id: 42,
    firstName: "Mia",
    lastName: "Turner",
    grade: 9,
    image: "mia-turner.jpg",
  },
  {
    id: 43,
    firstName: "Ethan",
    lastName: "Baker",
    grade: 9,
    image: "ethan-baker.jpg",
  },
  {
    id: 44,
    firstName: "Sophie",
    lastName: "Harris",
    grade: 9,
    image: "sophie-harris.jpg",
  },
  {
    id: 45,
    firstName: "Ava",
    lastName: "Mitchell",
    grade: 9,
    image: "ava-mitchell.jpg",
  },

  // Grade 10
  {
    id: 46,
    firstName: "Jackson",
    lastName: "Adams",
    grade: 10,
    image: "jackson-adams.jpg",
  },
  {
    id: 47,
    firstName: "Olivia",
    lastName: "Lewis",
    grade: 10,
    image: "olivia-lewis.jpg",
  },
  {
    id: 48,
    firstName: "Noah",
    lastName: "Robinson",
    grade: 10,
    image: "noah-robinson.jpg",
  },
  {
    id: 49,
    firstName: "Chloe",
    lastName: "Turner",
    grade: 10,
    image: "chloe-turner.jpg",
  },
  {
    id: 50,
    firstName: "Liam",
    lastName: "Harris",
    grade: 10,
    image: "liam-harris.jpg",
  },

  // Grade 11
  {
    id: 51,
    firstName: "Emma",
    lastName: "Smith",
    grade: 11,
    image: "emma-smith.jpg",
  },
  {
    id: 52,
    firstName: "Sophia",
    lastName: "Turner",
    grade: 11,
    image: "sophia-turner.jpg",
  },
  {
    id: 53,
    firstName: "Aiden",
    lastName: "Wilson",
    grade: 11,
    image: "aiden-wilson.jpg",
  },
  {
    id: 54,
    firstName: "Ethan",
    lastName: "Baker",
    grade: 11,
    image: "ethan-baker.jpg",
  },
  {
    id: 55,
    firstName: "Grace",
    lastName: "Taylor",
    grade: 11,
    image: "grace-taylor.jpg",
  },

  // Grade 12
  {
    id: 56,
    firstName: "Oliver",
    lastName: "Parker",
    grade: 12,
    image: "oliver-parker.jpg",
  },
  {
    id: 57,
    firstName: "Isabella",
    lastName: "White",
    grade: 12,
    image: "isabella-white.jpg",
  },
  {
    id: 58,
    firstName: "Mason",
    lastName: "Davis",
    grade: 12,
    image: "mason-davis.jpg",
  },
  {
    id: 59,
    firstName: "Emma",
    lastName: "Turner",
    grade: 12,
    image: "emma-turner.jpg",
  },
  {
    id: 60,
    firstName: "Liam",
    lastName: "Harris",
    grade: 12,
    image: "liam-harris.jpg",
  },

  // Add more students as needed...
];
export default Menus;
