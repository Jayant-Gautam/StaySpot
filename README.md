# StaySpot

StaySpot is a full-stack web application for listing, discovering, and reviewing unique stays and vacation rentals around the world. Built with Node.js, Express, MongoDB, and EJS, it provides a seamless experience for users to sign up, log in, create listings, upload images, and leave reviews.

## Features

- **User Authentication:** Secure signup, login, and logout using Passport.js.
- **Listings Management:** Create, edit, delete, and view property listings with image uploads via Cloudinary.
- **Review System:** Authenticated users can add and delete reviews with star ratings.
- **Flash Messages:** User feedback for actions like login, signup, and CRUD operations.
- **Responsive UI:** Modern design with Bootstrap and custom CSS for a smooth experience on all devices.
- **Validation:** Robust server-side validation for listings and reviews using Joi.
- **Error Handling:** Friendly error pages and validation feedback.

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS templates, Bootstrap, Custom CSS
- **Authentication:** Passport.js, passport-local-mongoose
- **File Uploads:** Multer, Cloudinary
- **Validation:** Joi
- **Session & Flash:** express-session, connect-flash

### 🏷️ Tags

`nodejs` `express` `mongodb` `mongoose` `ejs` `cloudinary` `bootstrap` `fullstack` `render` `webapp` `authentication` `mvc` `session-deployment`

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB Atlas account
- Cloudinary account

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/stayspot.git
   cd stayspot
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:** Create a `.env` file in the root directory and add your MongoDB, Cloudinary, and session secret keys.
4. **Run the application:**
   ```sh
   npm start
   ```
5. **Access the app:** Open your browser and go to `https://stayspot-uvbf.onrender.com`.

## Usage

- **Sign Up / Log In:** Create an account or log in to access exclusive features.
- **Browse Listings:** Explore unique stays and vacation rentals.
- **Create a Listing:** Share your property by creating a listing with images and details.
- **Leave a Review:** Provide feedback on listings you've visited.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
