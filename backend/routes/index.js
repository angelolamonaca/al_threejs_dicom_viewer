let express = require('express');
let router = express.Router();

router.get('/image', async function(req, res, next) {
  let brainImagesArray = [];
  for (let i = 0; i < 192; i++) {
    const value = `${i}`.padStart(3, '0');
    brainImagesArray.push(`assets/images/brain/instances/IMG_${value}.png`);
  }
  let volume = {
    id: 1,
    urls: brainImagesArray,
    red_obb: [],
    info: {
      loc: {
        a: 145,
        s: 244,
        c: 183
      },
      voxelSize: {
        w: 0.8,
        h: 0.8,
        l: 1
      }
    },
    localizerX: 'assets/images/brain/localizers/brain-localizer-x.png',
    localizerY: 'assets/images/brain/localizers/brain-localizer-y.png',
    localizerZ: 'assets/images/brain/localizers/brain-localizer-z.png',
    grid: {
      gridSize: {
        w: 5,
        h: 5,
        l: 5
      },
      signalSize: 1024,
      origin: {
        x: 112,
        y: 50,
        z: 170
      },
      voxelSize: {
        x: 14,
        y: 11,
        z: 1
      }
    }
  };

  const localizerX = await loadImage(volume.localizerX);
  const localizerY = await loadImage(volume.localizerY);

  let localizerZ = new Uint8Array(65536);
  let localizerZSize = [288, 288];
  if (volume.localizerZ !== '') {
    let localizerZData = await loadImage(volume.localizerZ);
    localizerZ = localizerZData.data;
    localizerZSize = [localizerZData.width, localizerZData.height];
  }

  let images = {};
  for (let i in volume.urls) {
    const data = await loadImage(volume['urls'][i]);
    if (parseInt(i) === 0) {
      images = {
        ...images,
        [`data_${i}`]: {
          id: parseInt(i),
          buffer: data.data,
          signal: signal,
          localizer_x: localizer_x.data,
          localizer_y: localizer_y.data,
          localizer_y_wh: [localizer_y.width, localizer_y.height],
          localizer_z: localizer_z,
          localizer_z_wh: localizer_z_wh,
          width: data.width,
          height: data.height,
          length: volume['urls'].length,
          info: info,
          grid: grid
        }
      };
    } else {
      images = {
        ...images,
        [`data_${i}`]: {
          id: parseInt(i),
          buffer: data.data
        }
      };
    }
  }
  res.status(200).json(images);
});

module.exports = router;
