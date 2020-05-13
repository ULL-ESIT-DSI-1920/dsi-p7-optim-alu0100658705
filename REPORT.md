| ##  | Nombre del fichero  | Formato | Prioridad | Tamaño inicial --> final | Herramienta         |
| --- | ------------------- | ------- | --------- | ------------------------ | ------------------- |
| 1   | `index.html`        | HTML    | HIGH      | `6.8KB` --> `KB`         | `htmlnano` (parcel) |
| 2   | `index.css`         | CSS     | HIGHEST   | `4.1KB` --> `KB`         |                     |
| 3   | `index.js`          | JS      | LOW       | `1.4KB` --> `KB`         |                     |
| 4   | `classroom.jpg`     | JPEG    | HIGH      | `222KB` --> `KB`         |
| 5   | `dark.jpg`          | JPEG    | LOW       | `64KB` --> `KB`          |                     |
| 6   | `docker.svg`        | SVG+XML | LOW       | `5.1KB` --> `KB`         |                     |
| 7   | `do-more.jpg`       | JPEG    | LOW       | `155KB` --> `KB`         |
| 8   | `foto01.jpg`        | JPEG    | LOW       | `3.6MB` --> `MB`         |
| 9   | `foto02.jpg`        | JPEG    | LOW       | `4.8MG` --> `MB`         |
| 10  | `foto03.png`        | PNG     | LOW       | `370KB` --> `KB`         |
| 11  | `foto04.png`        | PNG     | LOW       | `272KB` --> `KB`         |
| 12  | `js.svg`            | SVG+XML | LOW       | `3.7KB` --> `KB`         |
| 13  | `laptop.jpg`        | JPEG    | LOW       | `126KB` --> `KB`         |
| 14  | `optimization.svg`  | SVG+XML | LOW       | `9.6KB` --> `KB`         |
| 15  | `parcel.png`        | PNG     | LOW       | `800KB` --> `KB`         |
| 16  | `postcss.svg`       | SVG+XML | LOW       | `18KB` --> `KB`          |                     |
| 17  | `postureo.jpg`      | JPEG    | LOW       | `67KB` --> `KB`          |
| 18  | `reunion.jpg`       | JPEG    | LOW       | `173KB` --> `KB`         |
| 19  | `semicolon.jpg`     | JPEG    | LOW       | `572KB` --> `KB`         |
| 20  | `speech.svg`        | SVG+XML | LOW       | `5.8KB` --> `KB`         |
| 21  | `thinking.jpg`      | JPEG    | LOW       | `68KB` --> `KB`          |                     |
| 22  | `vuejs.svg`         | SVG+XML | LOW       | `2.5KB` --> `KB`         |
| 23  | `webcomponents.svg` | SVG+XML | LOW       | `1.3KB` --> `KB`         |

Los archivos multimedia (audio / video):

| ##  | Nombre        | Formato - Codec (Video/Audio) | Duración  | Prioridad | Tamaño inicial --> final | Herramienta |
| --- | ------------- | ----------------------------- | --------- | --------- | ------------------------ | ----------- |
| 24  | `typing.mp4`  | MP4 - h264/AVC1               | `20seg`   | LOW       | `13.8MB` --> `4.2MB`     | `ffmpeg`    |
| 25  | `vid7_ns.mp4` | MP4 - h264/AVC1               | `36seg`   | LOW       | `10MB` --> `378KB`       | `ffmpeg`    |
| 26  | `audio7.mp3`  | MP3                           | `10seg`   | LOW       | `163KB` --> `77KB`       | `ffmpeg`    |
| 27  | `kudasai.mp3` | MP3                           | `3.16min` | LOW       | `4.7MB` --> `2.1MB`      | `ffmpeg`    |

- Los ficheros que en la pestaña `Protocol` indiquen `chrome-extension` o `websocket` no se incluirán en la tabla anterior.
- Si lo ejecutas en local, el fichero `localhost` es realmente el `index.html`.
