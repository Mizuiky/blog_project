import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  // Adiciona prettier para desabilitar regras de formatação conflitantes
  ...compat.extends('prettier'),
  {
    rules: {
      // Remove regras de formatação que podem conflitar com Prettier
      // O Prettier cuidará da formatação, ESLint cuida da qualidade do código
    },
  },
];

export default eslintConfig;
