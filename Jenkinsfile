pipeline{
    agent any

    environment {
        registry = "737349677596.dkr.ecr.us-east-1.amazonaws.com/frontend/web-app"
    }

    stages{
        stage('Checkout'){
            steps {
                // Checkout code repo
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins', url: 'git@bitbucket.org:directvla/front-app-k8s.git']]])
            }
        }
        stage("Docker Build"){
            steps{
                sh '''yarn install && yarn build
                      '''
                script{
                    dockerImage = docker.build registry
                }
            }
        }
    }
}