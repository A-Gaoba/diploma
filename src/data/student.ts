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
    image: "==diana",
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
    image: "==alice",
  },
  {
    id: 7,
    firstName: "Emma",
    lastName: "Davis",
    dateOfBirth: "2016-02-20",
    email: "emma.davis@example.com",
    phoneNumber: "777-888-9999",
    address: "222 Maple St, Hamlet",
    grade: 1,
    class: "Class 1",
    city: "Hamlet",
    image: "==emma",
  },
  {
    id: 8,
    firstName: "Frank",
    lastName: "Wilson",
    dateOfBirth: "2016-04-14",
    email: "frank.wilson@example.com",
    phoneNumber: "444-666-1111",
    address: "333 Cedar St, Riverside",
    grade: 1,
    class: "Class 1",
    city: "Riverside",
    image: "==frank",
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
    image: "==bob",
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
    image: "==charlie",
  },
  {
    id: 9,
    firstName: "George",
    lastName: "Anderson",
    dateOfBirth: "2014-11-30",
    email: "george.anderson@example.com",
    phoneNumber: "222-333-4444",
    address: "555 Pine St, Suburbia",
    grade: 2,
    class: "Class 2",
    city: "Suburbia",
    image: "==george",
  },
  {
    id: 10,
    firstName: "Holly",
    lastName: "Clark",
    dateOfBirth: "2014-10-10",
    email: "holly.clark@example.com",
    phoneNumber: "555-777-2222",
    address: "789 Oak St, Cityville",
    grade: 2,
    class: "Class 2",
    city: "Cityville",
    image: "==holly",
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
    image: "=",
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
    image: "=",
  },
  {
    id: 11,
    firstName: "Ian",
    lastName: "Turner",
    dateOfBirth: "2013-09-25",
    email: "ian.turner@example.com",
    phoneNumber: "999-777-8888",
    address: "101 Maple St, Riverside",
    grade: 3,
    class: "Class 3",
    city: "Riverside",
    image: "==ian",
  },
  {
    id: 12,
    firstName: "Julia",
    lastName: "Wright",
    dateOfBirth: "2013-12-05",
    email: "julia.wright@example.com",
    phoneNumber: "888-444-5555",
    address: "222 Cedar St, Townsville",
    grade: 3,
    class: "Class 3",
    city: "Townsville",
    image: "==julia",
  },
  // Grade 4
  {
    id: 13,
    firstName: "Kyle",
    lastName: "Harris",
    dateOfBirth: "2012-04-02",
    email: "kyle.harris@example.com",
    phoneNumber: "333-222-1111",
    address: "456 Birch St, Meadowland",
    grade: 4,
    class: "Class 4",
    city: "Meadowland",
    image: "==kyle",
  },
  {
    id: 14,
    firstName: "Lily",
    lastName: "Evans",
    dateOfBirth: "2012-06-15",
    email: "lily.evans@example.com",
    phoneNumber: "444-555-6666",
    address: "789 Willow St, Cityville",
    grade: 4,
    class: "Class 4",
    city: "Cityville",
    image: "==lily",
  },

  // Grade 5
  {
    id: 15,
    firstName: "Mason",
    lastName: "Gomez",
    dateOfBirth: "2011-02-20",
    email: "mason.gomez@example.com",
    phoneNumber: "777-888-9999",
    address: "101 Elm St, Riverside",
    grade: 5,
    class: "Class 5",
    city: "Riverside",
    image: "==mason",
  },
  {
    id: 16,
    firstName: "Natalie",
    lastName: "Reed",
    dateOfBirth: "2011-05-10",
    email: "natalie.reed@example.com",
    phoneNumber: "111-222-3333",
    address: "222 Cedar St, Townsville",
    grade: 5,
    class: "Class 5",
    city: "Townsville",
    image: "==natalie",
  },
  // Grade 6
  {
    id: 17,
    firstName: "Owen",
    lastName: "Fisher",
    dateOfBirth: "2010-08-18",
    email: "owen.fisher@example.com",
    phoneNumber: "555-666-7777",
    address: "456 Oak St, Meadowland",
    grade: 6,
    class: "Class 6",
    city: "Meadowland",
    image: "==owen",
  },
  {
    id: 18,
    firstName: "Paige",
    lastName: "Harrison",
    dateOfBirth: "2010-11-25",
    email: "paige.harrison@example.com",
    phoneNumber: "888-999-0000",
    address: "789 Pine St, Cityville",
    grade: 6,
    class: "Class 6",
    city: "Cityville",
    image: "==paige",
  },

  // Grade 7
  {
    id: 19,
    firstName: "Quentin",
    lastName: "Ingram",
    dateOfBirth: "2009-03-12",
    email: "quentin.ingram@example.com",
    phoneNumber: "123-456-7890",
    address: "101 Elm St, Countryside",
    grade: 7,
    class: "Class 7",
    city: "Countryside",
    image: "==quentin",
  },
  {
    id: 20,
    firstName: "Rachel",
    lastName: "Jacobs",
    dateOfBirth: "2009-06-20",
    email: "rachel.jacobs@example.com",
    phoneNumber: "444-555-6666",
    address: "222 Cedar St, Riverside",
    grade: 7,
    class: "Class 7",
    city: "Riverside",
    image: "==rachel",
  },

  // Grade 8
  {
    id: 21,
    firstName: "Samuel",
    lastName: "Keller",
    dateOfBirth: "2008-01-15",
    email: "samuel.keller@example.com",
    phoneNumber: "777-888-9999",
    address: "456 Birch St, Townsville",
    grade: 8,
    class: "Class 8",
    city: "Townsville",
    image: "==samuel",
  },
  {
    id: 22,
    firstName: "Tessa",
    lastName: "Lopez",
    dateOfBirth: "2008-04-30",
    email: "tessa.lopez@example.com",
    phoneNumber: "111-222-3333",
    address: "789 Willow St, Suburbia",
    grade: 8,
    class: "Class 8",
    city: "Suburbia",
    image: "==tessa",
  },

  // Grade 9
  {
    id: 23,
    firstName: "Ulysses",
    lastName: "Martin",
    dateOfBirth: "2007-07-05",
    email: "ulysses.martin@example.com",
    phoneNumber: "555-666-7777",
    address: "101 Main St, Cityville",
    grade: 9,
    class: "Class 9",
    city: "Cityville",
    image: "==ulysses",
  },
  {
    id: 24,
    firstName: "Vanessa",
    lastName: "Newton",
    dateOfBirth: "2007-10-12",
    email: "vanessa.newton@example.com",
    phoneNumber: "888-999-0000",
    address: "222 Oak St, Meadowland",
    grade: 9,
    class: "Class 9",
    city: "Meadowland",
    image: "==vanessa",
  },

  // Grade 10
  {
    id: 25,
    firstName: "Walter",
    lastName: "Owens",
    dateOfBirth: "2006-04-18",
    email: "walter.owens@example.com",
    phoneNumber: "123-456-7890",
    address: "456 Pine St, Riverside",
    grade: 10,
    class: "Class 10",
    city: "Riverside",
    image: "==walter",
  },
  {
    id: 26,
    firstName: "Xena",
    lastName: "Palmer",
    dateOfBirth: "2006-08-25",
    email: "xena.palmer@example.com",
    phoneNumber: "444-555-6666",
    address: "789 Cedar St, Suburbia",
    grade: 10,
    class: "Class 10",
    city: "Suburbia",
    image: "==xena",
  },

  // Grade 11
  {
    id: 27,
    firstName: "Yasmine",
    lastName: "Quinn",
    dateOfBirth: "2005-02-10",
    email: "yasmine.quinn@example.com",
    phoneNumber: "777-888-9999",
    address: "101 Willow St, Townsville",
    grade: 11,
    class: "Class 11",
    city: "Townsville",
    image: "==yasmine",
  },
  {
    id: 28,
    firstName: "Zachary",
    lastName: "Reyes",
    dateOfBirth: "2005-06-15",
    email: "zachary.reyes@example.com",
    phoneNumber: "111-222-3333",
    address: "222 Birch St, Cityville",
    grade: 11,
    class: "Class 11",
    city: "Cityville",
    image: "==zachary",
  },

  // Grade 12
  {
    id: 29,
    firstName: "Aria",
    lastName: "Sanchez",
    dateOfBirth: "2004-09-20",
    email: "aria.sanchez@example.com",
    phoneNumber: "555-666-7777",
    address: "456 Main St, Countryside",
    grade: 12,
    class: "Class 12",
    city: "Countryside",
    image: "==aria",
  },
  {
    id: 30,
    firstName: "Benjamin",
    lastName: "Thompson",
    dateOfBirth: "2004-12-25",
    email: "benjamin.thompson@example.com",
    phoneNumber: "888-999-0000",
    address: "789 Oak St, Riverside",
    grade: 12,
    class: "Class 12",
    city: "Riverside",
    image: "==benjamin",
  },
  // Grade 12
  {
    id: 29,
    firstName: "Aria",
    lastName: "Sanchez",
    dateOfBirth: "2004-09-20",
    email: "aria.sanchez@example.com",
    phoneNumber: "555-666-7777",
    address: "456 Main St, Countryside",
    grade: 12,
    class: "Class 12",
    city: "Countryside",
    image: "==aria",
  },
  {
    id: 30,
    firstName: "Benjamin",
    lastName: "Thompson",
    dateOfBirth: "2004-12-25",
    email: "benjamin.thompson@example.com",
    phoneNumber: "888-999-0000",
    address: "789 Oak St, Riverside",
    grade: 12,
    class: "Class 12",
    city: "Riverside",
    image: "==benjamin",
  },
];
