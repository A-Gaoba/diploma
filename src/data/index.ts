interface MenuItem {
  title: string;
  src: string;
  path: string;
  gap?: boolean;
}

const Menus: MenuItem[] = [
  { title: "Dashboard", src: "dashboard", path: "/dashboard" },
  { title: "Students", src: "student", path: "/dashboard/students" },
  { title: "Teachers", src: "teacher", path: "/dashboard/teachers" },
  { title: "Classes", src: "class", path: "/dashboard/classes" },
  { title: "Subjects", src: "subject", path: "/dashboard/subjects" },
  { title: "Attendance", src: "attendance", path: "/dashboard/attendance" },
  { title: "Exams", src: "exam", path: "/dashboard/exams" },
  { title: "Settings", src: "Setting", path: "/dashboard/settings" },
  { title: "Log out", src: "logout", path: "/login", gap: true },
];

export default Menus;
