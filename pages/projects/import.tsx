import { Card } from 'antd';
import { Input, Form, Button  } from 'antd'
import { useCallback } from 'react';

interface IProps {

}

const Import: React.FC<IProps> = ({}) => {

    const [form] = Form.useForm();

    const onFinish = useCallback((values: any) => {
        console.log('Finish:', values);
    }, []);

    return (
      <Card>
          <Form 
            form={form} 
            name="horizontal_login" 
            layout="inline"
            initialValues={{
                'path': '/home/vis/Desktop/BS/test-playground-project/'
            }} 
            onFinish={onFinish}>
            
            
            <Form.Item
                name="path"
                rules={[{ 
                    required: true, 
                    message: 'Please add a folder path' 
                }]}
            >
                <Input
                    type="path"
                    placeholder="Path"
                    style={{width: '400px'}}
                />
            </Form.Item>

            <Form.Item shouldUpdate>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    >
                        Import
                    </Button>
                )}
            </Form.Item>
        </Form>
      </Card>
    )
}

export default Import;