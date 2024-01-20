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
    title: "Students",
    src: "student",
    path: "/students",
    submenu: true,
    subMenuItem: [
      { title: "List of Students", src: "student", path: "/students" },
      { title: "Add Student", src: "student", path: "/students/add" },
    ],
  },
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
