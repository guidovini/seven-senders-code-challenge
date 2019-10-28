import React from 'react';

import DeleteButton from './DeleteButton';

const WidgetItem = ({ name, language, id }) => {
  return (
    <div>
      <h4>Name</h4>
      <p>{name}</p>

      <h4>Language</h4>
      <p>{language}</p>

      <DeleteButton id={id} />
    </div>
  );
};

export default WidgetItem;
