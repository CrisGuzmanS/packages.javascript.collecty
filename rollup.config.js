import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [{
    file: 'dist/umd/index.umd.js',
    format: 'umd',
    name: 'Collecty',
    sourcemap: true,
  }, {
    file: 'dist/esm/index.esm.js',
    format: 'es',
    sourcemap: true,
  }],
  plugins: [
    typescript(),
  ],
};
