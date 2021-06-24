import React from "react";
import {Button, Result} from "antd";

function Component403() {
    return(
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary" href={"/"}>Back Home</Button>}
        />
    )
}
export default Component403