require('esbuild').buildSync({
  entryPoints: ['src/index.js'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/index.js',
  external: ['@oclif/*', 'update-notifier'],
})
