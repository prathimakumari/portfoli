// Scene setup for the 3D cube
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("3d-cube").appendChild(renderer.domElement);

// Cube geometry
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

document.querySelector(".next").addEventListener("click", moveToNextSlide);
document.querySelector(".prev").addEventListener("click", moveToPrevSlide);

const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
let currentIndex = 0;

function moveSlides() {
  currentIndex = (currentIndex + 1) % slideCount; // Loop through the slides
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startSlideAnimation() {
  setInterval(moveSlides, 3000); // Move to the next slide every 3 seconds
}

// Event listener for "Featured Projects" button click
document
  .querySelector(".featured-projects-btn")
  .addEventListener("click", () => {
    startSlideAnimation();
  });

animate();

// Resize event
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
