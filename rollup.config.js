import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.umd.cjs',
    format: 'umd',
    name: 'Collecty', // Nombre global de tu biblioteca
    sourcemap: true,
  },
  plugins: [
    typescript(),
  ],
};
