const mongoose = require('mongoose');

module.exports = () => {
    const db = process.env.MONGODB_ATLAS_DB_LINK;

    // initializing remote connection
    mongoose
        .connect(db, {
            useNewUrlParser: true,
        })
        .then(() => {
            console.log('Connection successful.');
        })
        .catch(err => {
            console.log('Connection failed.');
            console.log(err);
        });
};
