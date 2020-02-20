import React from 'react';

import FlexButtons from './FlexButtons';


export default function ButtonGroup({ buttons, selected }) {
  return (
    <FlexButtons
      buttons={(buttons || []).map(button => ({
        ...button,
        color: button.title === selected ? '#666' : '#ccc',
      }))}
    />
  );
}
