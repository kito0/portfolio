module.exports = {
  branches: ['master'],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits' }],
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    ['@semantic-release/npm'],
    ['@semantic-release/git', { assets: ['CHANGELOG.md'] }],
  ],
};
