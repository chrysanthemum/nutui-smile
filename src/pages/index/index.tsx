import React, {useState} from 'react'
import { View } from '@tarojs/components'
import { Tabs } from "@nutui/nutui-react-taro"
import './index.scss'

function Index() {
    const [tab1value, setTab1value] = useState('0');

  return (
    <View className="nutui-react-demo">
        <Tabs value={tab1value} onChange={(value) => {
            setTab1value(value)
        }} type="smile">
            <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
            <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
            <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>

    </View>
  )
}

export default Index
