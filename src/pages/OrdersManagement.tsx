import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../API";

const OrdersManagement = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
    if (query.length === 0 || query.length > 2) getOrders();
  }, [query]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <div className="mb-3">
        <input
          className="d-flex align-items-center"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <Table
          loading={loading}
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "DiscountedPrice",
              dataIndex: "discountedPrice",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Total",
              dataIndex: "total",
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </div>
    </Space>
  );
};

export default OrdersManagement;
