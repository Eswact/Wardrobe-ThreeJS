var xmlContent = '';
var cubeNodes;
var cubeProps = {
width: 0, height: 0, depth: 0
}

var scene = null;

function readXml() {
    fetch('cubes.xml').then((response) => {
        response.text().then((xml) => {
        xmlContent = xml;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let cubes = xmlDOM.querySelectorAll('cube');

        generateCubeProps()
        root = xmlDOM.firstChild;
        for (var i = 0; i < root.childElementCount; i++) {
            var node = root.children[i];
            new MyCube(scene, node);
            }
        });
    });
}
readXml();

function generateCubeProps() {

scene = new THREE.Scene();

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight);
camera.position.set(-5, 10, -25);

var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var bod = document.querySelector('body')
bod.appendChild(renderer.domElement)

const light = new THREE.PointLight(0xffffff, 2, 150);
light.position.set(0, 10, -20);
scene.add(light);

const size = 50;
const divisions = 50;
const colorCenterLine = 0x334477;
const colorGrid = 0x334477;
const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
scene.add(gridHelper);

renderer.render(scene, camera); var animate = function () {
TWEEN.update();
controls.update();
renderer.render(scene, camera)
requestAnimationFrame(animate)
}
animate();
}
generateCubeProps();
