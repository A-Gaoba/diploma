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
    submenu: true, // Change this line
    subMenuItem: [
      { title: "List of Teachers", src: "list", path: "/teachers/list" },
      { title: "Add Teacher", src: "add", path: "/teachers/add" },
    ],
  },
  {
    title: "Students",
    src: "student",
    path: "/students",
    submenu: true, // Change this line
    subMenuItem: [
      { title: "List of Students", src: "list", path: "/students/list" },
      { title: "Add Student", src: "add", path: "/students/add" },
    ],
  },
  { title: "Classes", src: "class", path: "/classes", submenu: false }, // Add submenu property
  { title: "Subjects", src: "subject", path: "/subjects", submenu: false }, // Add submenu property
  {
    title: "Attendance",
    src: "attendance",
    path: "/attendance",
    submenu: false,
  }, // Add submenu property
  { title: "Exams", src: "exam", path: "/exams", submenu: false }, // Add submenu property
  { title: "Settings", src: "Setting", path: "/settings", submenu: false }, // Add submenu property
  {
    title: "Log out",
    src: "logout",
    path: "/login",
    gap: true,
    submenu: false,
  }, // Add submenu property
  {
    title: "Log out",
    src: "logout",
    path: "/login",
    gap: true,
    submenu: false,
  }, // Add submenu property
  {
    title: "Log out",
    src: "logout",
    path: "/login",
    gap: true,
    submenu: false,
  }, // Add submenu property
  {
    title: "Log out",
    src: "logout",
    path: "/login",
    gap: true,
    submenu: false,
  }, // Add submenu property
];

export default Menus;
