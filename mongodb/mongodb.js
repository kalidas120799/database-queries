const mongoose=require("mongoose")

const DBURL=`mongodb+srv://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASSWORD}@cluster0.jpduk.mongodb.net/${process.env.MONGOOSE_DATABASE_NAME}?retryWrites=true&w=majority`

mongoose.connect(DBURL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`${process.env.MONGOOSE_DATABASE_NAME} Database Connected`)
}).catch((error)=>{
    if(error) return console.log(error)
})

module.exports=mongoose