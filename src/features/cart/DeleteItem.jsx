import Button from '../../ui/Button';

function DeleteItem() {
  return (
    <Button type="small" onClick={() => dispatch(DeleteItem)}>
      Delete
    </Button>
  );
}

export default DeleteItem;
