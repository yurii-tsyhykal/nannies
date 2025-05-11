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
      {data.map((item, i) => (
        <ItemElement key={item?.id ?? i} className={itemClassName}>
          {renderItem(item)}
        </ItemElement>
      ))}
    </ListElement>
  );
};

export default List;
