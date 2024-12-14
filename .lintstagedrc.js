// eslint-disable-next-line no-undef
module.exports = {
  '*.{js, jsx, ts, tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
