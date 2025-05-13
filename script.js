const lines = [
  "You must be a parking ticket because you’ve got FINE written all over you.",
  "Are you French? Because Eiffel for you.",
  "I must be a snowflake, because I've fallen for you.",
  "Do you have a map? I keep getting lost in your eyes.",
  "Hi Mitch, can we fvck today?"
];

function generatePickup() {
  const p = document.querySelector('.pickup');
  const newLine = lines[Math.floor(Math.random() * lines.length)];
  p.textContent = newLine;
  gsap.fromTo(p, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
}

// 3D Background (stars effect)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });
renderer.setSize(window.innerWidth, window.innerHeight);

const starGeometry = new THREE.BufferGeometry();
const starCount = 1000;
const starVertices = [];

for (let i = 0; i < starCount; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = -Math.random() * 2000;
  starVertices.push(x, y, z);
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  stars.rotation.x += 0.0005;
  stars.rotation.y += 0.0005;
  renderer.render(scene, camera);
}
animate();
