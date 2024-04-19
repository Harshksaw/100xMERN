import {createClient} from 'redis';


const client = createClient();

async function main(){

    while(1){
        await client.connect();
        const response = await client.brPop('submissions',0);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log(response);

    }
}