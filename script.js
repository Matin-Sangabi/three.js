// * define scene object
const scene = new THREE.Scene();
const background = new THREE.Color(0x000000);

// * Geometry + Material  = Mesh

const geometry = new THREE.BoxGeometry(3, 1, 3); // width , height , depth

const material = new THREE.MeshLambertMaterial({ color: 0xfb8000 });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0, 0, 0); // x,y,z
// ? we can mesh.rotation.set((15/180) * Math.PI , 0 ,0)

scene.add(mesh);

// * setup light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 20, 0); // x , y ,z
scene.add(dirLight);

//* setup camera
//? two method => 1.Perspective 2.Orthographic[*]
const aspect = window.innerWidth / window.innerHeight;
const width = 10;
const height = width * aspect;

const camera = new THREE.OrthographicCamera(
  width / -2, // left
  width / 2, // right
  height / 2, // top
  height / -2, // bottom
  1, // near
  100 //far
);

camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);

//* render scene

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

//* add to html
document.body.appendChild(renderer.domElement);
