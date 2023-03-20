import * as three from "three";
// import { cube } from "./creatingCube";
const canvasWrapper = document.getElementById("canvas-wrapper");
// Creating a scene
const scene = new three.Scene();

// Creating a camera
const camera = new three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new three.WebGL1Renderer();

renderer.setSize(window.innerWidth, window.innerHeight);
canvasWrapper.appendChild(renderer.domElement);

const geometry = new three.BoxGeometry(1, 1, 1);
const material = new three.MeshBasicMaterial({
  color: "rgb(234,222,135)",
});

const cube = new three.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
