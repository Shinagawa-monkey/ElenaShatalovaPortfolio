import { dev } from '$app/environment';
import { TextureLoader, Texture } from 'three';
 
export function optimize(src, widths = [640, 960, 1280], quality = 90) {
  if (dev) return src;
 
  return widths
    .slice()
    .sort((a, b) => a - b)
    .map((width, i) => {
      const url = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
      const descriptor = i < widths.length - 1 ? ` ${width}w` : '';
      return url + descriptor;
    })
    .join(', ');
}

export function optimizeTexture(src, widths = [640, 960, 1280], quality = 90) {
    if (dev) return new TextureLoader().load(src);
  
    const loader = new TextureLoader();
    const textures = widths.map(width => loader.load(`/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`));
    
    return new Texture(textures);
  }