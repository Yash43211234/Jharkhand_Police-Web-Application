# Jharkhand Police Web App

A web application designed to provide an easy and efficient platform for citizens to file complaints and manage their profiles. The app ensures a smooth and secure complaint registration process with real-time submission directly to police stations.

## Features

- **User-Friendly Interface**: Designed with a simple and intuitive UI for seamless navigation.
- **Complaint Registration**: Allows users to register complaints with detailed descriptions.
- **Profile Management**: Users can create and manage their profiles easily.
- **Secure Authentication**: Implements JWT for secure authentication.
- **Real-Time Complaint Submission**: Complaints are directly submitted to police stations using **Nodemailer**, ensuring quick and reliable communication.
- **Scalable Back-End**: Built using Node.js, Express.js, and MySQL for a reliable and scalable back-end.


## Tech Stack

- **Front-End**: HTML, CSS, JavaScript, React.js
  - **React Libraries**: Bootstrap, Material UI, Ant Design
- **Back-End**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Email Integration**: Nodemailer for real-time complaint submission


## Installation

### Prerequisites
- Node.js (>=14.x)
- MySQL (>=5.x)

### Clone the Repository

```bash
git clone https://github.com/yash43211234/jharkhand-police-web-app.git

```

### Install Dependencies

#### For Frontend

```bash

cd Frontend
npm install
```

#### For Backend

```bash

cd Backend
npm install
```

### Set Up Database
- Create a MySQL database and import the database.sql file to set up the required tables.
- Update the database connection settings in config/database.js.

### Run the App

```bash
npm start
The app will be live on http://localhost:3000.
```

## Usage Registration: 
- Users can sign up and log in securely using their email and password.
- Complaint Submission: Once logged in, users can submit complaints with the necessary details.
- Profile Management: Users can update their profile information at any time.

### Contributing
Feel free to fork this repository, open issues, or submit pull requests for any improvements. Contributions are welcome!

For any inquiries or issues, please reach out to [garimakashyap2121@gmail.com].
