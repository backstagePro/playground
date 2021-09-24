import { Card, Upload } from "antd";
import { Table, Button } from "antd";
import Link from 'next/link'
import React from "react";

const dataSource: any[] = [];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => <a>Open</a>,
  },
];

//  \\wsl$\Ubuntu-20.04\home\niki\bs

export default function Index(){

  return (
    <Card style={{width: '100%'}} title="Project list">
      <Link href="/projects/import">
        <Button>Import new project</Button>     
      </Link>
      <Table dataSource={dataSource} columns={columns} size="small" />
    </Card>
  )
}