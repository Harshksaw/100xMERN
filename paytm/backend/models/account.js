const accountsSchema = new mongoose.Schema({
    userId:{
        type: moongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    balance:{
        type: Number,
        required: true
    },
    
    })
    export default mongoose.model('Account', accountsSchema);
    module.exports = {Account};