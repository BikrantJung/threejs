import * as three from "three";
// import { cube } from "./creatingCube";
const canvasWrapper = document.getElementById("canvas-wrapper");
/*
  Creating a scene, camera, and renderer and appending to the DOM.
*/
const scene = new three.Scene();

// Creating camera, position and lookAt
const camera = new three.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// Creating a renderer
const renderer = new three.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
canvasWrapper.appendChild(renderer.domElement);

/*
  Creating a material, think this material as iron, we can shape any objects from iron.
  Here we are creating a line from a material
*/
const material = new three.LineBasicMaterial({ color: "blue" });

// Creating X,Y,Z points for a line
const points = [];
points.push(new three.Vector3(-10, 0, 0));
points.push(new three.Vector3(0, 10, 0));
points.push(new three.Vector3(10, 0, 0));

// Setting the geometry
const geometryTriangle = new three.BufferGeometry().setFromPoints(points);

// Creating a Line
const triangle = new three.Line(geometryTriangle, material);

scene.add(triangle);
function animate() {
  requestAnimationFrame(animate);
  // line.rotation.x += 0.01;
  // line.rotation.y += 0.01;
  // line.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate();
