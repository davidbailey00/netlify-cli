const build = require('@netlify/build')

// We have already resolved the configuration using `@netlify/config`
// This is stored as `netlify.cachedConfig` and can be passed to
// `@netlify/build --cachedConfig`.
const getBuildOptions = ({ context, token, flags }) => {
  const { cachedConfig } = context.netlify
  const serializedConfig = JSON.stringify(cachedConfig)
  const { dry, debug } = flags
  // buffer = true will not stream output
  const buffer = flags.json || flags.silent

  return { cachedConfig: serializedConfig, token, dry, debug, mode: 'cli', telemetry: false, buffer }
}

const runBuild = async (options) => {
  const { severityCode: exitCode } = await build(options)
  return exitCode
}

module.exports = { getBuildOptions, runBuild }
