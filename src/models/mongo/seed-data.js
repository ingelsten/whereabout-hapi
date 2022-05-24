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
      password: "$2a$10$uqnPlgyVjBEOtcgMhn/WRO3FwW4T9gX36tTB4RqpGeB/LkCR3YQuO",
    },
  },
  employees: {
    _model: "Employee",
    adrian: {
      firstName: "Adrian",
      lastName: "Duggan",
      office: "Clonakilty",
    },
    brian: {
      firstName: "Brian",
      lastName: "Nunan",
      office: "Cork",
    },
    peter: {
      firstName: "Peter",
      lastName: "McCarthy",
      office: "Listowel",
    },

  },
  whereabouts: {
    _model: "Whereabout",
    one: {
      jobvalue: 150,
      jobcategory: "electrical",
      lat: "51.6203",
      long: "-8.9055",
      user: "->users.bart",
      employee: "->employees.peter",
    },
    two: {
      jobvalue: 360,
      jobcategory: "civils",
      lat: "51.6223",
      long: "-8.9075",
      user: "->users.marge",
      employee: "->employees.adrian",
    },
    three: {
      jobvalue: 430,
      jobcategory: "electrical",
      lat: "51.6243",
      long: "-8.9095",
      user: "->users.homer",
      employee: "->employees.brian",
    },
    four: {
      jobvalue: 123,
      jobcategory: "service",
      lat: "51.6263",
      long: "-8.9115",
      user: "->users.homer",
      employee: "->employees.peter",
    },
    five: {
      jobvalue: 323,
      jobcategory: "electrical",
      lat: "51.6203",
      long: "-8.9295",
      user: "->users.homer",
      employee: "->employees.adrian",
    },
  },
};
