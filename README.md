<p align="center">
  <img src="https://github.com/user-attachments/assets/247ab4ce-f422-4a32-9235-96f73551beed" alt="HashProof Logo" width="250" height="250">
</p>

<p align="center">
  <i>Protect the integrity of your documents with a SHA-256 based verification hash</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
  <img src="https://img.shields.io/badge/Nest-E0234E?style=for-the-badge&logo=nestjs&logoColor=white">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/Postgres-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">
  <img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white">
</p>
<p align="center">
  <i> https://hashproof.vercel.app </i>
</p>

## 🚀 Overview

**HashProof** is a lightweight, open-source webapp tool that allows users to **generate SHA-256 hashes** for digital PDF documents while ensuring maximum privacy. 

Unlike other verification tools, **HashProof does not store any files**—everything happens in memory, making it a secure and privacy-respecting solution.


### 🧠 Why HashProof?  

In a digital era where document integrity is critical, ensuring that a file remains unaltered is essential. Traditional solutions often store files in a database or process them in external servers, potentially exposing sensitive information. 

HashProof offers a **privacy-first** approach by generating the cryptographic fingerprint **on the fly** without storing or logging user data.

### 🧪 How It Works  
1. **Upload a document** (PDF format, up to 10MB).  
2. **Generate its SHA-256 hash**, a unique fingerprint.  
3. **Copy the hash to your clipboard** for secure storage or verification elsewhere.  

### 📚 Features  
|   | Description |
|---|-------------------------------------------------------------|
|✅ |**Drag & Drop File Upload** for a seamless experience.  |
|✅ |**Real-Time SHA-256 Hash Generation** with an asynchronous API. |  
|✅ |**No File Storage**—documents are never saved, ensuring user privacy. |  
|✅ |**Easy copy to clipboard** to keep your hash wherever you need.  |
|✅ |**Modern UI with Angular** for a smooth user experience.  |
|✅ |**Fast & Scalable Backend** using NestJS, Supabase (PostgreSQL), and Railway. |  
|✅ |**Deployed with Vercel (Frontend) & Railway (Backend)** for high availability. | 







### 🧭 Installation

1. **Clone the Repository**
     ```sh
     git clone https://github.com/your-username/HashProof.git
     cd HashProof
     ```


2. **Set Up the Backend**

    ```
    cd backend
    npm install
    ```

3. **Create .env file in the backend directory and add the following**
  
    ```
    DATABASE_URL=your_supabase_postgres_url
    PORT=your_port
    ```

4. **Run the backend**
    ```
    npm run start
    ```

5. **Set Up the frontend**
    ```
    cd ../frontend
    npm install
    ```

6. **Run Angular App**
    ```
    ng serve
    ```


## 🧰 Tech Stack and Integrations  

HashProof integrates technologies to ensure **performance, scalability, and a smooth user experience**. Below is a breakdown of the stack:

| **Category**            | **Technology**       | **Description** |
|-------------------------|---------------------|----------------|
| **Frontend Framework**            | Angular             | Provides a component-based architecture for a dynamic and interactive UI. |
| **Frontend Styling**    | SASS                | Used for styling and customizable themes with powerful CSS features. |
| **Front/Back Language**   | TypeScript          | Ensures strongly-typed code and maintainability in both frontend and backend. |
| **Backend Framework**   | NestJS              | Provides a scalable, modular backend built on top of Node.js with TypeScript. |
| **Hashing Algorithm**   | SHA-256             | Cryptographic function to generate a unique fingerprint of documents. |
| **Database (SQL)**           | Postgres          | Reliable SQL database for future storage of hash records. |
| **Database Hosting**    | Supabase            | Serverless Postgres with API authentication and seamless integration. |
| **Backend Deployment**  | Railway             | Cloud platform for scaling backend services and API hosting. |
| **Frontend Deployment** | Vercel              | Fast global deployment of the web app with automatic builds. |
| **Asynchronous Requests** | Promises & Async/Await | Ensures smooth non-blocking API communication. |
| **Security & Privacy**  | No file storage     | The system never stores documents, only processes them in memory for hashing. |

## ⚖️ License

This Open Source project is licensed under the **BSD 3-Clause License**.

## 🔮 Contributing

Contibutions are welcome! Follow these steps:

1. Fork the Project

2. Create a feature branch:

  ```
  git checkout -b feature/new-feature
  ```

3. Make your changes and commit them
  ```
  git push origin feature/your-feature
  ```
  
4. Open a Pull Request!


##  🌎 LIVE DEMO at https://hashproof.vercel.app

<p align="center">

  <img src="https://github.com/user-attachments/assets/0ec7b4c9-6581-4078-9e74-14a32864ecba" width="367">
  <img src="https://github.com/user-attachments/assets/a18e710c-a67f-48a4-b1b2-6e51f9900781" width="360">
</p>


