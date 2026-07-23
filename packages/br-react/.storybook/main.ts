import type { StorybookConfig } from '@storybook/react-vite';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

/** Resolve the absolute path of a package's root */
function getAbsolutePath(pkg: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${pkg}/package.json`)));
}

const config: StorybookConfig = {
  stories: [
    {
      directory: '../src',
      titlePrefix: 'Componentes',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      directory: '../../br-validators/src',
      titlePrefix: 'Validadores',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      directory: '../../br-masks/src',
      titlePrefix: 'Máscaras',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      directory: '../../br-utils/src',
      titlePrefix: 'Utilitários',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      directory: '../../br-hooks/src',
      titlePrefix: 'Hooks',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      directory: '../../br-icons/src',
      titlePrefix: 'Ícones',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      directory: '../../br-theme/src',
      titlePrefix: 'Tema',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      directory: '../../br-api/src',
      titlePrefix: 'API',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
  ],
  addons: [getAbsolutePath('@storybook/addon-docs')],
  framework: getAbsolutePath('@storybook/react-vite'),
};

export default config;