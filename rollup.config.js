import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [{
    file: 'dist/umd/index.umd.cjs',
    format: 'umd',
    name: 'Collecty',
    sourcemap: true,
    globals: {
      'is-empty': 'isEmpty',
    }
  }],
  plugins: [
    typescript(),
  ],
  external: ['is-empty'],
};
