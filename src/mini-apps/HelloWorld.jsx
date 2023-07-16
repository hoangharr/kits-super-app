import { useState } from "react";
import {Input, Space} from "antd";
function HelloWorld() {
    const [value, setValue] = useState("")
    return(
        <Space direction="vertical" style={{width: "500px"}}>
        <Input placeholder= "Welcome to my Super App!" value={value} onChange={(e)=> {
            setValue(e.target.value);
        }}/>
        {value}
        </Space>
    )
}
export default HelloWorld