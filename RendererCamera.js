// 引入Three.js
import * as THREE from './three.js-r123/build/three.module.js';
// 引入Three.js扩展库
import { OrbitControls } from './three.js-r123/examples/jsm/controls/OrbitControls.js';

// width和height用来设置Three.js输出Canvas画布尺寸，同时用来辅助设置相机渲染范围
var width = window.innerWidth; //窗口文档显示区的宽度
var height = window.innerHeight; //窗口文档显示区的高度
/**
* 相机设置
*/
//  透视投影
var camera = new THREE.PerspectiveCamera(30, width / height, 1, 10000);
camera.position.set(250, 250, 250);//通过相机控件OrbitControls旋转相机，选择一个合适场景渲染角度
camera.lookAt(0, 0, 0);
/**
 * 创建渲染器对象
 */
var renderer = new THREE.WebGLRenderer({
    antialias: true, //开启锯齿
});
renderer.setPixelRatio(window.devicePixelRatio);//设置设备像素比率,防止Canvas画布输出模糊。
renderer.setSize(width, height); //设置渲染区域尺寸

// renderer.domElement表示Three.js渲染结果,也就是一个HTML元素(Canvas画布)
// document.body.appendChild(renderer.domElement); //body元素中插入canvas对象

// 设置three.js背景颜色 和雾化颜色相配   
renderer.setClearColor(0x005577, 1);
renderer.outputEncoding = THREE.sRGBEncoding;//解决加载gltf格式模型纹理贴图和原图不一样问题

//创建控件对象  控件可以监听鼠标的变化，改变相机对象的属性
// 旋转：拖动鼠标左键
// 缩放：滚动鼠标中键
// 平移：拖动鼠标右键
var controls = new OrbitControls(camera, renderer.domElement);

export { renderer, camera };