import React, { useState } from 'react';
import { useCEP } from './useCEP';

const Demo = () => {
  const [cep, setCep] = useState('');
  const { data, loading, error, fetchCEP } = useCEP();

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 400 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={cep}
          onChange={e => setCep(e.target.value)}
          placeholder="Digite um CEP"
          maxLength={9}
          style={{ padding: '8px 12px', borderRadius: 4, border: '1px solid #ccc', fontSize: 14, flex: 1 }}
        />
        <button
          onClick={() => fetchCEP(cep)}
          disabled={loading}
          style={{ padding: '8px 16px', borderRadius: 4, background: '#009c3b', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          {loading ? '...' : 'Buscar'}
        </button>
      </div>
      {error && <p style={{ color: '#f44336', marginTop: 8 }}>{error}</p>}
      {data && (
        <div style={{ background: '#f4f4f4', padding: 12, marginTop: 12, borderRadius: 4 }}>
          <p><b>Rua:</b> {data.logradouro}</p>
          <p><b>Bairro:</b> {data.bairro}</p>
          <p><b>Cidade:</b> {data.localidade} - {data.uf}</p>
          <p><b>DDD:</b> {data.ddd}</p>
        </div>
      )}
    </div>
  );
};

export default {
  title: 'useCEP',
  component: Demo,
};

export const Default = {};
