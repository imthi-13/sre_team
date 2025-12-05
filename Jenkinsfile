pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/imthi-13/sre_team.git'
            }
        }

        stage('Run Script') {
            steps {
                sh './build.sh'
            }
        }

        stage('Complete') {
            steps {
                echo 'Build Successful!'
            }
        }
    }
}
