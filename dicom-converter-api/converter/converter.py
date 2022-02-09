import numpy as np
from PIL import Image
from numpy import ndarray
from pydicom import dcmread, FileDataset


def convert_dicom(case_id, img_id, output_type="json"):
    # https://pydicom.github.io/pydicom/stable/tutorials/dataset_basics.html

    # Extract dataset from dcm file
    # https://pydicom.github.io/pydicom/stable/reference/dataset.html
    ds: FileDataset = dcmread(f'assets/dcm/{case_id}/{case_id}_{img_id}.dcm')

    # Extract the pixel data from dataset
    pixel_data: ndarray = ds.pixel_array

    # Convert to float to avoid overflow or underflow losses.
    pixel_data_float: ndarray = pixel_data.astype(float)

    # Rescaling grey scale between 0-255
    pixel_data_float_scaled: ndarray = np.maximum(pixel_data_float, 0) / pixel_data_float.max(initial=0) * 255.0

    # Convert to uint8 ndarray
    pixel_data_uint8_scaled: ndarray = np.uint8(pixel_data_float_scaled)

    if output_type == "json":
        # Convert array to list
        return pixel_data_uint8_scaled.tolist()

    # Convert array to RGB Image
    output_img: Image = Image.fromarray(pixel_data_uint8_scaled).convert("RGB")
    return output_img
