 Role-Based Access Control (RBAC) System










 
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




Start the development server:
bash
Copy code
npm start





Technologies Used





Backend: Node.js, Express.js




Database: MongoDB (Mongoose)




Authentication: JSON Web Tokens (JWT), bcrypt for password hashing




Tools: Postman for API testing






By following these steps and details, the system can be set up, understood, and tested effectively.
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           Here is a step-by-step guide for testing the RBAC system using Postman. These steps will guide you through each operation, from registration to accessing protected routes.

Step 1: Register a New User
Open Postman and create a new request:





Select POST as the HTTP method.
Enter the URL: http://localhost:5000/api/auth/register.
Go to the Body Tab:




Select raw and choose JSON as the format.
Enter the following JSON in the body:
json
Copy code
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123",
  "role": "User"
}
Send the Request:





Click the Send button.
You should receive a response similar to this:
json
Copy code
{
  "message": "User registered successfully",
  "token": "your_jwt_token_here"
}


Step 2: Log In a User
Create another request:






Select POST as the HTTP method.


Enter the URL: http://localhost:5000/api/auth/login.
Go to the Body Tab:





Select raw and choose JSON as the format.
Enter the following JSON in the body:











json
Copy code
{
  "email": "testuser@example.com",
  "password": "password123"
}
Send the Request:




Click the Send button.




You should receive a response similar to this:


json
Copy code
{
  "message": "Login successful",
  "token": "your_jwt_token_here"
}
Copy the token value from the response.











Step 3: Access Protected User Profile
Create a new request:



Select GET as the HTTP method.





Enter the URL: http://localhost:5000/api/users/profile.
Add the Authorization Header:




Go to the Authorization tab.
Select Bearer Token as the type.
Paste the token from the Login response into the field.
Send the Request:



Click the Send button.
You should receive a response like this:










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







Step 4: Access Admin Route


Create another request:


Select GET as the HTTP method.
Enter the URL: http://localhost:5000/api/users/admin.




Add the Authorization Header:

Go to the Authorization tab.
Select Bearer Token as the type.
Paste the token of an Admin user (not a regular user).
Send the Request:



If the user is an admin, you should see this response:





json
Copy code
{
  "message": "Welcome to the Admin route!"
}
If the user is not an admin, the response will be:
json
Copy code
{
  "message": "Access denied"
}








Step 5: Log Out
Create a new request:

Select POST as the HTTP method.
Enter the URL: http://localhost:5000/api/auth/logout.







Send the Request:



Click the Send button.











The response should be:
json
Copy code
{
  "message": "Logout successful"
}









Step 6: Testing Edge Cases














Case A: Try accessing a protected route without a token
Go to the User Profile endpoint (/api/users/profile).
Do not include the Authorization Header.



Click Send.



You should see this response:
json


Copy code
{
  "message": "Not authorized, no token"
}










Case B: Try accessing the Admin route with a non-admin token
Use the token from a User role.
Go to the Admin route (/api/users/admin) and send the request.
The response should be:
json
Copy code
{
    "message": "Access denied"
}






Organizing Requests in Postman
Create a Collection in Postman:





Click New Collection and name it RBAC System.




Add each request (Register, Login, Profile, Admin, Logout) into the collection for easier management.
Save the collection and reuse it for future testing.




This systematic approach ensures you can test all functionalities and edge cases effectively using Postman.
