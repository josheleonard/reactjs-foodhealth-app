import React from 'react';

const FlexColumn = () => (
  <div style={{flex:1, flexDirection: 'column', width:350}}>
    {{children}}
  </div>
);

export default FlexColumn;
