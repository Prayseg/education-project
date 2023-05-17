import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

interface BuildDevServerOptions {
  port: number,
  open: boolean
}

export function buildDevServer(options: BuildDevServerOptions): DevServerConfiguration {
  const {port, open} = options;

  return {
    port,
    open,
    historyApiFallback: true
  }
}
