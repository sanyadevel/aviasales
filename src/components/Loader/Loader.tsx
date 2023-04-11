import React, { FC } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loader: FC = () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 60, marginTop: 30 }} spin />
  );

  return (
    <>
      <Spin indicator={antIcon} size="large" />
    </>
  );
};

export default Loader;
