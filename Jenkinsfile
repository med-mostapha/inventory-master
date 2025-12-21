pipeline {
  agent any

  environment {
    CI = 'true'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('TypeScript Check') {
      steps {
        sh 'npm run typecheck'
      }
    }

    stage('Unit Tests') {
      steps {
        sh 'npm test -- --ci'
      }
    }

    stage('Expo Validate') {
      steps {
        sh 'npx expo export'
      }
    }
  }
}
