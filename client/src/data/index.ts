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

export default Menus;
