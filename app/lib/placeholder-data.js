const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Alex Iwobi',
    email: 'alex@iwobi.com',
    password: 'alexfulham2023',
  },
  {
    id: '410544b2-4105-4271-9855-fec4b6a6442a',
    name: 'Wilfred Ndidi',
    email: 'wilfred@ndidi.com',
    password: 'leicester2023',
  },
  {
    id: '410544b2-4021-4271-9855-fec4b6a6442a',
    name: 'Ademola Lookman',
    email: 'ademola@lookman.com',
    password: 'atalanta2023',
  },
  {
    id: '410544b2-4100-4271-9855-fec4b6a6442a',
    name: 'Victor Osimhen',
    email: 'victor@osimhen.com',
    password: 'victornapoli',
  },
  {
    id: '410544b2-4505-4271-9855-fec4b6a6442a',
    name: 'Calvin Bassey',
    email: 'calvin@bassey.com',
    password: 'defenderfulham',
  },
  {
    id: '410544b2-4390-4271-9855-fec4b6a6442a',
    name: 'Kelechi Iheanacho',
    email: 'kelechi@iheanacho.com',
    password: 'leicesterman',
  },
  {
    id: '410544b2-4600-4271-9855-fec4b6a6442a',
    name: 'Troost Ekong',
    email: 'troost@ekong.com',
    password: 'dinnerman',
  },
  {
    id: '410544b2-4900-4271-9855-fec4b6a6442a',
    name: 'Taiwo Awoniyi',
    email: 'taiwo@awoniyi.com',
    password: 'nottingham-forest',
  },
  {
    id: '410544b2-4980-4271-9855-fec4b6a6442a',
    name: 'Ahmed Musa',
    email: 'ahmed@musa.com',
    password: 'kano-man',
  },
  {
    id: '410544b2-4783-4271-9855-fec4b6a6442a',
    name: 'Samuel Chukwueze',
    email: 'samuel@chukwueze.com',
    password: 'milan-man',
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

const activeUser = [
  {
    active_id: customers[0].id,
    name: 'Alex Iwobi',
    email: 'alex@iwobi.com',
    image_url: customers[0].image_url,
  }
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
    date: '2024-01-06',
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

const wallets = [
  {
    customer_id: customers[0].id,
    amount: 150000,
    date: '2023-06-05',
  },
  {
    customer_id: customers[1].id,
    amount: 150000,
    date: '2022-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 150000,
    date: '2023-09-05',
  },
  {
    customer_id: customers[3].id,
    amount: 150000,
    date: '2023-10-05',
  },
  {
    customer_id: customers[4].id,
    amount: 150000,
    date: '2023-11-05',
  },
  {
    customer_id: customers[5].id,
    amount: 150000,
    date: '2023-05-05',
  },
  {
    customer_id: customers[6].id,
    amount: 150000,
    date: '2023-12-05',
  },
  {
    customer_id: customers[7].id,
    amount: 150000,
    date: '2024-01-02',
  },
  {
    customer_id: customers[8].id,
    amount: 150000,
    date: '2024-01-01',
  },
  {
    customer_id: customers[9].id,
    amount: 150000,
    date: '2024-01-07',
  },
  
]

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
  activeUser,
  customers,
  invoices,
  wallets,
  revenue,
};
