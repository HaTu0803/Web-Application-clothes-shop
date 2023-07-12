import React from "react";
import { Card , Row, Col} from 'antd';
import edit from '../../images/pencil.svg'
import remove from '../../images/trash-can.svg'
// import products from "../../data/Products"
import "../../css/Mainproduct.css";
const { Meta } = Card;

const MainProduct = () => {
    return (
      <div className="MainProduct-container">
        <div className="MainProduct-select">
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<img src={edit} />, <img src={remove} />]}
            >
              <Meta
                title="Giày"
                description="45$"
              />
            </Card>
          </Col>
  
          <Col className="gutter-row" span={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<img src={edit} />, <img src={remove} />]}
            >
              <Meta
                title="Áo"
                description="45$"
              />
            </Card>
          </Col>
  
          <Col className="gutter-row" span={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<img src={edit} />, <img src={remove} />]}
            >
              <Meta
                title="Váy"
                description="45$"
              />
            </Card>
          </Col>
        </Row>
        </div>
      </div>
    );
  };
  

export default MainProduct;