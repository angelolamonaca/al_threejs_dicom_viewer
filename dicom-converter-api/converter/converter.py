import numpy as np
from numpy import ndarray
from pydicom import dcmread, FileDataset


def convert_dicom(case_id, img_id, with_metadata=False):

    ds: FileDataset = dcmread(f'assets/dcm/{case_id}/{case_id}_{img_id}.dcm')

    dicom_hu = ds.pixel_array * ds.RescaleSlope + ds.RescaleIntercept

    pixel_data_uint8_scaled: ndarray = np.uint32(dicom_hu)

    output_json = {
        "pixelData": pixel_data_uint8_scaled.tolist()
    }

    if with_metadata:
        output_json["metadata"] = ds.to_json_dict()

    return output_json
