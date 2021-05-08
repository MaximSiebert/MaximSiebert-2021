var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/MaximSiebert/MaximSiebert-2021.git',
        user: {
            name: 'Maxim Siebert',
            email: 'maxim.siebert@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)