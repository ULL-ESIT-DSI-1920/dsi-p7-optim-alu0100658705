| ##  | Nombre del fichero  | Formato | Prioridad | Tamaño inicial --> final | Herramienta         |
| --- | ------------------- | ------- | --------- | ------------------------ | ------------------- |
| 1   | `index.html`        | HTML    | HIGH      | `6.8KB` --> `6.4KB`      | `htmlnano` (parcel) |
| 2   | `index.css`         | CSS     | HIGHEST   | `4.1KB` --> `3.1KB`      | `htmlnano` (parcel) |
| 3   | `index.js`          | JS      | LOW       | `1.4MB` --> `1.3MB`      | `htmlnano` (parcel) |
| 4   | `classroom.jpg`     | JPEG    | HIGH      | `222KB` --> `111KB`      | `jpegoptim`         |
| 5   | `dark.jpg`          | JPEG    | LOW       | `64KB` --> `42KB`        | `jpegoptim`         |
| 6   | `docker.svg`        | SVG+XML | LOW       | `5.1KB` --> `4.8KB`      | `SVGO`              |
| 7   | `do-more.jpg`       | JPEG    | LOW       | `155KB` --> `78KB`       | `jpegoptim`         |
| 8   | `foto01.jpg`        | JPEG    | LOW       | `3.6MB` --> `1.5MB`      | `jpegoptim`         |
| 9   | `foto02.jpg`        | JPEG    | LOW       | `4.8MG` --> `2.3MB`      | `jpegoptim`         |
| 10  | `foto03.png`        | PNG     | LOW       | `370KB` --> `268KB`      | `optiPNG`           |
| 11  | `foto04.png`        | PNG     | LOW       | `272KB` --> `198KB`      | `optiPNG`           |
| 12  | `js.svg`            | SVG+XML | LOW       | `3.7KB` --> `0.8KB`      | `SVGO`              |
| 13  | `laptop.jpg`        | JPEG    | LOW       | `126KB` --> `117KB`      | `jpegoptim`         |
| 14  | `optimization.svg`  | SVG+XML | LOW       | `9.6KB` --> `1.5KB`      | `SVGO`              |
| 15  | `parcel.png`        | PNG     | LOW       | `800KB` --> `433KB`      | `optiPNG`           |
| 16  | `postcss.svg`       | SVG+XML | LOW       | `18KB` --> `17.2KB`      | `SVGO`              |
| 17  | `postureo.jpg`      | JPEG    | LOW       | `67KB` --> `34KB`        | `jpegoptim`         |
| 18  | `reunion.jpg`       | JPEG    | LOW       | `173KB` --> `77KB`       | `jpegoptim`         |
| 19  | `semicolon.jpg`     | JPEG    | LOW       | `572KB` --> `282KB`      | `jpegoptim`         |
| 20  | `speech.svg`        | SVG+XML | LOW       | `5.8KB` --> `1.6KB`      | `SVGO`              |
| 21  | `thinking.jpg`      | JPEG    | LOW       | `68KB` --> `62KB`        | `jpegoptim`         |
| 22  | `vuejs.svg`         | SVG+XML | LOW       | `2.5KB` --> `0.3KB`      | `SVGO`              |
| 23  | `webcomponents.svg` | SVG+XML | LOW       | `1.3KB` --> `1.2KB`      | `SVGO`              |

Los archivos multimedia (audio / video):

| ##  | Nombre        | Formato - Codec (Video/Audio) | Duración  | Prioridad | Tamaño inicial --> final | Herramienta |
| --- | ------------- | ----------------------------- | --------- | --------- | ------------------------ | ----------- |
| 24  | `typing.mp4`  | MP4 - h264/AVC1               | `20seg`   | LOW       | `13.8MB` --> `12MB`      | `ffmpeg`    |
| 25  | `vid7_ns.mp4` | MP4 - h264/AVC1               | `36seg`   | LOW       | `10MB` --> `378KB`       | `ffmpeg`    |
| 26  | `audio7.mp3`  | MP3                           | `10seg`   | LOW       | `163KB` --> `77KB`       | `ffmpeg`    |
| 27  | `kudasai.mp3` | MP3                           | `3.16min` | LOW       | `4.7MB` --> `2.1MB`      | `ffmpeg`    |

- Los ficheros que en la pestaña `Protocol` indiquen `chrome-extension` o `websocket` no se incluirán en la tabla anterior.
- Si lo ejecutas en local, el fichero `localhost` es realmente el `index.html`.

Comparación herramientas de optimizacion de imágenes:

| ##  | Nombre       | Formato | original | optiPNG | PNGCrush | pngquant |
| --- | ------------ | ------- | -------- | ------- | -------- | -------- |
| 01  | `foto03.png` | PNG     | 370KB    | 268K    | 296K     | 138K     |
| 02  | `foto04.png` | PNG     | 272KB    | 198K    | 219K     | 83K      |
