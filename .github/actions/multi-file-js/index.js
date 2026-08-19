const { getGreeting } = require('./helper');
const fs = require('fs');

try {
  const message = process.env.INPUT_MESSAGE || 'Default JS Message';
  console.log(getGreeting(message));

  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, 'result=success\n');
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
