pipeline {
  agent {
    dockerfile {
            filename 'Dockerfile'
        }
    }
  options {
    ansiColor('xterm')
  } 
  
  stages {
    stage('run spec file') {
      steps {
        sh 'npm ci'
        sh 'npx cypress run --spec "cypress/e2e/specs/TurboMobileEndToEndTests.cy.js"'
      }
    }
  }
  post{
    always{
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: "reports", reportFiles: 'TurboMobilesReport.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }
  }
}