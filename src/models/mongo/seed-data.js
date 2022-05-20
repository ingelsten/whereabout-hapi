export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },
  employees: {
    _model: "Employee",
    lisa: {
      firstName: "Lisa",
      lastName: "Simpson",
      office: "President",
    },
    donald: {
      firstName: "Donald",
      lastName: "Simpson",
      office: "President",
    },
  },
  whereabouts: {
    _model: "Whereabout",
    one: {
      amount: 40,
      method: "paypal",
      lat: "51.6203",
      lng: "-8.9055",
      donor: "->users.bart",
      employee: "->employees.lisa",
    },
    two: {
      amount: 90,
      method: "direct",
      lat: "51.6223",
      lng: "-8.9075",
      donor: "->users.marge",
      employee: "->employees.lisa",
    },
    three: {
      amount: 430,
      method: "paypal",
      lat: "51.6243",
      lng: "-8.9095",
      donor: "->users.homer",
      employee: "->employees.donald",
    },
    four: {
      amount: 123,
      method: "paypal",
      lat: "51.6263",
      lng: "-8.9115",
      donor: "->users.homer",
      employee: "->employees.donald",
    },
    five: {
      amount: 123,
      method: "paypal",
      lat: "51.6203",
      lng: "-8.9295",
      donor: "->users.homer",
      employee: "->employees.donald",
    },
  },
};
