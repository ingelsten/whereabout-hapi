export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "$2a$10$HnapEWWKQQ0.0Ft33nXxtuJ0fsmd9ywYswEzT4C.6Ul5y6cOU.UEa",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "$2a$10$D3TWK8MSAh63Lhk4gIFSJ.ekM368J88qJRUYSbuBfzffex6B0dFwK",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "$2a$10$uqnPlgyVjBEOtcgMhn/WRO3FwW4T9gX36tTB4RqpGeB/LkCR3YQuO",
    },
    anders: {
      firstName: "Anders",
      lastName: "Ingelsten",
      email: "aingelsten@mainline.ie",
      password: "$2a$10$pQBC.a4IWq8a2hBbr1IPM./yUtVdhqT4G7hSZMjZ9Kwldf4tcxcei",
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
      user: "->users.anders",
      employee: "->employees.peter",
    },
    two: {
      jobvalue: 360,
      jobcategory: "civils",
      lat: "51.6223",
      long: "-8.9075",
      user: "->users.anders",
      employee: "->employees.adrian",
    },
    three: {
      jobvalue: 430,
      jobcategory: "electrical",
      lat: "51.6243",
      long: "-8.9095",
      user: "->users.anders",
      employee: "->employees.brian",
    },
    four: {
      jobvalue: 123,
      jobcategory: "service",
      lat: "51.6263",
      long: "-8.9115",
      user: "->users.anders",
      employee: "->employees.peter",
    },
    five: {
      jobvalue: 323,
      jobcategory: "electrical",
      lat: "51.6203",
      long: "-8.9295",
      user: "->users.anders",
      employee: "->employees.adrian",
    },
  },
};
