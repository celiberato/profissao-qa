const newman = require('newman');

const collection = require.resolve("./postman_collection.json");
const environment = require.resolve("./environment.json");

newman.run({
    collection, 
    environment,
    reporters: 'htmlextra',
    reporter: {
        html: {
            export: './htmlResults.html'
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});


//newman run postman_collection.json -e environment.json