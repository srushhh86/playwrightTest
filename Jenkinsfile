pipeline {

    agent any

    tools {
        nodejs 'NodeJS18'
    }

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/srushhh86/playwrightTest.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Execute Tests') {
            steps {
                sh 'npx playwright test --grep "@smoke"'
            }
        }

        stage('Publish HTML Report') {
            steps {

                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])

            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'playwright-report/**/*'

        }

        success {
            echo 'Pipeline Passed'
        }

        failure {
            echo 'Pipeline Failed'
        }
    }
}