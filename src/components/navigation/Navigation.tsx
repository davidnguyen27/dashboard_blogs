import { Image, Typography } from 'antd';

const Navigation = () => {
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
      />
      <Typography.Title>Group 2 - Dashboard</Typography.Title>
    </div>
  );
};

export default Navigation;
