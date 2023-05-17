import webpack from "webpack";

import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths, port, isDev} = options;
  const {entry, build, html} = paths;

  return {
    mode, // production
    entry: {
      main: entry
    },
    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins({
      paths: {
        html,
      }
    }),
    devServer: isDev ? buildDevServer({
      port,
      open: true
    }) : undefined
  }
}
