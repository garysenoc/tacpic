import { fabric } from 'fabric';

import {
	Arrow,
	Gif,
	Chart,
	Element,
	Iframe,
	Video,
	Node,
	Link,
	CurvedLink,
	OrthogonalLink,
	Line,
	Cube,
} from './objects';
import { FabricObject } from './utils';
import { Code } from './objects/Element';
import Svg, { SvgOption } from './objects/Svg';

export interface ObjectSchema {
	create: (...option: any) => fabric.Object;
}

export interface CanvasObjectSchema {
	[key: string]: ObjectSchema;
}

export const createCanvasObject = (objectSchema: CanvasObjectSchema) => objectSchema;

const CanvasObject: CanvasObjectSchema = {
	group: {
		create: ({ objects, ...option }: { objects: FabricObject[] }) => new fabric.Group(objects, option),
	},
	'i-text': {
		create: ({ text, ...option }: { text: string }) => new fabric.IText(text, option),
	},
	textbox: {
		create: ({ text, ...option }: { text: string }) => new fabric.Textbox(text, option),
	},
	triangle: {
		create: (option: any) => new fabric.Triangle(option),
	},
	circle: {
		create: (option: any) => new fabric.Circle(option),
	},
	rect: {
		create: (option: any) => new fabric.Rect(option),
	},
	cube: {
		create: (option: any) => new Cube(option),
	},
	image: {
		create: ({ element = new Image(), ...option }) =>
			new fabric.Image(element, {
				...option,
				crossOrigin: 'anonymous',
			}),
	},
	polygon: {
		create: ({ points, ...option }: { points: any }) =>
			new fabric.Polygon(points, {
				...option,
				perPixelTargetFind: true,
			}),
	},
	star: {
		create: ({ points, ...option }: { points: any }) => {
			return new fabric.Polygon(
				// [
				// 	{ x: 347.58312844781517, y: 187.4285714285719 },
				// 	{ x: 406.9728781354888, y: 270.85714285714283 },
				// 	{ x: 541.7419255036714, y: 281.14285714285705 },
				// 	{ x: 446.94674811757693, y: 353.14285714285666 },
				// 	{ x: 474.92845710503855, y: 449.71428571428464 },
				// 	{ x: 349.2962943041903, y: 404.57142857142776 },
				// 	{ x: 226.51940793063415, y: 447.999999999999 },
				// 	{ x: 248.21950877805338, y: 354.28571428571377 },
				// 	{ x: 149.94418738106867, y: 285.3333333333332 },
				// 	{ x: 285.6130794414887, y: 271.99999999999994 },
				// ],
				points,
				{
					...option,
					perPixelTargetFind: true,
					fill: 'transparent',
					transparentCorners: true,
					stroke: 'black',
				},
			);
		},
	},
	line: {
		create: ({ points, ...option }: { points: any }) => new Line(points, option),
	},
	arrow: {
		create: ({ points, ...option }: { points: any }) => new Arrow(points, option),
	},
	chart: {
		create: (option: any) =>
			new Chart(
				option.chartOption || {
					xAxis: {},
					yAxis: {},
					series: [
						{
							type: 'line',
							data: [
								[0, 1],
								[1, 2],
								[2, 3],
								[3, 4],
							],
						},
					],
				},
				option,
			),
	},
	element: {
		create: ({ code, ...option }: { code: Code }) => new Element(code, option),
	},
	iframe: {
		create: ({ src, ...option }: { src: string }) => new Iframe(src, option),
	},
	video: {
		create: ({ src, file, ...option }: { src: string; file: File }) => new Video(src || file, option),
	},
	gif: {
		create: (option: any) => new Gif(option),
	},
	node: {
		create: (option: any) => new Node(option),
	},
	link: {
		create: (fromNode, fromPort, toNode, toPort, option) => new Link(fromNode, fromPort, toNode, toPort, option),
	},
	curvedLink: {
		create: (fromNode, fromPort, toNode, toPort, option) =>
			new CurvedLink(fromNode, fromPort, toNode, toPort, option),
	},
	orthogonalLink: {
		create: (fromNode, fromPort, toNode, toPort, option) =>
			new OrthogonalLink(fromNode, fromPort, toNode, toPort, option),
	},
	svg: {
		create: (option: SvgOption) => new Svg(option),
	},
};

export default CanvasObject;
