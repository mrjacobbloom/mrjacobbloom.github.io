This is my website.

## installing

I know literally nothing about Ruby or its ecosystem and this was a very scary
installation process

```bash
sudo gem install jekyll -v 3.9.0     
gem install bundler
bundle install
```

## build / serve locally

```bash
npm run transpile
npm run serve

## Or if you can't deal with jekyll and just want to edit yolobrella
npm run simpleServer
```

Preview runs on `http://localhost:4000/`

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
