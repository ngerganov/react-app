import React, { useMemo } from 'react';

const DashboardWithMemo = ({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      value: item.value * 2,
    }));
  }, [data]);

  return (
    <div>
      <h2>Обработанные данные</h2>
      <ul>
        {processedData.map((item) => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
};
export default DashboardWithMemo;