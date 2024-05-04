import { dev } from '$app/environment';
 
// export function optimize(src, widths = [640, 960, 1280], quality = 90) {
//   if (dev) return src;
 
//   return widths
//     .slice()
//     .sort((a, b) => a - b)
//     .map((width, i) => {
//       const url = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
//       const descriptor = i < widths.length - 1 ? ` ${width}w` : '';
//       return url + descriptor;
//     })
//     .join(', ');
// }

export function optimize(src, widths = [640, 960, 1280], quality = 90) {
    if (dev) return src;
  
    return widths
      .map(width => {
        const url = `/_vercel/image/projectImages?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
        return `${url} ${width}w`;
      })
      .join(', ');
  }