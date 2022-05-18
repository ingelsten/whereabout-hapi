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
  candidates: {
    _model: "Candidate",
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
      lat: "51.620858",
      lng: "-8.902420",
      donor: "->users.bart",
      candidate: "->candidates.lisa",
    },
    two: {
      amount: 90,
      method: "direct",
      lat: "51.629220",
      lng: "-8.904620",
      donor: "->users.marge",
      candidate: "->candidates.lisa",
    },
    three: {
      amount: 430,
      method: "paypal",
      lat: "51.621290",
      lng: "-8.901540",
      donor: "->users.homer",
      candidate: "->candidates.donald",
    },
  },
};
