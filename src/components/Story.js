import React from 'react';
import Scene from './Scene';

export default function Story() {
  return (
    <>
      <div
        style={{
          height: '90vh',
          width: '90vw',
          padding: '3rem',
        }}
      >
        <Scene />
        <div style={{ width: '30vw', float: 'right', marginRight: '5vw', marginTop: '10vh' }}>
          <h1>One day.</h1>
          <p>
            - 60% of Black girls’ juvenile justice referrals in Allegheny County in 2018 were for “school-related”
            offenses, while for White girls just 38% of referrals were school related,17 meaning that they happened at
            school rather than in the community.
          </p>
          <p>
            - 52% of internal providers include discussions of gender identity or sexual orientation in sex education,
            compared to 70% of external providers.
          </p>
        </div>
      </div>
    </>
  );
}
