// Getting a company and all users associated with it
{
    company(id: "1") {
        name,
        description,
        users {
            firstname
        }
    }
}

// Getting a user and company associated with it
{
    user(id: "2") {
        id,
        firstname,
        age,
        company {
            id,
            name,
            description
        }
    }
}

// Assigning Unique Keys for each company returned
{
    apple: company(id: "1") {
        name,
        description,
        users {
            firstname
        }
    }
    google: company(id: "2") {
        name,
        description,
        users {
            firstname
        }
    }
}
////////////////////////////////////

//  Creating Fragments in GraphQL
{
    apple: company(id: "1") {
        ...companyDetails
    }
    google: company(id: "2") {
        ...companyDetails
    }
}
fragment companyDetails on Company {
    id
    name
    description
}