import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js";

// Create scene:

const scene = new THREE.Scene();

scene.background = new THREE.Color("orange");

// Create or Add an object:

const cubeGeometery = new THREE.BoxGeometry(1, 1, 1);

const cubeMaterial = new THREE.MeshBasicMaterial({ color: "purple" });

const cube = new THREE.Mesh(cubeGeometery, cubeMaterial);

scene.add(cube);

// Create your camera:

const fov = 75
const aspectRatio = window.innerWidth / window.innerHeight
const near = 0.1
const far = 30
const innerWidth = window.innerWidth
const innerHeight = window.innerHeight

const camera = new THREE.PerspectiveCamera(
    fov,
    aspectRatio,
    near,
    far
);

camera.position.z = 5;





// Create renderer:

const canvas = document.querySelector("canvas.canvasObject")

console.log(canvas);


const controls = new OrbitControls(camera, canvas);

controls.autoRotate = true

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialiasing: true })

renderer.setSize(innerWidth, innerHeight)


const animateLoop = () => {

    requestAnimationFrame(animateLoop)

    controls.update()

    renderer.render(scene, camera)


}

animateLoop()





