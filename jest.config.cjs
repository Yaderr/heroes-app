const esModules = [
    'query-string',
    'decode-uri-component',
    'split-on-first',
    'filter-obj'
];
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.cjs'],
    transformIgnorePatterns: esModules.length ? [`/node_modules/(?!${esModules.join('|')})`] : []
}