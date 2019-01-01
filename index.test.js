'use strict'
const execa = require('execa')

test('--help', async () => {
  await expect(execa('./cli.js', ['--help'])).resolves.toMatchObject({
    code: 0,
  })
})
