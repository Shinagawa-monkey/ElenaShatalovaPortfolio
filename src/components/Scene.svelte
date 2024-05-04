<script>
  import { onMount, onDestroy } from 'svelte';
  import { T, useTask } from '@threlte/core';
  import { TextureLoader, AdditiveBlending, BackSide } from 'three';
  import { useLoader } from '@threlte/core';
  import { interactivity } from '@threlte/extras';
  import { theme } from '$lib/theme';

  // Import shader code as strings using Vite's ?raw query
  import fragmentShader from './fragment.glsl?raw';
  import vertexShader from './vertex.glsl?raw';
  import atmosphereFragmentShaderLight from './atmosphereFragmentLight.glsl?raw';
  import atmosphereFragmentShaderDark from './atmosphereFragmentDark.glsl?raw';
  import atmosphereVertexShader from './atmosphereVertex.glsl?raw';

  interactivity();

  const texture = useLoader(TextureLoader).load('/images/globe.jpg');
  let atmosphereFragmentShader = $theme === 'light' ? atmosphereFragmentShaderLight : atmosphereFragmentShaderDark

  let cursorPosition = { x: 0, y: 0 };
  let rotationX = 0;
  let rotationY = 0;
  let rotationSpeed = 0.06;
  let rotationMesh=0;

  useTask((delta) => {
    // Update rotation based on mouse movement
    rotationX += delta * (cursorPosition.y - window.innerHeight / 2) / window.innerHeight * Math.PI * 2 * rotationSpeed;
    rotationY += delta * (cursorPosition.x - window.innerWidth / 2) / window.innerWidth * Math.PI * 2 * rotationSpeed;
    rotationMesh += delta * 0.01;
  });

  const handleMouseMove = (event) => {
    cursorPosition.x = event.clientX;
    cursorPosition.y = event.clientY;
  };

  onMount(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });
  onDestroy(() => {
      window.removeEventListener('mousemove', handleMouseMove);
  });

  $: {
    atmosphereFragmentShader = $theme === 'light' ? atmosphereFragmentShaderLight : atmosphereFragmentShaderDark;
  }
</script>

<T.PerspectiveCamera makeDefault fov={75} position={[0, 0, 15]} far={1000} near={0.1} on:create={({ ref }) => {
  ref.lookAt(0, 0, 0)
}} />

<T.Group rotation={[rotationX, rotationY, 0]}>
  <T.Mesh rotation.y={rotationMesh}>
    <T.SphereGeometry args={[7.5, 75, 75]} />
    {#await texture then value}
      <T.ShaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={{ globeTexture: { value } }} />
    {/await}
  </T.Mesh>
</T.Group>

<T.Mesh scale={[1.1, 1.1, 1.1]}>
  <T.SphereGeometry args={[7.5, 75, 756]} />
  {#await texture then value}
    <T.ShaderMaterial fragmentShader={atmosphereFragmentShader} vertexShader={atmosphereVertexShader} side={BackSide} blending={AdditiveBlending} />
  {/await}
</T.Mesh>