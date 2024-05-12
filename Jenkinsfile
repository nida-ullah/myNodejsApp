pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the Node.js application...'
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying the application...'
                    // Add deployment steps here
                }
            }
        }
    }
}
