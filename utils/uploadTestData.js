const fs = require ('fs');
const mongoose = require ('mongoose');
const object = require ('../models/classes.model');
const dotenv = require ('dotenv');
dotenv.config ('./.env');

fileNameToUpload = 'classes.data.json';

const app = require ('../app');

const content = JSON.parse (
  fs.readFileSync (`${__dirname}/${fileNameToUpload}`, 'utf-8')
);
// console.log (JSON.parse (content));

const db = process.env.DATABASE.replace (
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect (db)
  .then (async () => {
    console.log ('DB connected successfully');
    try {
      await object.deleteMany ({});
      console.log ('Existing records cleared');

      const result = await object.insertMany (content);
      console.log (`Inserted ${content.length} records`);
    } catch (err) {
      console.log (err.message);
    } finally {
      mongoose.connection.close ();
      console.log ('Connection closed');
    }
  })
  .catch (err => {
    console.log (`MongoDB connectiob Error: ${err.message}`);
  });

app.listen (9000, () => {
  console.log (`Server is listening on port: 9000`);
});
