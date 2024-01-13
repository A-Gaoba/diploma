interface MenuItem {
  title: string;
  src: string;
  path: string;
  gap?: boolean;
  subMenu?: MenuItem[];
}

// const Menus: MenuItem[] = [
//   { title: "Dashboard", src: "dashboard", path: "/" },
//   { title: "Students", src: "student", path: "/students" },
//   { title: "Teachers", src: "teacher", path: "/teachers" },
//   { title: "Classes", src: "class", path: "/classes" },
//   { title: "Subjects", src: "subject", path: "/subjects" },
//   { title: "Attendance", src: "attendance", path: "/attendance" },
//   { title: "Exams", src: "exam", path: "/exams" },
//   { title: "Settings", src: "Setting", path: "/settings" },
//   { title: "Log out", src: "logout", path: "/login", gap: true },
// ];

const Menus: MenuItem[] = [
  { title: "Dashboard", src: "dashboard", path: "/" },
  {
    title: "Teachers",
    src: "teacher",
    path: "/teachers",
    subMenu: [
      { title: "List of Teachers", src: "list", path: "/teachers/list" },
      { title: "Add Teacher", src: "add", path: "/teachers/add" },
    ],
  },
  {
    title: "Students",
    src: "student",
    path: "/students",
    subMenu: [
      { title: "List of Students", src: "list", path: "/students/list" },
      { title: "Add Student", src: "add", path: "/students/add" },
    ],
  },
  { title: "Classes", src: "class", path: "/classes" },
  { title: "Subjects", src: "subject", path: "/subjects" },
  { title: "Attendance", src: "attendance", path: "/attendance" },
  { title: "Exams", src: "exam", path: "/exams" },
  { title: "Settings", src: "Setting", path: "/settings" },
  { title: "Log out", src: "logout", path: "/login", gap: true },
];

export default Menus;
