const data = [
  {
    id: "a0b9d232-c8ff-594c-b3b0-ad1d8af5df3f",
    type: "client",
    ccdms_id: "CL8260",
    region: "Central Coast OoHC",
    first_name: "Paul",
    last_name: "Webster",
    gender: "Male",
    address: "1357 Nedsog Street",
    state: "VIC",
    users_allowed_access: [
      "bessie.biancalani",
      "cory.schouten",
      "cornelia.tofanari",
      "mae.reed",
      "alice.moody"
    ]
  },
  {
    id: "e3dedfe6-5f7f-5338-a483-f9a49ba5f9bd",
    type: "client",
    ccdms_id: "CL4023",
    region: "Mid North Coast",
    first_name: "Leona",
    last_name: "Hopkins",
    gender: "Male",
    address: "170 Lolbim Plaza",
    state: "NT",
    users_allowed_access: [
      "bessie.biancalani",
      "cornelia.tofanari",
      "francis.renzi",
      "cory.schouten",
      "bessie.van egmond"
    ]
  },
  {
    id: "28eb338d-8114-5ad7-b27d-37d483a3957a",
    type: "carerEntity",
    ccdms_id: "CA6740",
    region: "Central Coast OoHC",
    carers: [
      {
        first_name: "Roy",
        last_name: "Vignozzi",
        gender: "Female",
        address: "1051 Velec Way",
        state: "ACT"
      },
      {
        first_name: "Stephen",
        last_name: "Haynes",
        gender: "Female",
        address: "1115 Juro Way",
        state: "VIC"
      },
      {
        first_name: "Christina",
        last_name: "Giannotti",
        gender: "Female",
        address: "1595 Volil Road",
        state: "WA"
      },
      {
        first_name: "Micheal",
        last_name: "Ishikawa",
        gender: "Male",
        address: "1495 Siza Drive",
        state: "ACT"
      }
    ],
    users_allowed_access: [
      "bill.reid",
      "alexander.tempesti",
      "cory.schouten",
      "bessie.van egmond"
    ]
  }
]

  
  export function getFilteredClients(name) {
    let filteredClients = data.filter((client) => {
      const list = client.users_allowed_access;
      //iterate through the clients list and return the list with matching records
      return  list.find((cust) => cust === name);
    });
    return filteredClients;
  }
  
 