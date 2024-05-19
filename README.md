# Contact CRUD Web Application

This project demonstrates a basic full-stack web application built with Java Spring Boot for the backend and React for the frontend. The application enables users to perform CRUD (Create, Read, Update, Delete) operations on contact information.

## Technologies Used

### Backend:

- **Java Spring Boot**: A framework for building microservices and RESTful APIs.
- **Spring Data JPA**: For seamless integration with the Java Persistence API (JPA) to manage database operations.
- **MySQL**: The relational database management system used to store contact data.
- **Maven**: For project management and dependency management.
- **IntelliJ IDEA**: The integrated development environment (IDE) used for development.

### Frontend:

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for styling the frontend components.
- **Axios**: A promise-based HTTP client for the browser to communicate with the backend API.

### Testing and Tools:

- **Postman**: For testing the RESTful APIs.

## Project Structure

The repository is divided into two main directories:

- `contactcrud-backend`: Contains the Spring Boot application.
- `contactcrud-frontend`: Contains the React application.

## How to Run the Project

### Prerequisites

- Java Development Kit (JDK) 17 or higher
- Node.js and npm
- MySQL Server
- IntelliJ IDEA

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/chiragbhatia7/PRODIGY_SD_03.git
   cd contactcrud-backend
   ```

2. Configure MySQL Database:

   - Create a database named `contactcrud`.
   - Update the `application.properties` file in the `src/main/resources` directory with your MySQL username and password:
     ```properties
     spring.application.name=contact-crud
     spring.jpa.hibernate.ddl-auto=update
     spring.datasource.url=jdbc:mysql://localhost:3306/contactcrud
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
     ```

3. Build and Run the Spring Boot Application:
   - Open the project in IntelliJ IDEA.
   - Build the project using Maven.
   - Run the application from IntelliJ IDEA or use the command:
     ```bash
     mvn spring-boot:run
     ```

The backend server should now be running at `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd contactcrud-frontend
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Start the React Application:
   ```bash
   npm start
   ```

The frontend should now be running at `http://localhost:3000`.
