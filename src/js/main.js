import * as THREE from '../../node_modules/three/build/three.module.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#canvas');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas });

  // 검은색 배경 설정
  renderer.setClearColor(0x000000);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 5;

  // 흰색 큐브 생성
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.00;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate(); // 애니메이션 시작
});

