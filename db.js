const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://mernProject:nBO5hNXMa5kF7b9u@cluster0.rxvmxev.mongodb.net/mernProject?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) console.log("---", err);
        else {
            console.log("connected");
            const fetched_data = mongoose.connection.db.collection("fooditems");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(async function (err, catData){
                    if (err) console.log(err);
                    else{
                        global.fooditems = data;
                        global.foodCategory = catData;

                    }
                }
                )
            })
        }
    });
}

module.exports = mongoDB;