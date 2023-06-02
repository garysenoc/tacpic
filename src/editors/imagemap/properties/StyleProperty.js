import React from 'react';
import { Form, Slider, Select, InputNumber, Col, Row } from 'antd';
import i18n from 'i18next';

import ColorPicker from '../../../components/common/ColorPicker';

const options = [
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/1.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/2.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/3.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/4.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/5.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/6.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/7.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/8.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/9.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/10.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/11.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/12.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/13.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/14.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/15.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/16.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/17.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/18.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/19.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/20.png',
	},
	{
		label: 'Option 1',
		value: '1',
		imageSrc: './TEXTURE/png/21.png',
	},
];
export default {
	render(canvasRef, form, data) {
		const { getFieldDecorator, setFields, setFieldsValue } = form;
		return (
			<React.Fragment>
				<Form.Item label={i18n.t('imagemap.style.fill-color')} colon={false}>
					{getFieldDecorator('fill', {
						initialValue: data.fill || 'rgba(0, 0, 0, 1)',
					})(<ColorPicker />)}
				</Form.Item>
				{/* <Form.Item label={i18n.t('imagemap.style.fill-color')} colon={false}>
					{getFieldDecorator(
						'fill',
						new fabric.Pattern({
							source:
								'https://img.freepik.com/premium-vector/pattern-geometric-line-circle-abstract-seamless-blue-line_60284-53.jpg?w=2000',
							repeat: document.getElementById('repeat').value,
						}),
					)(<ColorPicker />)}
				</Form.Item> */}
				<Form.Item label={i18n.t('common.opacity')} colon={false}>
					{getFieldDecorator('opacity', {
						rules: [
							{
								type: 'number',
								min: 0,
								max: 1,
							},
						],
						initialValue: data.opacity || 1,
					})(<Slider min={0} max={1} step={0.1} />)}
				</Form.Item>
				<Form.Item label={i18n.t('imagemap.style.stroke-color')} colon={false}>
					{getFieldDecorator('stroke', {
						initialValue: data.stroke || 'rgba(255, 255, 255, 0)',
					})(<ColorPicker />)}
				</Form.Item>
				<Form.Item label={i18n.t('imagemap.style.stroke-width')} colon={false}>
					{getFieldDecorator('strokeWidth', {
						initialValue: data.strokeWidth || 1,
					})(
						<Select showSearch style={{ width: '100%' }}>
							{Array.from({ length: 12 }, (v, k) => {
								const value = k + 1;
								return (
									<Select.Option key={value} value={value}>
										{value}
									</Select.Option>
								);
							})}
						</Select>,
					)}
				</Form.Item>
				<Form.Item label={'Texture'} colon={false}>
					{/* {getFieldDecorator('fill', {
						initialValue: 'None',
					})( */}
					<Select
						showSearch
						style={{ width: '100%' }}
						placeholder="None"
						// optionFilterProp="value"
						// filterOption={(input, option) =>
						// 	option.props.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
						// }
						onSelect={value => {
							const activeObject = canvasRef.canvas.getActiveObject();
							console.log('activeObject', activeObject);

							activeObject.set('fill', 'rgba(0, 0, 0, 1)');
							const pattern = new fabric.Pattern({
								source: value,
								repeat: 'repeat',
							});

							activeObject.set('fill', pattern);
							// canvasRef.handler.transactionHandler.save('scaled');
							// canvasRef.handler.canvas.requestRenderAll();
							// canvasRef.handler.canvas.setActiveObject(canvasRef.handler.canvas);

							canvasRef.handler.canvas.renderAll.bind(canvasRef);
						}}
					>
						{options.map(option => (
							<Option key={option.value} value={option.imageSrc} label={option.label}>
								<img src={option.imageSrc} alt={option.label} width={'20px'} height={'20px'} />
							</Option>
						))}
					</Select>
					{/* )} */}
				</Form.Item>
				{data.type === 'rect' ? (
					<Row gutter={8}>
						<Col md={24} lg={12}>
							<Form.Item label={i18n.t('imagemap.style.rx')} colon={false}>
								{getFieldDecorator('rx', {
									initialValue: data.rx || 0,
								})(<InputNumber min={0} />)}
							</Form.Item>
						</Col>
						<Col md={24} lg={12}>
							<Form.Item label={i18n.t('imagemap.style.ry')} colon={false}>
								{getFieldDecorator('ry', {
									initialValue: data.ry || 0,
								})(<InputNumber min={0} />)}
							</Form.Item>
						</Col>
					</Row>
				) : null}
			</React.Fragment>
		);
	},
};
