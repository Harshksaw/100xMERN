import { Chain } from "./zeus";

const chain = Chain("http://localhost:4000/graphql");

async function send() {
    try {
        const response = await chain("mutation")({
            createUser: [{
                input: {
                    email: "harsh1@gmail.com",
                    firstname: "harsh",
                    lastname: "kumar"
                }
            }, {
                id: true,
                email: true
            }]
        })
        console.log(response)   
    }  catch(e) {
        console.log(e);
    }
}

send();
