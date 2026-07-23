<div align="center">

# 🇧🇷 @larialbu/br

### Biblioteca React para o Mercado Brasileiro

[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19+-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Storybook](https://img.shields.io/badge/Storybook-Docs-FF4785?style=flat-square&logo=storybook&logoColor=white)](./storybook/)

Ecossistema completo de **componentes**, **hooks**, **utilitários** e **integrações** para acelerar o desenvolvimento de sistemas brasileiros.

[**📖 Ver Storybook**](./storybook/) · [**🌐 Site**](./index.html) · [**📋 Roadmap**](./ROADMAP.md)

</div>

---

## 📦 Pacotes

Este projeto é um **monorepo** organizado com [pnpm Workspaces](https://pnpm.io/workspaces) + [Turborepo](https://turbo.build/). Cada pacote pode ser instalado de forma independente:

| Pacote | Descrição | Instalação |
|--------|-----------|------------|
| [`@larialbu/br-react`](./packages/br-react) | Componentes React (CPFInput, etc.) | `npm i @larialbu/br-react` |
| [`@larialbu/br-validators`](./packages/br-validators) | Validadores (isCPF, isCNPJ, etc.) | `npm i @larialbu/br-validators` |
| [`@larialbu/br-masks`](./packages/br-masks) | Máscaras de formatação (cpfMask, etc.) | `npm i @larialbu/br-masks` |
| [`@larialbu/br-utils`](./packages/br-utils) | Utilitários (formatCurrency, etc.) | `npm i @larialbu/br-utils` |
| [`@larialbu/br-hooks`](./packages/br-hooks) | React Hooks (useCEP, etc.) | `npm i @larialbu/br-hooks` |
| [`@larialbu/br-api`](./packages/br-api) | Integrações com APIs (fetchCEP, etc.) | `npm i @larialbu/br-api` |
| [`@larialbu/br-icons`](./packages/br-icons) | Ícones brasileiros (PIX, CPF, etc.) | `npm i @larialbu/br-icons` |
| [`@larialbu/br-theme`](./packages/br-theme) | Tema Brasil (paleta de cores) | `npm i @larialbu/br-theme` |

---

## 🚀 Início Rápido

```bash
# Instale apenas o que precisar:
npm install @larialbu/br-react
npm install @larialbu/br-validators
npm install @larialbu/br-utils
```

### Exemplo — CPFInput

```tsx
import { CPFInput } from '@larialbu/br-react';

function MeuForm() {
  return (
    <CPFInput
      onValidationChange={(isValid) => {
        console.log('CPF válido?', isValid);
      }}
    />
  );
}
```

### Exemplo — Validação

```ts
import { isCPF } from '@larialbu/br-validators';

isCPF('123.456.789-09'); // true
isCPF('111.111.111-11'); // false
```

### Exemplo — Máscara

```ts
import { cpfMask } from '@larialbu/br-masks';

cpfMask('12345678909'); // '123.456.789-09'
```

### Exemplo — Formatação de Moeda

```ts
import { formatCurrency } from '@larialbu/br-utils';

formatCurrency(1234.56);  // 'R$ 1.234,56'
formatCurrency(1000000);  // 'R$ 1.000.000,00'
```

### Exemplo — Hook useCEP

```tsx
import { useCEP } from '@larialbu/br-hooks';

function BuscaCEP() {
  const { data, loading, error, fetchCEP } = useCEP();

  return (
    <div>
      <button onClick={() => fetchCEP('01001000')}>
        {loading ? 'Buscando...' : 'Buscar'}
      </button>
      {data && <p>{data.logradouro}, {data.bairro} - {data.localidade}/{data.uf}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
```

### Exemplo — API fetchCEP

```ts
import { fetchCEP } from '@larialbu/br-api';

const endereco = await fetchCEP('01001000');
// {
//   cep: '01001-000',
//   logradouro: 'Praça da Sé',
//   bairro: 'Sé',
//   localidade: 'São Paulo',
//   uf: 'SP',
//   ...
// }
```

### Exemplo — Ícones

```tsx
import { PixIcon, CPFIcon, CNPJIcon, BoletoIcon } from '@larialbu/br-icons';

<PixIcon size={48} color="#32BCAD" />
<CPFIcon size={48} color="#1565C0" />
<CNPJIcon size={48} color="#2E7D32" />
<BoletoIcon size={48} color="#424242" />
```

### Exemplo — Tema Brasil

```ts
import { colors } from '@larialbu/br-theme';

// colors.primary   → '#009c3b'  (Verde)
// colors.secondary → '#ffdf00'  (Amarelo)
// colors.accent    → '#002776'  (Azul)
// colors.text      → '#333333'
// colors.background → '#f9f9f9'
```

---

## 🎨 Paleta de Cores

| Cor | Hex | Preview |
|-----|-----|---------|
| **primary** | `#009c3b` | 🟢 Verde Brasil |
| **secondary** | `#ffdf00` | 🟡 Amarelo Brasil |
| **accent** | `#002776` | 🔵 Azul Brasil |
| **text** | `#333333` | ⚫ Texto |
| **background** | `#f9f9f9` | ⚪ Fundo |

---

## 🖼️ Ícones Disponíveis

| Ícone | Componente | Cor Padrão |
|-------|-----------|------------|
| PIX | `<PixIcon />` | `#32BCAD` |
| CPF | `<CPFIcon />` | `#1565C0` |
| CNPJ | `<CNPJIcon />` | `#2E7D32` |
| Correios | `<CorreiosIcon />` | `#FFD600` |
| Nota Fiscal | `<NFIcon />` | `#E65100` |
| Boleto | `<BoletoIcon />` | `#424242` |

Todos os ícones aceitam as props `size` e `color`.

---

## 🏗️ Arquitetura

```
biblioteca-larialbu-br/
├── index.html            ← Site de showcase (raiz do deploy)
├── storybook/            ← Storybook buildado (gerado pelo build)
├── packages/
│   ├── br-react/         ← Componentes React
│   ├── br-validators/    ← Validadores
│   ├── br-masks/         ← Máscaras de formatação
│   ├── br-utils/         ← Utilitários
│   ├── br-hooks/         ← React Hooks
│   ├── br-api/           ← Integrações com APIs
│   ├── br-icons/         ← Ícones SVG
│   └── br-theme/         ← Tema e cores
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.json
```

---

## 🛠️ Tecnologias

- **React 19+** — Componentes modernos
- **TypeScript** — 100% tipado
- **Vite** — Build e dev server
- **pnpm Workspaces** — Gerenciamento de monorepo
- **Turborepo** — Build pipeline
- **Storybook 10** — Documentação de componentes
- **Vitest** — Testes unitários
- **Prettier** — Formatação de código

---

## 💻 Desenvolvimento Local

```bash
# Clonar o repositório
git clone https://github.com/larialbu/biblioteca-larialbu-br.git
cd biblioteca-larialbu-br

# Instalar dependências
pnpm install

# Buildar todos os pacotes
pnpm build

# Rodar Storybook (br-react)
cd packages/br-react
npm run storybook

# Rodar testes
pnpm test
```

### Deploy do Site + Storybook

```bash
# 1. Buildar o Storybook para a pasta storybook/
cd packages/br-react
npm run build-storybook -- -o ../../storybook

# 2. O index.html já está na raiz do repositório
# 3. Deploy via GitHub Pages (branch main, raiz /)
```

---

## ✅ Compatibilidade

A biblioteca é compatível com:

- ⚛️ React / Next.js / Vite
- 📘 TypeScript
- 🎨 Tailwind CSS
- 📝 React Hook Form
- 🔒 Zod
- 📋 Formik
- ♿ React Aria

---

## 📋 Roadmap

Veja o [ROADMAP.md](./ROADMAP.md) para a lista completa de componentes planejados, incluindo:

- 📄 **Documentos** — CNPJ, RG, CNH, PIS, RENAVAM, Placa Mercosul
- 📞 **Telefones** — PhoneInput, WhatsappInput, DDDSelect
- 📍 **Endereços** — CEPInput com autopreenchimento, StateSelect, CitySelect
- 💰 **Dinheiro** — CurrencyInput, PercentageInput, Installments
- 💳 **PIX** — PixQRCode, PixCopyPaste, PixKeyInput
- 🏦 **Bancário** — BankSelect, AgencyInput, AccountInput
- 📅 **Datas** — DateBRInput, CalendarBR, BusinessDays, HolidayPicker
- 🏢 **Empresas** — CNPJLookup com busca automática

---

## 📄 Licença

MIT © [Larissa Albuquerque](https://github.com/larialbu)