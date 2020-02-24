const stitch = require("mongodb-stitch")
//'rating-iyxzl' is the app name given by stitch
const client = new stitch.StitchClient('gallindoangular-asmjn');
// the db name 'gallindoAngular' was provided by me
const db = client.service('mongodb', 'mongodb-atlas').db('gallindoAngular');
client.login().then(() =>
//     db.collection('posts').updateOne({ owner_id: client.authedId() }, { $set: { number: 42 } }, { upsert: true })
// ).then(() =>
    db.collection('posts').find(
        { post_id: client.authedId() }
        )
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
    console.error(err)
});