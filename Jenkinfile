pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from Git repository
                git 'https://github.com/yourusername/your-nodejs-app.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies using npm
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run tests for the Node.js application
                sh 'npm test'
            }
        }
        
        stage('Build') {
            steps {
                // Build the Node.js application
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy the Node.js application (example: push to production server)
                sh 'npm run deploy'
            }
        }
    }
}
