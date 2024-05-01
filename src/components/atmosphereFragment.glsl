varying vec3 vertexNormal;
uniform int theme; // 0 for light, 1 for dark

void main() {
    float intensity = pow(0.75 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
    gl_FragColor = vec4(0.0, 0.45, 0.75, 1.0) * intensity;
}