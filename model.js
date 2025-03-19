// Three.js Scene Setup
let scene, camera, renderer, controls;
let model;

function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = null;

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    const container = document.getElementById('model-container');
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Add controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 3;
    controls.maxDistance = 10;

    // Load 3D model
    const loader = new THREE.GLTFLoader();
    loader.load(
        'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/RobotExpressive/glTF/RobotExpressive.gltf',
        function (gltf) {
            model = gltf.scene;
            scene.add(model);

            // Scale and position the model
            model.scale.set(0.5, 0.5, 0.5);
            model.position.set(0, -1, 0);

            // Play animations if available
            if (gltf.animations && gltf.animations.length) {
                const mixer = new THREE.AnimationMixer(model);
                const action = mixer.clipAction(gltf.animations[0]);
                action.play();
            }
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error('An error occurred loading the model:', error);
        }
    );

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    const container = document.getElementById('model-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // Update controls
    controls.update();

    // Rotate model
    if (model) {
        model.rotation.y += 0.005;
    }

    renderer.render(scene, camera);
}

// Initialize and start animation
init();
animate(); 