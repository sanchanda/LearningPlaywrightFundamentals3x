 ## To install allure
 npm install -D allure-playwright allure-commandline

# Generate the report HTML from raw results
npx allure generate allure-results --clean

# Launch the interactive local server to view it
npx allure open allure-report

# Alternatively, you can skip generating the static folder manually and view the live dashboard directly by using 
npx allure serve allure-results

# Using explicitly while running test to generate the allure report
npx playwright test 232_TestWingify.spec.ts --headed --reporter=line,allure-playwright

