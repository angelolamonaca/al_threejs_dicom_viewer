export class JsonDcm {
  pixelData: [[]];

  metadata?: JSON;

  constructor(pixelData: [[]], metadata?: JSON) {
    this.pixelData = pixelData;
    if (metadata) {
      this.metadata = metadata;
    }
  }
}
