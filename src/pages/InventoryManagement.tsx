import { Avatar, Button, Rate, Space, Table, Typography, Form } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../API";

const InventoryManagement = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [query, setQuery] = useState("");
  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
      setFilterdata(res.products);
    });
    if (query.length === 0 || query.length > 2) getInventory();
  }, [query]);

  const handlesearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const getSearch = event.target.value;
    if (getSearch.length > 0) {
      const searchdata = dataSource.filter((name) =>
        getInventory.name.toLowerCase().includes(getSearch)
      );
      setDataSource(searchdata);
    } else {
      setDataSource(filterdata);
    }
    setQuery(getSearch);
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Blog Management</Typography.Title>
      <div>
        <Button type="primary">Add new post</Button>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={query}
            className="form-control"
            onChange={(e) => handlesearch(e)}
            placeholder="Search..."
          />
          <Table
            loading={loading}
            columns={[
              {
                title: "Thumbnail",
                dataIndex: "thumbnail",
                render: (link) => {
                  return <Avatar src={link} />;
                },
              },
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
                title: "Rating",
                dataIndex: "rating",
                render: (rating) => {
                  return <Rate value={rating} allowHalf disabled />;
                },
              },
              {
                title: "Stock",
                dataIndex: "stock",
              },

              {
                title: "Brand",
                dataIndex: "brand",
              },
              {
                title: "Category",
                dataIndex: "category",
              },
              {
                title: "Action",
                render: () => {
                  return (
                    <Button type="primary" color="red">
                      Delete
                    </Button>
                  );
                },
              },
            ]}
            dataSource={dataSource}
            pagination={{
              pageSize: 5,
            }}
          ></Table>
        </div>
      </div>
    </Space>
  );
};

export default InventoryManagement;
