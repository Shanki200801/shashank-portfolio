---
title: "Blog Repository API"
description: "A secure RESTful API for blog management with user authentication and authorization"
date: "2023-12-22"
techStack: ["Node.js", "Express", "MongoDB", "JWT", "Docker", "AWS"]
sourceLink: "https://github.com/Shanki200801/BlogRepository-backend"
demoLink: ""
image: "/images/blog-repo.jpeg"
---

## Project Details

Blog Repository API is a robust backend service that provides a complete solution for blog content management with secure user authentication. The system allows users to create accounts, publish blog posts, and manage their content through a RESTful API interface.

### Features

- **User Authentication**: Secure registration and login system using JWT (JSON Web Tokens)
- **Role-Based Authorization**: Different access levels for authenticated and unauthenticated users
- **CRUD Operations**: Complete blog post management (Create, Read, Update, Delete)
- **RESTful API Design**: Well-structured endpoints following REST principles
- **Data Validation**: Input validation to ensure data integrity
- **Containerized Deployment**: Docker configuration for consistent deployment
- **Cloud Deployment**: AWS Elastic Beanstalk configuration for scalable hosting

### Implementation Details

This project was built using Node.js and Express, with MongoDB as the database. The architecture follows a modular approach with clear separation of concerns between routes, models, and middleware.

#### Key Technical Achievements:

- **Secure Authentication**: Implemented JWT-based authentication with password hashing using bcrypt
- **API Security**: Protected routes with middleware to verify user authentication
- **Database Design**: Created efficient MongoDB schemas for users and blog posts
- **Docker Integration**: Containerized the application and database for easy deployment
- **Multi-Container Setup**: Configured Docker Compose for local development with separate app and database containers
- **AWS Deployment**: Set up Elastic Beanstalk configuration for cloud deployment

#### Architecture Highlights:

- **Modular Structure**: Organized codebase with separate modules for routes, models, and middleware
- **Protected vs. Public Routes**: Different route handlers for authenticated and public access
- **Environment Configuration**: Flexible configuration through environment variables
- **Stateless Authentication**: JWT-based authentication for scalable, stateless operation

This project demonstrates my ability to design and implement secure, scalable backend systems with modern authentication practices and containerized deployment strategies. 