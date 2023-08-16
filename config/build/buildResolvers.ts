import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { paths: { src, nodeModules } } = options;

  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    preferAbsolute: true,
    modules: [
      src, nodeModules,
    ],
  };
}
