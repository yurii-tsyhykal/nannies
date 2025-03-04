const List = ({
  data,
  ListWrapper = 'ul',
  ItemWrapper = 'li',
  renderItem,
  listClassName,
  itemClassName,
}) => {
  const emptyMessage = 'Oops, whats wrong. We have no data';
  if (!data || data.length === 0) {
    return <p>{emptyMessage}</p>;
  }

  const ListElement = ListWrapper;
  const ItemElement = ItemWrapper;
  return (
    <ListElement className={listClassName}>
      {data.map((item, index) => (
        <ItemElement key={item?.id ?? index} className={itemClassName}>
          {renderItem(item)}
        </ItemElement>
      ))}
    </ListElement>
  );
};

export default List;
