let express = require('express');
let router = express.Router();

router.get('/image', async function(req, res, next) {
  let images = [];
  for (let i = 0; i < 192; i++) {
    const value = `${i}`.padStart(3, '0');
    images.push(`public/images/brain/instances/IMG_${value}.png`);
  }

  let header = {
    metadata: {
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
    }
  };

  const localizerX = await loadImage('public/images/brain/localizers/brain-localizer-x.png');
  const localizerY = await loadImage('public/images/brain/localizers/brain-localizer-y.png');
  const localizerZ = await loadImage('public/images/brain/localizers/brain-localizer-z.png');

  let dataset = {};
  for (let imagesKey in images) {
    const data = await loadImage(images[imagesKey]);
    dataset = {
      ...dataset,
      [`data_${imagesKey}`]: {
        id: parseInt(imagesKey),
        metadata: header.metadata,
        numOfInstances: images.length,
        buffer: data.data,
        width: data.width,
        height: data.height,
        localizerX: localizerX.data,
        localizerXSize: [localizerX.width, localizerX.height],
        localizerY: localizerY.data,
        localizerYSize: [localizerY.width, localizerY.height],
        localizerZ: localizerZ.data,
        localizerZSize: [localizerZ.width, localizerZ.height]
      }
    };
  }
  res.status(200).json(dataset);
});

module.exports = router;
