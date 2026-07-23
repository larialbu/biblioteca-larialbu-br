import { CPFInput } from './CPFInput';

export default {
  title: 'CPFInput',
  component: CPFInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    placeholder: 'Digite seu CPF',
    style: { width: '300px' },
  },
};
