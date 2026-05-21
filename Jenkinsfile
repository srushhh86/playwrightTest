pipeline {

    agent any

    tools {
        nodejs 'NodeJS18'
    }



    stages {

        stage('Checkout') {
            steps {
              git branch:'main',
                url: 'https://github.com/srushhh86/playwrightTest.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Execute Tests') {
            steps {
                sh 'npx playwright test --grep @smoke'
            }
        }

        stage('Publish Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**/*'
            }
        }
    }
}