# @larialbu/br --- Biblioteca React para o Mercado Brasileiro

## Visão Geral

Ecossistema de componentes, hooks, utilitários e integrações para
acelerar o desenvolvimento de sistemas brasileiros.

# Tecnologias

Este projeto será desenvolvido utilizando tecnologias modernas do ecossistema React.

- React 19+
- TypeScript
- Vite
- pnpm Workspaces
- Turborepo
- Storybook
- Vitest
- ESLint
- Prettier
- GitHub Actions

---

# Publicação

Todos os pacotes desta biblioteca serão publicados no **npm** utilizando **TypeScript**.

Os pacotes poderão ser instalados individualmente, permitindo que cada projeto utilize apenas o que for necessário.

Exemplos:

```bash
npm install @larialbu/br-react

npm install @larialbu/br-hooks

npm install @larialbu/br-utils

npm install @larialbu/br-icons

npm install @larialbu/br-api
```

ou utilizando pnpm:

```bash
pnpm add @larialbu/br-react
```

---

# Arquitetura

A biblioteca será organizada em um **monorepo**, onde cada pacote possui seu próprio ciclo de vida, versão e documentação.

```text
packages/

br-react
br-hooks
br-utils
br-api
br-icons
br-theme
br-masks
br-validators
```

Todos os pacotes serão escritos em **TypeScript** e distribuídos como bibliotecas para o npm.

---

# Objetivos

- Criar uma biblioteca moderna para aplicações brasileiras.
- Possuir componentes reutilizáveis.
- Fornecer utilitários e hooks.
- Integrar APIs públicas nacionais.
- Facilitar a validação e formatação de documentos brasileiros.
- Ser 100% Open Source.
- Publicar todos os pacotes no npm.
- Possuir documentação completa e exemplos de uso.

---

# Compatibilidade

A biblioteca terá suporte para:

- React
- Next.js
- Vite
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Formik
- React Aria

---

# Distribuição

Todos os módulos serão independentes e publicados no npm.

Exemplo:

@larialbu/br-react

@larialbu/br-hooks

@larialbu/br-utils

@larialbu/br-api

@larialbu/br-icons

@larialbu/br-theme

@larialbu/br-masks

@larialbu/br-validators

Documentos
<CPFInput />

<CNPJInput />

<CPFOrCNPJInput />

<RGInput />

<CNHInput />

<TituloEleitorInput />

<PISInput />

<RENAVAMInput />

<PlacaMercosulInput />

<PlacaAntigaInput />
📞 Telefones
<PhoneInput />

<WhatsappInput />

<DDDSelect />

<CountryCode />
📍 Endereço
<CEPInput />

<AddressAutocomplete />

<StateSelect />

<CitySelect />

<NeighborhoodSelect />

Consumindo ViaCEP automaticamente.

<CEPInput
    autoFill
    onAddressLoaded={...}
/>
💰 Dinheiro
<CurrencyInput />

<MoneyInput />

<PercentageInput />

<DiscountInput />

<Installments />
PIX

Essa seria muito legal.

<PixQRCode />

<PixCopyPaste />

<PixKeyInput />

<PixKeyViewer />

<PixPaymentStatus />
Bancário
<BankSelect />

<AgencyInput />

<AccountInput />

<BankLogo />
Datas
<DateBRInput />

<DateTimeBR />

<CalendarBR />

<BusinessDays />

<HolidayPicker />
Máscaras
<MaskInput />

<InputMask />

Com máscaras prontas.

mask="cpf"

mask="cnpj"

mask="cep"

mask="telefone"

mask="placa"

mask="pis"

mask="renavam"
Validações
isCPF()

isCNPJ()

isCEP()

isPhone()

isPixKey()

isEmail()

isRENAVAM()
Formatadores
formatCPF()

formatCNPJ()

formatCurrency()

formatCEP()

formatPhone()

formatDate()

formatPix()
Hooks
useCEP()

useCPF()

usePix()

useAddress()

useIBGE()

useHoliday()
APIs

Já encapsular APIs famosas.

useViaCEP()

useBrasilAPI()

useIBGE()

useReceitaWS()
Componentes
<DocumentUploader />

<QRCode />

<Barcode />

<SignatureCanvas />

<FilePreview />
Empresas
<CNPJLookup />

Exemplo

<CNPJLookup
    value="12.345.678/0001-90"
    onLoaded={(empresa) => {}}
/>

Automaticamente busca:

razão social
nome fantasia
endereço
CNAE
situação
Selects
<StateSelect />

<CitySelect />

<DDDSelect />

<BankSelect />

<UFSelect />
Tabelas
<CurrencyColumn />

<DocumentColumn />

<StatusColumn />

<DateColumn />
Ícones brasileiros
<PIXIcon />

<CPFIcon />

<CNPJIcon />

<CorreiosIcon />

<NFIcon />

<BoletoIcon />
Helpers
generateCPF()

generateCNPJ()

generatePix()

generateUUID()

copyPix()

parseCPF()

parseCurrency()
Tema Brasil

Uma paleta inspirada nas cores do Brasil.

import { BrasilTheme } from "@laridev/br";