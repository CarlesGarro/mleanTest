pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }

  stages {
    stage('build and test') {
      environment {
        CYPRESS_RECORD_KEY = credentials('mleanTest-record-key')
      }

      steps {
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}