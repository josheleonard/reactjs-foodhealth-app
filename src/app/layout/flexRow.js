import React from 'react';

const FlexRow = (...children) => (
  <div style={{flex:1, flexDirection: 'row', width:350}}>
    {{children}}
  </div>
);

export default FlexRow;
