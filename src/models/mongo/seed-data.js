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
      jobvalue: 40,
      jobcategory: "electrical",
      lat: "51.6203",
      long: "-8.9055",
      donor: "->users.bart",
      employee: "->employees.lisa",
    },
    two: {
      jobvalue: 90,
      jobcategory: "civils",
      lat: "51.6223",
      long: "-8.9075",
      donor: "->users.marge",
      employee: "->employees.lisa",
    },
    three: {
      jobvalue: 430,
      jobcategory: "electrical",
      lat: "51.6243",
      long: "-8.9095",
      donor: "->users.homer",
      employee: "->employees.donald",
    },
    four: {
      jobvalue: 123,
      jobcategory: "electrical",
      lat: "51.6263",
      long: "-8.9115",
      donor: "->users.homer",
      employee: "->employees.donald",
    },
    five: {
      jobvalue: 123,
      jobcategory: "electrical",
      lat: "51.6203",
      long: "-8.9295",
      donor: "->users.homer",
      employee: "->employees.donald",
    },
  },
};
