const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const jwtkey = 'your_secret_key';  // Ensure this is securely managed
const app = express();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const PORT = 3001;


app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
const SECRET_KEY = 'your_secret_key';


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Setup file storage


// Multer Configuration
const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "uploads");
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
  })
}).single("user_file");

// Route to handle form submission
app.post('/upload', upload, (req, res) => {
  res.status(200).json({ message: "Form data received successfully!" });
});


//data signup url mai transfer hoga.... thik hai
app.post('/signup', (req, res) => {
  const { name, email, password, userType } = req.body;
  const userData = { name, email, password, userType };

  connection.query('INSERT INTO newuser SET ?', userData, (err, result) => {
      if (err) {
          console.error('Error inserting data:', err);
          return res.status(500).json({ message: 'Error inserting data' });
      }
      const user = { email: email };

      // Generate JWT for the authenticated user
      jwt.sign({ user }, jwtkey, { expiresIn: '2h' }, (error, token) => {
        if (error) {
          console.error('JWT signing error:', error);
          return res.status(500).json({ error: 'Error signing JWT.' });
        }
        
        // Send a single response with user and token
        
        res.json({ user, auth: token });
      
      console.log('Data inserted successfully');
      
  });

});
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Early return if email or password is missing
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }
  
  // Prepare a safer query avoiding SQL injection
  const query = `SELECT * FROM newuser WHERE email = ? AND password = ?`;
  
  connection.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    
    if (results.length === 1) {
      const userType = results[0].userType;

      const user = {
         email:email,
         userType:userType  
      };
      

      // Generate JWT for the authenticated user
      jwt.sign({ user }, jwtkey, { expiresIn: '15m' }, (error, token) => {
        if (error) {
          console.error('JWT signing error:', error);
          return res.status(500).json({ error: 'Error signing JWT.' });
        }
        
        // Send a single response with user and token
        
        res.json({user, auth: token });
        
      });
    } else {
      // Send a response indicating invalid credentials if user not found
      res.status(401).json({ error: 'Invalid credentials!' });
    }
  });
});


app.post('/MissingVehicle', (req, res) => {
  const { vehicleNumber,engineNumber,chassisNumber,date } = req.body;
  const vehicledata = {vehicleNumber,engineNumber,chassisNumber,date };

  // Insert form data into MySQL database
  connection.query('INSERT INTO vehicledetails SET ?', vehicledata, (error, results, fields) => {
    if (error) {
      console.error('Error saving form data to database: ', error);
      res.status(500).json({ error: 'Failed to save form data' });
      return;
    }

    console.log('vehicle data saved successfully');
    res.status(200).json({ message: 'vehicle data saved successfully' });
  });
});

app.get('/MissingVehicle', (req, res) => {
  // Query to select data from the database
  const query = 'SELECT * FROM vehicledetails';

  // Execute the query
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Respond with the fetched data
    res.json(results);
  });
});


app.post('/form_data', (req, res) => {
  const formData = req.body;

  // Insert form data into MySQL database
  connection.query('INSERT INTO form_data SET ?', formData, (error, results, fields) => {
    if (error) {
      console.error('Error saving form data to database: ', error);
      res.status(500).json({ error: 'Failed to save form data' });
      return;
    }

    console.log('Form data saved successfully');
    res.status(200).json({ message: 'Form data saved successfully' });
  });
});


//insert feedback data in database only
app.post('/feedpost', (req, res) => {
  const { name, email, message} = req.body;
  const userData = {name, email, message};
  
  connection.query('INSERT INTO feedback SET ?', userData, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    }
    res.status(200).json({ message: 'submit ho gaya' });
    console.log('Data inserted successfully');
  });
});


// API to get feedback
app.get('/feedget', (req, res) => {
  const query = 'SELECT * FROM feedback';
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send('Failed to retrieve feedback');
    } else {
      res.json(results);
    }
  });
});

//insert theft details url->submt
app.post('/submit', (req, res) => {
  const { firstName, lastName, email } = req.body;
  const userData = { firstName, lastName, email };

  connection.query('INSERT INTO users SET ?', userData, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    console.log('Data inserted successfully');
  });
});


app.get('/data', (req, res) => {
  // Fetch all data from MySQL database
  connection.query('SELECT * FROM form_data', (error, results, fields) => {
    if (error) {
      console.error('Error fetching data from database: ', error);
      res.status(500).send('Failed to fetch data from database');
      return;
    }

    // Render the 'data' template and pass the fetched data to it
    res.render('data', { formData: results });
  });
});


app.post('/addDevice', (req, res) => {
  let data = {
    Brand: req.body.brand,
    Model: req.body.model,
    Color: req.body.color,
    IMEI: req.body.imei,
    DateOfLoss: req.body.dateOfLoss,
    LocationOfLoss: req.body.locationOfLoss,
    OwnerName: req.body.ownerName,
    ContactNumber: req.body.contactNumber,
    Email: req.body.email,
    DeviceImage: req.body.deviceImage,
    Description: req.body.description
  };

  let sql = "INSERT INTO LostDevices SET ?";
  connection.query(sql, data, (error, results, fields) => {
    if (error) return res.status(500).send(error);

    res.send({ message: "Device added successfully!" });
  });
});


app.get('/addDevice', (req, res) => {
  // Construct the SQL query to select data from the table
  const sql = 'SELECT * FROM LostDevices';

  // Execute the SQL query
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error selecting data:', err);
      res.status(500).send('Error selecting data');
      return;
    }
    // Send the selected data as a JSON response
    res.json(results);
  });
});



app.post('/api/missing-person-reports', upload, (req, res) => {
  // Destructure fields from req.body
  const { email, complaint_type, full_name, dob, age, gender, height, weight, clothes, appearance, last_seen_location, last_seen_time, contact_name, contact_phone_number, description } = req.body;
  
  const photo =  req.file.path;
  
  // Create userdata object containing all fields including photo
  const userdata = { email, complaint_type, full_name, dob, age, gender, height, weight, clothes, appearance, last_seen_location, last_seen_time, contact_name, contact_phone_number, description, photo };

  // Insert userdata into the database
  connection.query('INSERT INTO missing_person_reports SET ?', userdata, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    res.send("Submission successful");
    console.log('Data inserted successfully');
  });
});


app.get('/api/missing-person-reports', (req, res) => {
  // Construct the SQL query to select data from the table
  const sql = 'SELECT * FROM missing_person_reports';

  // Execute the SQL query
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error selecting data:', err);
      res.status(500).send('Error selecting data');
      return;
    }
    // Send the selected data as a JSON response
    res.json(results);
  });
});


// Routes
app.post('/submit-survey', (req, res) => {
  const data = req.body;
  const query = `INSERT INTO CommunityPoliceSurvey (email, safetyConcerns, policePresence, policeEffectiveness, communityManagement, policingPriorities, suggestions, satisfaction) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(query, [data.email, data.safetyConcerns, data.policePresence, data.policeEffectiveness, data.communityManagement, data.policingPriorities, data.suggestions, data.satisfaction], (err, result) => {
      if (err) {
          console.error('Failed to insert survey data', err);
          res.status(500).send('Error saving survey data');
          return;
      }
      res.send('Survey data submitted successfully!');
  });
});


app.get('/survey-data', (req, res) => {
  const sql = 'SELECT * FROM CommunityPoliceSurvey';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error selecting data:', err);
      res.status(500).send('Error selecting data');
      return;
    }
    res.json(results);
  });
});







//Port address 3001
app.listen(PORT, () => {
  console.log('Server is running on port', {PORT});
});