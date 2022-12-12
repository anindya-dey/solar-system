import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer
} from 'three';


// Scene
const scene = new Scene();

// Red Cube
const boxGeometry = new BoxGeometry(5, 5, 5);
const boxMaterial = new MeshBasicMaterial({
    color: 0xff0000
});
const box = new Mesh(boxGeometry, boxMaterial);
box.position.set(10, -10, -20);

scene.add(box);

// Sizes
const sizes = {
    height: window.innerHeight,
    width: window.innerWidth
}

// Camera
const camera = new PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 20;

const renderer = new WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
