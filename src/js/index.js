import {
    PerspectiveCamera,
    Scene,
    WebGLRenderer
} from 'three';


const scene = new Scene();

const camera = new PerspectiveCamera();

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
