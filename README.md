# Habit Tracker Backend

This repository contains the backend code for the Habit Tracker project, developed during Week 3 (Node.js & Express.js) of the KCL Tech Academy Webdev Workshop Series, hosted by Waseef Khan. The `index.html` file was developed during Weeks 1 and 2 (HTML & CSS, JavaScript). The frontend React application was developed in Week 4.

Follow [@kcltech](https://www.instagram.com/kcltech/) and [@kcl_tech_academy](https://www.instagram.com/kcl_tech_academy/) on Instagram for updates!


#### Note: You will need to run the backend and frontend servers in separate terminals.

## Installation & Backend Setup

To install the necessary npm packages, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/KCL-Tech-Society/kta-webdev.git
    ```
    Or download the **ZIP file** from the repository page and extract it.

2. Navigate to the project directory:
    ```bash
    cd kta-webdev/habit-tracker-backend
    ```

3. Install the npm packages:
    ```bash
    npm install
    ```

4. Create a `.env` file in the project directory and specify the `PORT`:
    ```bash
    PORT=5000
    ```

5. After installing the npm packages, you can start the development server with:
    ```bash
    npm run dev
    ```

## Frontend Setup

To set up and start the frontend React application, follow these steps:

1. Navigate to the frontend directory:
    ```bash
    cd ./frontend
    ```

2. Install the npm packages:
    ```bash
    npm install
    ```

3. Update the `package.json` file to add a proxy for the backend:
    ```json
    "proxy": "http://localhost:5000"
    ```

4. Start the React development server:
    ```bash
    npm start
    ```

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.