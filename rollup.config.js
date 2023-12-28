import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [{
    file: 'dist/index.umd.cjs',
    format: 'umd',
    name: 'Collection',
    sourcemap: true,
  },{
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'Collection',
    sourcemap: true,
  }],
  plugins: [
    typescript(),
  ],
};
