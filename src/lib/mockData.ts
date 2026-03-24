export interface NextAppointment {
  addressTitle: string;
  addressSub: string;
  dateStr: string;
  roomArea: string;
  people: number;
  price: number;
}

export interface RecentDeal {
  id: string;
  addressTitle: string;
  addressSub: string;
  price: number;
  dateStr: string;
  imageUrl: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
}

export interface Task {
  id: string;
  dateStr: string;
  title: string;
  important: boolean;
}

export interface ProjectStep {
  id: string;
  dateStr: string;
  title: string;
}

export interface ProjectProgress {
  addressTitle: string;
  addressSub: string;
  status: 'IN PROGRESS' | 'COMPLETED';
  imageUrl: string;
  steps: ProjectStep[];
}

export const mockNextAppointment: NextAppointment = {
  addressTitle: "319 Haul Road",
  addressSub: "Glenrock, WY 12345",
  dateStr: "Nov 18 2021, 17:00",
  roomArea: "100 M²",
  people: 10,
  price: 5750,
};

export const mockRecentDeals: RecentDeal[] = [
  {
    id: "1",
    addressTitle: "319 Haul Road",
    addressSub: "Glenrock, WY",
    price: 5750,
    dateStr: "Nov 14, 07:00 AM",
    imageUrl: "/placeholder.png"
  },
  {
    id: "2",
    addressTitle: "47 Spruce Drive",
    addressSub: "Quantico, VA",
    price: 5750,
    dateStr: "Nov 15, 08:00 AM",
    imageUrl: "/placeholder.png"
  },
  {
    id: "3",
    addressTitle: "165 Belmont Drive",
    addressSub: "Parowan, UT",
    price: 5750,
    dateStr: "Nov 16, 09:00 AM",
    imageUrl: "/placeholder.png"
  },
  {
    id: "4",
    addressTitle: "1538 Hammer Road",
    addressSub: "Cleveland, OH",
    price: 5750,
    dateStr: "Nov 17, 10:00 AM",
    imageUrl: "/placeholder.png"
  }
];

export const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "Deanna Annis",
    email: "deannannis@gmail.com",
    imageUrl: "/avatar1.jpg"
  },
  {
    id: "2",
    name: "Andrea Willis",
    email: "andreawillis@gmail.com",
    imageUrl: "/avatar2.jpg"
  },
  {
    id: "3",
    name: "Brent Rodrigues",
    email: "brodrigues@gmail.com",
    imageUrl: "/avatar3.jpg"
  }
];

export const mockTasks: Task[] = [
  { id: "1", dateStr: "30 Nov 2021", title: "Meeting with partners", important: true },
  { id: "2", dateStr: "24 Dec 2021", title: "Web conference agenda", important: true },
  { id: "3", dateStr: "24 Oct 2022", title: "Lunch with Steve", important: false },
  { id: "4", dateStr: "24 Nov 2022", title: "Meeting with partners", important: false },
  { id: "5", dateStr: "24 Nov 2022", title: "Weekly meeting", important: false },
  { id: "6", dateStr: "24 Nov 2022", title: "Add new services", important: false },
];

export const mockProjectProgress: ProjectProgress = {
  addressTitle: "1824 Turkey Pen Road",
  addressSub: "Cleveland, OH 12345",
  status: "IN PROGRESS",
  imageUrl: "/placeholder.png",
  steps: [
    { id: "1", dateStr: "17 Nov 2021", title: "Installation of the new air conditioning system" },
    { id: "2", dateStr: "17 Nov 2021", title: "Installation of the new air conditioning system" }
  ]
};
