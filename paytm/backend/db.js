const moongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await moongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
       
        });
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDB();

