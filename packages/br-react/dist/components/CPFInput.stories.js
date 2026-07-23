import { CPFInput } from './CPFInput';
const meta = {
    title: 'Documentos/CPFInput',
    component: CPFInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onValidationChange: { action: 'validationChanged' },
    },
};
export default meta;
export const Default = {
    args: {
        placeholder: 'Digite seu CPF',
        style: { width: '300px' }
    },
};
