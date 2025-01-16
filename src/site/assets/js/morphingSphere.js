import * as THREE from 'three';
import { SimplexNoise } from 'three/addons/math/SimplexNoise.js';

class MorphingSphere {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.noise = new SimplexNoise();
        this.clock = new THREE.Clock();
        
        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        
        // Setup camera
        this.camera.position.z = 2;

        // Create sphere geometry
        const geometry = new THREE.IcosahedronGeometry(1, 64);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                colorA: { value: new THREE.Color(0x7400b8) },
                colorB: { value: new THREE.Color(0x80ffdb) }
            },
            vertexShader: `
                varying vec3 vNormal;
                varying vec3 vPosition;
                uniform float time;
                
                void main() {
                    vNormal = normal;
                    vPosition = position;
                    
                    float noise = sin(position.x * 2.0 + time) * 
                                sin(position.y * 2.0 + time) * 
                                sin(position.z * 2.0 + time) * 0.2;
                    
                    vec3 newPosition = position + normal * noise;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 colorA;
                uniform vec3 colorB;
                varying vec3 vNormal;
                varying vec3 vPosition;
                
                void main() {
                    float intensity = pow(0.5 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
                    vec3 color = mix(colorA, colorB, intensity);
                    gl_FragColor = vec4(color, 1.0);
                }
            `
        });

        this.sphere = new THREE.Mesh(geometry, material);
        this.scene.add(this.sphere);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        // Add point light
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        this.scene.add(pointLight);

        // Handle window resize
        window.addEventListener('resize', this.onWindowResize.bind(this));

        // Start animation
        this.animate();
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        const time = this.clock.getElapsedTime();
        this.sphere.rotation.x = time * 0.3;
        this.sphere.rotation.y = time * 0.2;
        
        this.sphere.material.uniforms.time.value = time;
        
        this.renderer.render(this.scene, this.camera);
    }

    getRenderer() {
        return this.renderer;
    }
}

// Initialize only on homepage
if (document.querySelector('.homepage-background')) {
    const morphingSphere = new MorphingSphere();
    const renderer = morphingSphere.getRenderer();
    document.querySelector('.homepage-background').appendChild(renderer.domElement);
} 