import React from 'react';
import List from '../List/List';
import NanniesListItem from '../NanniesListItem/NanniesListItem';
import css from './NanniesList.module.css';

const NanniesList = ({ nannies }) => {
  return (
    nannies.length && (
      <List
        data={nannies}
        renderItem={nanny => <NanniesListItem nanny={nanny} />}
        listClassName={css.nanniesList}
        itemClassName={css.listItem}
      />
    )
  );
};

export default React.memo(NanniesList);
