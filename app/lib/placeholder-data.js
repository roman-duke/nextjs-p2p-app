const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Ahmed Musa',
    email: 'ahmed@musa.com',
    image_url: '/customers/ahmed-musa.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Alex Iwobi',
    email: 'alex@iwobi.com',
    image_url: '/customers/alex-iwobi.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Ademola Lookman',
    email: 'ademola@lookman.com',
    image_url: '/customers/ademola-lookman.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Wilfred Ndidi',
    email: 'wilfred@ndidi.com',
    image_url: '/customers/wilfred-ndidi.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Victor Osimhen',
    email: 'victor@osimhen.com',
    image_url: '/customers/victor-osimhen.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Calvin Bassey',
    email: 'calvin@bassey.com',
    image_url: '/customers/calvin-bassey.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Kelechi Iheanacho',
    email: 'kelechi@iheanacho.com',
    image_url: '/customers/iheanacho.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Troost Ekong',
    email: 'troost@ekong.com',
    image_url: '/customers/troost-ekong.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Taiwo Awoniyi',
    email: 'taiwo@awoniyi.com',
    image_url: '/customers/taiwo-awoniyi.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Samuel Chukwueze',
    email: 'samuel@chukwueze.com',
    image_url: '/customers/samuel-chukwueze.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 3800,
    status: 'pending',
    date: '2023-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 5000,
    status: 'pending',
    date: '2023-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 8000,
    status: 'paid',
    date: '2023-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 2500,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 8500,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 30000,
    status: 'pending',
    date: '2024-01-01',
  },
  {
    customer_id: customers[6].id,
    amount: 55000,
    status: 'pending',
    date: '2024-01-05',
  },
  {
    customer_id: customers[3].id,
    amount: 600,
    status: 'paid',
    date: '2024-03-06',
  },
  {
    customer_id: customers[4].id,
    amount: 3500,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 100000,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 1000,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 25000,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 30000,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 35000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
