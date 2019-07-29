const test = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  name: 'client',
  target: 'web',
  externals: undefined,
  optimization: {
    checkWasmTypes: false,
    nodeEnv: false,
    runtimeChunk: {
      name: 'static/runtime/webpack.js'
    },
    splitChunks: {
      cacheGroups: [Object]
    },
    minimize: false,
    minimizer: undefined
  },
  recordsPath: 'C:\\test\\next\\.next\\records.json',
  context: 'C:\\test\\next',
  entry: [AsyncFunction: entry],
  output: {
    path: 'C:\\test\\next\\.next',
    filename: [Function: filename],
    libraryTarget: 'var',
    hotUpdateChunkFilename: 'static/webpack/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'static/webpack/[hash].hot-update.json',
    chunkFilename: 'static/chunks/[name].js',
    strictModuleExceptionHandling: true,
    crossOriginLoading: undefined,
    futureEmitAssets: false,
    webassemblyModuleFilename: 'static/wasm/[modulehash].wasm'
  },
  performance: false,
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json', '.wasm'],
    modules: ['node_modules',
      'C:\\Users\\marcos.theofilo\\AppData\\Roaming\\npm\\node_modules'
    ],
    alias: {
      'next/head': 'next-server/dist/lib/head.js',
      'next/router': 'next/dist/client/router.js',
      'next/config': 'next-server/dist/lib/runtime-config.js',
      'next/dynamic': 'next-server/dist/lib/dynamic.js',
      next: 'C:\\test\\next\\node_modules\\next',
      'private-next-pages': 'C:\\test\\next\\pages',
      'private-dot-next': 'C:\\test\\next\\.next'
    },
    mainFields: ['browser', 'module', 'main']
  },
  resolveLoader: {
    modules: ['C:\\test\\next\\node_modules\\next\\dist\\build\\webpack\\loaders',
      'node_modules',
      'C:\\Users\\marcos.theofilo\\AppData\\Roaming\\npm\\node_modules'
    ]
  },
  module: {
    strictExportPresence: true,
    rules: [
      [Object]
    ]
  },
  plugins: [ChunkNamesPlugin {},
    DefinePlugin {
      definitions: [Object]
    },
    ReactLoadablePlugin {
      filename: 'react-loadable-manifest.json'
    },
    DropClientPage {
      ampPages: Set {}
    },
    ChunkGraphPlugin {
      buildId: 'development',
      dir: 'C:\\test\\next',
      distDir: 'C:\\test\\next\\.next',
      isServer: false
    },
    UnlinkRemovedPagesPlugin {
      prevAssets: {}
    },
    NoEmitOnErrorsPlugin {},
    NextJsRequireCacheHotReloader {
      prevAssets: null
    },
    AutoDLLPlugin {
      _originalSettings: [Object]
    },
    HotModuleReplacementPlugin {
      options: {},
      multiStep: undefined,
      fullBuildTimeout: 200,
      requestTimeout: 10000
    },
    BuildManifestPlugin {}
  ]
} {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  name: 'server',
  target: 'node',
  externals: [
    [Function]
  ],
  optimization: {
    checkWasmTypes: false,
    nodeEnv: false,
    splitChunks: false,
    minimize: false
  },
  recordsPath: 'C:\\test\\next\\.next\\server\\records.json',
  context: 'C:\\test\\next',
  entry: [AsyncFunction: entry],
  output: {
    path: 'C:\\test\\next\\.next\\server',
    filename: [Function: filename],
    libraryTarget: 'commonjs2',
    hotUpdateChunkFilename: 'static/webpack/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'static/webpack/[hash].hot-update.json',
    chunkFilename: '[name].js',
    strictModuleExceptionHandling: true,
    crossOriginLoading: undefined,
    futureEmitAssets: false,
    webassemblyModuleFilename: 'static/wasm/[modulehash].wasm'
  },
  performance: false,
  resolve: {
    extensions: ['.js', '.mjs', '.jsx', '.json', '.wasm'],
    modules: ['node_modules',
      'C:\\Users\\marcos.theofilo\\AppData\\Roaming\\npm\\node_modules'
    ],
    alias: {
      'next/head': 'next-server/dist/lib/head.js',
      'next/router': 'next/dist/client/router.js',
      'next/config': 'next-server/dist/lib/runtime-config.js',
      'next/dynamic': 'next-server/dist/lib/dynamic.js',
      next: 'C:\\test\\next\\node_modules\\next',
      'private-next-pages': 'C:\\test\\next\\pages',
      'private-dot-next': 'C:\\test\\next\\.next'
    },
    mainFields: ['main', 'module']
  },
  resolveLoader: {
    modules: ['C:\\test\\next\\node_modules\\next\\dist\\build\\webpack\\loaders',
      'node_modules',
      'C:\\Users\\marcos.theofilo\\AppData\\Roaming\\npm\\node_modules'
    ]
  },
  module: {
    strictExportPresence: true,
    rules: [
      [Object]
    ]
  },
  plugins: [ChunkNamesPlugin {},
    DefinePlugin {
      definitions: [Object]
    },
    ChunkGraphPlugin {
      buildId: 'development',
      dir: 'C:\\test\\next',
      distDir: 'C:\\test\\next\\.next',
      isServer: true
    },
    UnlinkRemovedPagesPlugin {
      prevAssets: {}
    },
    NoEmitOnErrorsPlugin {},
    NextJsRequireCacheHotReloader {
      prevAssets: null
    },
    PagesManifestPlugin {
      serverless: false
    },
    NextJsSsrImportPlugin {
      options: [Object]
    },
    NextJsSsrImportPlugin {}
  ]
}