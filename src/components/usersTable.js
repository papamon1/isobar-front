import { Table } from "antd";

const usersTable = (props) => {
  const getColumns = () => {
    const cols = [];

    cols.push({
      title: "Email",
      dataIndex: "email",
      render: (record) => <div>{record}</div>,
      sorter: true,
    });

    cols.push({
      title: "Name",
      dataIndex: "name",
      render: (record) => <div>{record}</div>,
      sorter: true,
    });

    cols.push({
      title: "To",
      dataIndex: "role",
      render: (record) => <div>{record.roleName}</div>,
      sorter: true,
    });

    return cols;
  };

  return (
    <Table
      dataSource={props.userList || []}
      columns={getColumns()}
      size="small"
      rowKey={({ id }) => id}
    />
  );
};

export default usersTable;
