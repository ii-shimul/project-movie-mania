# Movie Portal

## Live Website
[Visit the Live Site](https://moviemania-660e7.web.app/)

## Features

- **User Authentication**: Secure login and registration functionality with email/password and Google OAuth.
- **Dynamic Movie Management**: Add, update, view, and delete movies with real-time database integration.
- **Favorites Management**: Allows users to add and manage their favorite movies.
- **Advanced Search**: Search movies by title for easy navigation and discovery.
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop devices.
- **Dark/Light Theme Toggle**: Users can switch between dark and light modes for a customized experience.

## Technologies Used

### Frontend
- **React**: Component-based library for building the user interface.
- **React Router Dom**: For seamless navigation between routes.
- **React Toastify**: To display notifications for CRUD operations.
- **React Simple Star Rating**: For an interactive star rating system.
- **React Hook Form**: For form management with validation.
- **SweetAlert2**: For stylish alerts and modals.
- **AOS (Animate on Scroll)**: Adds animations when scrolling.
- **React Fast Marquee**: For smooth scrolling marquee elements.
- **Animate.css**: For pre-built CSS animations.
- **PrimeReact & PrimeIcons**: For UI components and icons.
- **Preline**: A utility-first CSS framework for designing.
- **React Headroom**: For a sticky and dynamic header.

### Backend
- **Firebase**: Authentication and database management.
- **MongoDB**: Database for storing movie and user information.

### Utilities
- **LocalForage**: For offline data storage.
- **Match Sorter**: Simplifies the implementation of search functionality.
- **Multiselect React Dropdown**: Enhances dropdowns with multi-select capabilities.
- **Choices.js**: For customizing select inputs and dropdowns.

## Key Pages

1. **Home Page**
   - Dynamic carousel slider.
   - Featured movies section showing top-rated movies.
   - Two additional meaningful sections to enhance user experience.

2. **All Movies Page**
   - Displays all movies in a grid layout.
   - Includes search functionality.
   - Allows navigation to the movie details page.

3. **Add Movie Page**
   - Private route for logged-in users.
   - Form with validation for adding new movies.

4. **Movie Details Page**
   - Detailed information about a selected movie.
   - Options to delete or update the movie.
   - Button to add the movie to favorites.

5. **Favorites Page**
   - Private route showing all movies marked as favorites by the user.
   - Includes a "Delete Favorite" option.

6. **Authentication Pages**
   - Login and Registration forms with validation.
   - Google OAuth for social login.

7. **404 Page**
   - Custom error page for non-existent routes.

## Deployment
- **Frontend**: Hosted on Firebase.
- **Backend**: Hosted on Vercel.

## Environment Variables
- **Firebase Config**: Stored in an `.env` file for security.
- **MongoDB Credentials**: Hidden using environment variables.


## Contribution
Feel free to fork this repository, make updates, and create a pull request. Contributions are welcome!