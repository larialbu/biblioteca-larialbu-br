import React, { useState } from 'react';
import { fetchCEP } from './fetchCEP';

const Demo = () => {
  const [cep, setCep] = useState('');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setError('');
    setData(null);
    setLoading(true);
    try {
      const result = await fetchCEP(cep);
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 400 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={cep}
          onChange={e => setCep(e.target.value)}
          placeholder="Digite um CEP (ex: 01001000)"
          maxLength={9}
          style={{ padding: '8px 12px', borderRadius: 4, border: '1px solid #ccc', fontSize: 14, flex: 1 }}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          style={{ padding: '8px 16px', borderRadius: 4, background: '#009c3b', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 14 }}
        >
          {loading ? '...' : 'Buscar'}
        </button>
      </div>
      {error && <p style={{ color: '#f44336', marginTop: 8 }}>{error}</p>}
      {data && (
        <pre style={{ background: '#f4f4f4', padding: 12, marginTop: 12, borderRadius: 4, fontSize: 13, overflowX: 'auto' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default {
  title: 'fetchCEP',
  component: Demo,
};

export const Default = {};
