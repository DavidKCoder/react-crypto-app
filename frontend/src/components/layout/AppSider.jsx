import React, {useContext} from "react";
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import {Tag, List, Layout, Card, Statistic} from "antd";
import {capitalize} from "../../utils";
import CryptoContext from "../../context/crypto-context";

const siderStyle = {
  padding: '1rem',
  background: '#2D3250'
};

export default function AppSider() {
  const {assets} = useContext(CryptoContext);

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      {assets.map(asset => (
        <Card key={asset.id} style={{marginBottom: '1rem', backgroundColor: 'var(--gunmetal)'}}>
          <Statistic
            title={<span style={{color: '#FFF'}}>{capitalize(asset.id)}</span>}
            value={asset.totalAmount}
            precision={2}
            valueStyle={{color: asset.grow ? 'var(--apricot)' : 'var(--error)'}}
            prefix={asset.grow ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}
            suffix="$"
          />
          <List
            size="small"
            dataSource={[
              {title: 'Total Profit', value: asset.totalProfit, withTag: true},
              {title: 'Asset Amount', value: asset.amount, isPlain: true},
            ]}
            renderItem={(item) => (
              <List.Item>
                <span style={{color: '#FFF'}}>{item.title}</span>
                <span>
                  {item.withTag && <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPercent}%</Tag>}
                  {item.isPlain && <span style={{color: '#FFF'}}>{item.value}</span>}
                </span>
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  )
}