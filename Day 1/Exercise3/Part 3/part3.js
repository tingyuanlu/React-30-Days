const personAccount = {
  firstName: "Darren",
  lastName: "Lu",
  income: 500000,
  expenses: 300000,
  totalIncome: function () {
    return this.income;
  },
  totalExpense: function () {
    return this.expenses;
  },
  accountInfo: 14124091,
  addIncome: function (debit) {
    this.income += debit;
  },
  addExpense: function (credit) {
    this.expenses += credit;
  },
  accountBalance: function () {
    return this.income - this.expenses;
  },
};
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
