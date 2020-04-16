This is my website. It's compiled via the [Wintersmith](http://wintersmith.io/)
static site generator.

## building

```bash
npm run preview
npm run build
```

Preview runs on `http://localhost:8080/`

## making a video

```bash
ffmpeg -i lumpy.mov  -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" lumpy.mp4
```

## credits
- [trianglify.io](https://trianglify.io/) - polyart background image
- [MuseScore](https://musescore.org/en) - sheet music graphic
- [Google Fonts](https://fonts.google.com/) - fonts
- [Font Awesome](https://fontawesome.com/) - icon font
- [Flickity](https://flickity.metafizzy.co/) - carousel
