class imageExtractor {
  load() {
    const t2 = ['36444280', '36444294', '36444308', '36444322', '36444336'];
    const files = t2.map((v) => {
      return `https://cdn.rawgit.com/FNNDSC/data/master/dicom/adi_brain/${v}`;
    });
    return 'ok';
  }
}

export default imageExtractor;
