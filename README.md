# RBAC_Assignment
Project Description: Role-Based Access Control (RBAC) System
Overview
The Role-Based Access Control (RBAC) system is designed to demonstrate secure implementation of Authentication, Authorization, and access management using roles. It provides functionality to register, log in, log out, and restrict access to resources based on user roles such as Admin, User, and Moderator. The system ensures that only authorized users can perform specific actions, maintaining the principles of least privilege.

The project uses modern authentication techniques, including JWT (JSON Web Tokens) for token-based authentication and role-based middleware to enforce access control.

My Role in Implementing the RBAC System
System Design:

Designed the database schema to support user roles and permissions efficiently.
Planned the folder structure for scalability and maintainability.
Authentication:

Implemented secure user registration and login using bcrypt for password hashing.
Used JWT to issue tokens for authenticated users.
Authorization:

Developed middleware to verify JWT tokens and decode user roles.
Integrated Role-Based Access Control (RBAC) to restrict access based on roles.
API Development:

Created RESTful API endpoints for registration, login, logout, and protected routes.
Added role-specific endpoints like Admin Dashboard.
Security Best Practices:

Implemented security measures such as input validation and token expiration.
Used environment variables for sensitive information like JWT secrets.
Testing:

Conducted manual testing using Postman to verify the correctness of all endpoints.
Tested edge cases for invalid tokens, expired tokens, and unauthorized access.
Key Features
User Registration and Login:

Users can register with a unique email and password.
Logged-in users receive a JWT token for subsequent requests.
Role Management:

Users are assigned roles such as Admin, User, or Moderator.
Each role has specific permissions to access different routes.
RBAC Middleware:

Middleware restricts route access based on user roles.
Unauthorized users attempting to access restricted routes are denied with appropriate error messages.
Session Management:

Tokens have a configurable expiration time.
Users can log out, invalidating their session.
Scalability and Extensibility:

Designed to easily add new roles and permissions.
Instructions to Access and Test
How to Set Up the Project
Clone the repository to your local machine.
Install the required dependencies:
bash
Copy code
npm install
Set up environment variables in a .env file:
Start the development server:
bash
Copy code
npm start
How to Test the System
Open Postman or a similar API testing tool.

Use the following endpoints for testing:

Register: POST /api/auth/register
Login: POST /api/auth/login
Get Profile: GET /api/users/profile (requires JWT token)
Admin Route: GET /api/users/admin (requires Admin role)
Test edge cases:

Use incorrect credentials for login.
Try accessing protected routes without a token or with an expired/invalid token.
Attempt to access the admin route with a non-admin user.
Folder Structure
plaintext
Copy code
project/
│
├── config/
│   └── db.js         # Database connection setup
│
├── controllers/
│   ├── authController.js    # Handles user authentication
│   ├── userController.js    # Handles user-specific routes
│
├── middleware/
│   ├── authMiddleware.js    # Verifies JWT and enforces roles
│
├── models/
│   ├── User.js       # User schema and model
│
├── routes/
│   ├── authRoutes.js # Authentication routes
│   ├── userRoutes.js # User-related routes
│
├── .env              # Environment variables
├── server.js         # Entry point for the application
└── package.json      # Project metadata and dependencies





Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Authentication: JSON Web Tokens (JWT), bcrypt for password hashing
Tools: Postman for API testing



Postman Requests for Testing the RBAC System
Here’s a step-by-step guide to configure and test each API endpoint:

1. Register a New User
HTTP Method: POST
URL: http://localhost:5000/api/auth/register
Headers:
plaintext
Copy code
Content-Type: application/json
Body (JSON):
json
Copy code
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123",
  "role": "User"
}




Expected Response:
json
Copy code
{
  "message": "User registered successfully"
}
2. Log In as the User
HTTP Method: POST
URL: http://localhost:5000/api/auth/login
Headers:
plaintext
Copy code
Content-Type: application/json
Body (JSON):
json
Copy code
{
  "email": "testuser@example.com",
  "password": "password123"
}
Expected Response:
json
Copy code
{
  "token": "your_generated_jwt_token"
}
Copy the token from the response for the next requests.




3. Access the User Profile
HTTP Method: GET
URL: http://localhost:5000/api/users/profile
Headers:
plaintext
Copy code
Authorization: Bearer your_generated_jwt_token
Expected Response:
json
Copy code
{
  "user": {
    "_id": "user_id",
    "username": "testuser",
    "email": "testuser@example.com",
    "role": "User"
  }
}




4. Access an Admin-Only Route
HTTP Method: GET
URL: http://localhost:5000/api/users/admin
Headers:
plaintext
Copy code
Authorization: Bearer your_generated_jwt_token
Expected Response (if user is not an Admin):
json
Copy code
{
  "message": "Access denied. Admins only."
}




5. Log Out the User
HTTP Method: POST
URL: http://localhost:5000/api/auth/logout
Headers:
plaintext
Copy code
Authorization: Bearer your_generated_jwt_token





Expected Response:
json
Copy code
{
  "message": "User logged out successfully"
}
Testing Edge Cases in Postman
Invalid Login Credentials:

Provide an incorrect email or password during login.
Expected Response:
json
Copy code
{
  "message": "Invalid credentials"
}
Access Protected Routes Without Token:

Send requests to /api/users/profile or /api/users/admin without an Authorization header.




Expected Response:
json
Copy code
{
  "message": "Not authorized, no token"
}
Access Admin Route with Non-Admin Role:

Log in with a User role and attempt to access /api/users/admin.




Expected Response:
json
Copy code
{
  "message": "Access denied. Admins only."
}
Tips for Using Postman Effectively



Environment Variables:




Use environment variables in Postman to store reusable values like the base URL and token.
Example:
plaintext
Copy code
Variable Name: base_url
Value: http://localhost:5000
Save Responses:




Postman allows you to save the responses of each request to verify them later.
Collections for Automation:

Use Postman’s Collection Runner to automate the execution of multiple requests in sequence.
By following these steps, you can efficiently test the RBAC system using Postman, ensuring that all functionality is working as expected.
