pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Installation') {
            steps {
               git 'https://github.com/mrRamezanzad/express-hello-world.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    sh "npm install"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh "npm run start"
                }
            }
        }

        // stage('Checkout') {
        //     steps {
        //         git 'https://github.com/mrRamezanzad/express-hello-world.git'
        //     }
        // }

        // stage('Build') {
        //     steps {
        //         script {
        //             sh "docker compose -f ${DOCKER_COMPOSE_FILE} build"
        //         }
        //     }
        // }

        // stage('Test') {
        //     steps {
        //         script {
        //             sh "docker compose -f ${DOCKER_COMPOSE_FILE} up --abort-on-container-exit --exit-code-from app"
        //         }
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         script {
        //             sh "docker compose -f ${DOCKER_COMPOSE_FILE} up -d"
        //         }
        //     }
        // }
    }

    post {
        // always {
        //     sh "docker compose -f ${DOCKER_COMPOSE_FILE} down"
        // }
        success {
            echo 'Deployment was successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
