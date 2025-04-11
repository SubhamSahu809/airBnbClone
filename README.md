# Wanderlust

**Wanderlust** is a full-stack web application for listing and booking properties. It allows users to sign up, log in, create property listings, leave reviews, and explore properties on an interactive map.

🚀 Live Demo: Wanderlust on Render
---

## ✨ Features

- **🔐 User Authentication:** Users can sign up, log in, and log out using Passport.js.
- **🏠 Property Listings:** Create, edit, and delete property listings with image uploads via Cloudinary.
- **⭐ Reviews:** Leave ratings and reviews for properties; users can delete their own reviews.
- **🗺️ Interactive Map:** Display property locations using Mapbox.
- **📱 Responsive Design:** Built with Bootstrap for modern and responsive UI.

---

## 🛠️ Technologies Used

### 🔧 Backend

- **Node.js:** JavaScript runtime for building the backend.
- **Express.js:** Web framework for building RESTful APIs.
- **Mongoose:** MongoDB ODM for data modeling and queries.
- **Passport.js:** Authentication middleware for login and session management.
- **Joi:** Data validation for request schemas.

### 🎨 Frontend

- **EJS:** Templating engine for dynamic page rendering.
- **Bootstrap:** CSS framework for responsive design.
- **Mapbox:** For rendering interactive maps.

### 📁 File Uploads

- **Multer:** Middleware for handling `multipart/form-data`.
- **Cloudinary:** Image hosting and transformation.

### 💾 Database

- **MongoDB:** NoSQL database for storing users, listings, and reviews.

### 🧰 Utilities

- **dotenv:** Environment variable management.
- **connect-mongo:** MongoDB-based session storage.
- **express-session:** Middleware for session handling.
- **express-flash:** Flash messages for user feedback.

---

## 🔗 Key Routes Overview

### 👤 User Routes (`routes/user.js`)

- **GET `/signup`** - Render sign-up form.
- **POST `/signup`** - Register a new user.
- **GET `/login`** - Render login form.
- **POST `/login`** - Authenticate and log in user.
- **GET `/logout`** - Log out user.

### 🏡 Listing Routes (`routes/listing.js`)

- **GET `/listings`** - Show all listings.
- **GET `/listings/new`** - Form to create a new listing *(Login required)*.
- **POST `/listings`** - Create new listing with image and location data.
- **GET `/listings/:id`** - View a specific listing.
- **GET `/listings/:id/edit`** - Edit form *(Only owner)*.
- **PUT `/listings/:id`** - Update listing.
- **DELETE `/listings/:id`** - Delete listing *(Only owner)*.

### ✍️ Review Routes (`routes/review.js`)

- **POST `/listings/:id/reviews`** - Add a new review *(Login required)*.
- **DELETE `/listings/:id/reviews/:reviewId`** - Delete review *(Only review owner)*.

---

## ⚠️ Error Handling

- **404 Error:** Unmatched routes throw a custom 404 error via `ExpressError`.
- **Custom Error Pages:** Rendered using `views/error.ejs`.

---

## 📂 Folder Structure

    ```bash
    .
    ├── models/
    ├── routes/
    ├── controllers/
    ├── views/
    ├── public/
    ├── app.js
    ├── .env
    └── README.md

---

## 🚀 Deployment on Render

The app is deployed on [Render](https://render.com/). Here's how to deploy:

1. **Create a Render Account:** Sign up at [render.com](https://render.com).
2. **Create a Web Service:**
   - Connect your GitHub repository.
   - Select the branch to deploy.
3. **Set Environment Variables:**
   ```bash
   CLOUD_NAME=your-cloudinary-cloud-name
   CLOUD_API_KEY=your-cloudinary-api-key
   CLOUD_API_SECRET=your-cloudinary-api-secret
   MAP_TOKEN=your-mapbox-access-token
   ATLAS_DB_URL=your-mongodb-atlas-url
   SECRET=your-session-secret

4. **Deploy:** Render will build and deploy your app automatically.

🔗 **Live App:** [https://wonderlust-dvss.onrender.com](https://wonderlust-dvss.onrender.com)

---


**Installation (Local Development)**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wanderlust.git
   cd wanderlust
   
2. Install dependencies:
   ```bash
   npm install
   
3. Set up environment variables: Create a .env file in the root directory and add the following:
   ```bash
   CLOUD_NAME=your-cloudinary-cloud-name
   CLOUD_API_KEY=your-cloudinary-api-key
   CLOUD_API_SECRET=your-cloudinary-api-secret
   MAP_TOKEN=your-mapbox-access-token
   ATLAS_DB_URL=your-mongodb-atlas-url
   SECRET=your-session-secret

4. Start the application:
   ```bash
   nodemod app.js

5. Visit the application in your browser at http://localhost:8080.

---

📸 Screenshots 
You can add some images here from your views (e.g., home page, listing page, review form).

📌 Future Improvements 
-Booking system integration
-Admin dashboard
-Pagination for listings/reviews
-Email verification


🧑‍💻 Author
SubhamSahu809 



