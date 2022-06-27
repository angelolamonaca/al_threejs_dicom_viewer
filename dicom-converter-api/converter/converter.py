import numpy as np
from PIL import Image
from numpy import ndarray
from pydicom import dcmread, FileDataset


def convert_dicom(case_id, img_id, output_type="json", with_metadata=False):
    # https://pydicom.github.io/pydicom/stable/tutorials/dataset_basics.html

    # Extract dataset from dcm file
    # https://pydicom.github.io/pydicom/stable/reference/dataset.html
    ds: FileDataset = dcmread(f'assets/dcm/{case_id}/{case_id}_{img_id}.dcm')

    dicom_hu = ds.pixel_array * ds.RescaleSlope + ds.RescaleIntercept

    pixel_data_uint8_scaled: ndarray = np.uint32(dicom_hu)
    print(pixel_data_uint8_scaled.max())

    if output_type == "json":
        # Convert array to list
        output_json = {
            "pixelData": pixel_data_uint8_scaled.tolist()
        }
        if with_metadata:
            output_json["metadata"] = ds.to_json_dict()
        return output_json

    # Convert array to RGB Image
    output_img: Image = Image.fromarray(pixel_data_uint8_scaled).convert("RGB")
    return output_img
