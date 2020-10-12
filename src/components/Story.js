import React from 'react';
import Scene from './Scene';

export default function Story() {
  return (
    <>
      <div
        style={{
          height: '90vh',
          width: '90vw',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Scene />
        <div style={{ width: '25vw', marginBottom: '40vh' }}>
          <h1>Referral</h1>
          <p>
            After being bullied by other kids for a long time, Serena can't tolerate anymore. She finally decides to
            fight for her dignity.
          </p>
        </div>
      </div>
    </>
  );
}
