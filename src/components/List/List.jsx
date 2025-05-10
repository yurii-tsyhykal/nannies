const List = ({
  data,
  ListWrapper = 'ul',
  ItemWrapper = 'li',
  renderItem,
  listClassName,
  itemClassName,
}) => {
  const ListElement = ListWrapper;
  const ItemElement = ItemWrapper;
  return (
    <ListElement className={listClassName}>
      {data.map(item => (
        <ItemElement key={item?.id} className={itemClassName}>
          {renderItem(item)}
        </ItemElement>
      ))}
    </ListElement>
  );
};

export default List;
