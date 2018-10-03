import React from "react";
import { List, Avatar, Icon } from 'antd';
import "./style.less";


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class ListComp extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { list } = this.props;
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={list}
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text={item.like} />, <IconText type="message" text={item.message} />]}
                    extra={<img width={172} alt="logo" src={item.image} />}
                >
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
             />
        )
    }
}