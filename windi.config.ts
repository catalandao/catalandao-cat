import { defineConfig } from 'windicss/helpers';
import customs from './lib/plugins/customs';

export default defineConfig({
  extract: {
    include: ['**/*.{tsx,css}'],
    exclude: ['node_modules', '.git', '.next/**/*'],
  },
  plugins: [
    customs,
  ],
});
