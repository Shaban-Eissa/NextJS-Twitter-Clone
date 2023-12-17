# NextJS Twitter Clone

<img src="https://github.com/Shaban-Eissa/NextJS-Twitter-Clone/assets/49924090/bce78ad7-28ca-494e-b834-c13a4b4bc65a" width="300" height="300" />


A full-stack Twitter clone built with Next, React, Firebase. This project aims to replicate the core features of Twitter, allowing users to post tweets, adding comments on tweets.

## Table of Contents

* [Features](#features)
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)


## Features

* **User Authentication:** Secure user authentication system using NextAuth for secure login.
* **Tweeting:** Post tweets, complete with text and images, and view tweets from other users.
* **Real-time Updates:** Real-time updates for tweets.
* **Tweets Comments:** Adding comments on tweets.
* **Responsive Design:** Mobile-friendly design to ensure a seamless user experience across devices.


## Demo

<img src="https://github.com/Shaban-Eissa/NextJS-Twitter-Clone/assets/49924090/baf3a2f1-a8ae-4b2f-86a1-e19edf5282e6" width="900" height="380" />
<br />
Check out the live demo 

## Installation

1. **Clone the repository:**
    
    ```bash
    git clone https://github.com/Shaban-Eissa/React-Twitter-Clone.git
    ```
    
2. **Install dependencies:**
    
    ```bash
    cd React-Twitter-Clone
    npm install
    ```

3. **Set up Firebase:**
    
    * Create a Firebase project: Go to the [Firebase Console](https://console.firebase.google.com/), click on "Add Project," and follow the setup instructions.
        
    * Get Firebase configuration:
        
        * In the Firebase Console, navigate to your project settings.
        * Under the "General" tab, scroll down to the "Your apps" section.
        * Click on the web app icon (</>) to create a new web app.
        * Copy the Firebase configuration object.
    * Configure the React app:
        
        * In your React app, locate the Firebase configuration file (e.g., `src/firebase.js`).
        * Replace the placeholder values with the Firebase configuration values you copied.
        
        Example Firebase configuration file:
        
        ```javascript
        // src/firebase.js
        
        const firebaseConfig = {
          apiKey: 'YOUR_API_KEY',
          authDomain: 'YOUR_AUTH_DOMAIN',
          projectId: 'YOUR_PROJECT_ID',
          storageBucket: 'YOUR_STORAGE_BUCKET',
          messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
          appId: 'YOUR_APP_ID',
        };
        
        export default firebaseConfig;
        ```
        
    
4. **Set up NextAuth:**
    
    * Add the following environment variables to your `.env.local` file:
       
        ```env
        GOOGLE_CLIENT_ID=your-google-client-id
        GOOGLE_CLIENT_SECRET=your-google-client-secret
        NEXTAUTH_URL=http://localhost:3000
        JWT_SECRET=your-jwt-secret
        ```

        * `GOOGLE_CLIENT_ID`: Your Google OAuth client ID.
        * `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret.
        * `NEXTAUTH_URL`: The URL of your Next.js application.
        * `JWT_SECRET`: Secret key for JSON Web Token (JWT) encryption. you can generate one through this link https://generate-secret.vercel.app/32
    
5. **Run the application:**
    
    ```bash
    npm run dev
    ```
    
    The application will be accessible at `http://localhost:3000`.
    

## Usage

1. **Sign In:**
    
    Allow users sign-in to accounts with NextAuth.
    
2. **Post Tweets:**
    
     Allow users to post tweets on the home page.
    
    
4. **Real-time Interactions:**
    
    Experience real-time updates for tweets as they happen.


5. **Tweet Comments:**
    
    Adding comments on tweets.
   

6. **Delete Tweet:**
    
    Allowing users to delete there own tweets.


   

## Technologies Used

* **Frontend:**
    
    * React
    * Next
    * Headless-ui
    * Hero-icons
    * Recoil
      
* **Backend:**
    
    * Firebase
      
* **Authentication:**
  
    * NextAuth

* **Styling:**
    
    * Tailwindcss

## Contributing

Contributions are welcome.


