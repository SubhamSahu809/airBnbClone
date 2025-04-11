# Wanderlust

Wanderlust is a full-stack web application for listing and booking properties. It allows users to sign up, log in, create property listings, leave reviews, and explore properties on an interactive map.

## Features

- **User Authentication**: Users can sign up, log in, and log out using `passport` and `passport-local-mongoose`.
- **Property Listings**: Users can create, edit, and delete property listings with images uploaded to Cloudinary.
- **Reviews**: Users can leave reviews with ratings for properties and delete their own reviews.
- **Interactive Map**: Property locations are displayed on an interactive map using Mapbox.
- **Responsive Design**: The application is styled with Bootstrap for a responsive and modern UI.

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for routing and middleware.
- **Mongoose**: ODM for MongoDB to manage database interactions.
- **Passport.js**: Authentication middleware for user login and session management.
- **Joi**: Schema validation for request data.

### Frontend
- **EJS**: Templating engine for rendering dynamic HTML pages.
- **Bootstrap**: CSS framework for responsive design.
- **Mapbox**: Interactive map integration for property locations.

### File Uploads
- **Multer**: Middleware for handling file uploads.
- **Cloudinary**: Cloud storage for uploaded images.

### Database
- **MongoDB**: NoSQL database for storing user, property, and review data.

### Other Tools
- **dotenv**: Environment variable management.
- **connect-mongo**: MongoDB session store for Express sessions.
- **express-session**: Session management for user authentication.
- **express-flash**: Flash messages for user feedback.

## Key Routes

### User Routes (`routes/user.js`)
- **Sign Up**:
  - `GET /signup`: Renders the signup form.
  - `POST /signup`: Handles user registration using the `userController.signup` method.

- **Log In**:
  - `GET /login`: Renders the login form.
  - `POST /login`: Authenticates the user using `passport` and redirects them to their intended page or a default page.

- **Log Out**:
  - `GET /logout`: Logs the user out and redirects them to the homepage.

### Listing Routes (`routes/listing.js`)
- **All Listings**:
  - `GET /listings`: Displays all property listings.

- **Create New Listing**:
  - `GET /listings/new`: Renders the form to create a new property (requires login).
  - `POST /listings`: Handles the creation of a new property, including image upload and geolocation.

- **View Listing**:
  - `GET /listings/:id`: Displays details of a specific property, including reviews and owner information.

- **Edit Listing**:
  - `GET /listings/:id/edit`: Renders the form to edit a property (requires ownership).
  - `PUT /listings/:id`: Updates the property details.

- **Delete Listing**:
  - `DELETE /listings/:id`: Deletes a property (requires ownership).

### Review Routes (`routes/review.js`)
- **Add Review**:
  - `POST /listings/:id/reviews`: Adds a review to a specific property (requires login).

- **Delete Review**:
  - `DELETE /listings/:id/reviews/:reviewId`: Deletes a specific review (requires ownership).

### Error Handling
- **404 Error**:
  - Any undefined route will trigger a 404 error handled by the `ExpressError` utility.

- **Custom Error Page**:
  - Errors are rendered using the `views/error.ejs` template.

## Deployment on Render

The application is deployed on [Render](https://render.com). Follow these steps to deploy:

1. **Create a Render Account**: Sign up at [Render](https://render.com).

2. **Create a New Web Service**:
   - Link your GitHub repository to Render.
   - Select the branch you want to deploy.

3. **Set Environment Variables**:
   - Add the following environment variables in the Render dashboard:
     ```
     CLOUD_NAME=your-cloudinary-cloud-name
     CLOUD_API_KEY=your-cloudinary-api-key
     CLOUD_API_SECRET=your-cloudinary-api-secret
     MAP_TOKEN=your-mapbox-access-token
     ATLAS_DB_URL=your-mongodb-atlas-url
     SECRET=your-session-secret
     ```

**Deploy**: Render will automatically build and deploy your application. Once deployed, you can access it via the provided URL.
**Visit**https://wonderlust-dvss.onrender.com
   

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


**Author**
SubhamSahu809
