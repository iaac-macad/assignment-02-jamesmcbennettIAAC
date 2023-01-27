// load three.js
import * as THREE from 'three'

// uncomment to load controls
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// create a scene and a camera
const scene = new THREE.Scene()
scene.background = new THREE.Color( 'skyblue' ); 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
// Distance object is zoomed, no zoom in/out at current 
camera.position.z = 40

// create the renderer and add it to the html
const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

// Uncomment next line to add controls
// const controls = new OrbitControls( camera, renderer.domElement );

// Create an object and add it to the scene:

// 1. Create the geometry: (default three.js geometry library) default ( 8, 3, 100, 16 )
const geometry = new THREE.TorusKnotGeometry( 8, 3, 100, 16 )

// 2. Create the material:
const material = new THREE.MeshNormalMaterial()

// 3. Create the object
const torus = new THREE.Mesh( geometry, material )

// 4. Add it to the scene
scene.add( torus )

// Render
function animate() {

    requestAnimationFrame( animate )

    // rotate torus a little bit each frame, change numbers to change speed
    torus.rotation.x += 0.01
    torus.rotation.y += 0.01

    renderer.render( scene, camera )

}

animate()