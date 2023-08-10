//connected mongoose
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://palaksharm2508:P3shar3P%40ps@cluster0.k7jvmmf.mongodb.net/",{useNewUrlParser: true,
    useUnifiedTopology: true,})

const db = mongoose.connection;

db.on("error" ,console.error.bind(console,'connection error') )
db.once("open" , ()=>{
    console.log("connected mongodb")
})

// create db

//create schema in model for only insert one data
const User = mongoose.model('User', {
    name: String,
    email: String
});
//
// const newUser = new User({
//     name: 'John Doe',
//     email: 'john@example.com'
// });
//
// newUser.save()
//     .then(user => {
//         console.log('User created:', user);
//     })
//     .catch(error => {
//         console.error('Error creating user:', error);
//     })

// for insert multiple data
const userData = [
    {
    name: 'John Doe',
    email: 'john@example.com'
},{

    name: 'palak Doe',
        email: 'palak@example.com'
},{

    name: 'neha Doe',
        email: 'neha@example.com'
},{

    name: 'alok Doe',
        email: 'alok@example.com'
}
]
Promise.all(userData.map(async (data) => {
    try {
        const existingUser = await User.findOneAndDelete({ email: data.email });
        if (existingUser) {
            console.log("Duplicate user deleted:", existingUser);
        }
        const newUser = new User(data);
        const savedUser = await newUser.save();
        console.log("New user created:", savedUser);
    } catch (error) {
        console.error("Error:", error);
    }
}))
    .then(() => {
        console.log("Data processing completed");
    })
    .catch((error) => {
        console.log(error);
    });


// User.deleteMany({}).then(deleteUserData=>{
//     console.log("user data is  deleted" ,deleteUserData)
// }).catch(e=>{
//     console.log(e)
// })





// User.insertMany(userData).then(()=>{
//     console.log("data in created")
// })

// read document
// User.findOne({  name: 'neha Doe'  }).then(user=>{
//     if(user){
//         console.log("user found" , user)
//     }else{
//         console.log("user not found")
//     }
// }).catch((err)=>{
//     console.log("the error is" ,err)
// })

//find and update the document
// User.findOneAndUpdate({name: 'palak Doe' }, { email: 'ps233@gmail.com' }, { new: true })
//     .then(updatedUser => {
//         if (updatedUser) {
//             console.log('User updated:', updatedUser);
//         } else {
//             console.log('User not found');
//         }
//     })
//     .catch(error => {
//         console.error('Error updating user:', error);
//     });

//delete document
// User.deleteMany({name: 'palak Doe' }).then(result =>{
//     console.log("delete user" ,result.deletedCount)
// }).catch(err=>{
//     console.log(err)
// })

// delete all
// User.deleteMany({ }).then(result =>{
//     console.log("delete user" ,result.deletedCount)
// }).catch(err=>{
//     console.log(err)
// })

//  new document

