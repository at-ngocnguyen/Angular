var ghpages = require('gh-pages')

ghpages.publish('dist/day3', {
  branch: 'master',
  repo: 'https://github.com/at-ngocnguyen/Deploy-Training-Angular.git'
}, function (e) {
  console.log('Deploy Success')
})
