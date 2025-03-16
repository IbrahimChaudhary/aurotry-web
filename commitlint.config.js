module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', [
        'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 
        'refactor', 'revert', 'style', 'test', 'merge', 'branch'
        // Added 'merge' to the list of allowed types
      ]]
    }
  };