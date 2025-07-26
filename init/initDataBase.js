const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

const MONGO_URL = process.env.MONGO_URL;
async function main(){
    await mongoose.connect(MONGO_URL);
}
main().then(()=>{
    console.log("Data Base connected");
}).catch((err)=>{
    console.log(err);
});

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>{
        return {...obj,
            owner : [
                ('67ce9004a6e4dedcf4661c18')
            ]
        }
    });
    await Listing.insertMany(initData.data);
    console.log("Data is initialised");
};

initDB();