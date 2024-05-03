<script>
  import { T, useTask } from '@threlte/core';
  import { TextureLoader, AdditiveBlending, BackSide } from 'three';
  import { useLoader } from '@threlte/core';
  import { interactivity, OrbitControls } from '@threlte/extras';
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

  let rotationMesh = 0;
  let rotationSpeed = 0.1;

  useTask((delta) => {
    rotationMesh += delta * rotationSpeed;
  });

  $: {
    atmosphereFragmentShader = $theme === 'light' ? atmosphereFragmentShaderLight : atmosphereFragmentShaderDark;
  }
</script>

<T.PerspectiveCamera makeDefault fov={75} position={[0, 0, 15]} far={1000} near={0.1} on:create={({ ref }) => {
  ref.lookAt(0, 1, 0)
}}>
  <OrbitControls
  autoRotate={false}
  enableDamping={true}
  rotateSpeed={0.4}
  dampingFactor={0.1}
  enableZoom={false}
/>
</T.PerspectiveCamera>

<T.DirectionalLight intensity={1} position={[5, 5, 5]} />
<T.AmbientLight intensity={0.3} />

<T.Mesh rotation.y={rotationMesh}>
  <T.SphereGeometry args={[7.5, 75, 75]} />
  {#await texture then value}
    <T.ShaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={{ globeTexture: { value } }} />
  {/await}
</T.Mesh>


<T.Mesh scale={[1.1, 1.1, 1.1]}>
  <T.SphereGeometry args={[7.5, 75, 756]} />
  {#await texture then value}
    <T.ShaderMaterial fragmentShader={atmosphereFragmentShader} vertexShader={atmosphereVertexShader} side={BackSide} blending={AdditiveBlending} />
  {/await}
</T.Mesh>