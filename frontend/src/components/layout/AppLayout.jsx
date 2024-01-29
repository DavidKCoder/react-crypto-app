import {Layout, Spin} from "antd";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";
import React from "react";
import {useCrypto} from "../../context/crypto-context";

export default function AppLayout() {
  const {loading} = useCrypto();

  if (loading) {
    return <Spin fullscreen/>
  }


  return (
    <Layout>
      <Layout>
        <AppHeader/>
        <Layout>
          <AppSider/>
          <AppContent/>
        </Layout>
      </Layout>
    </Layout>
  )
}