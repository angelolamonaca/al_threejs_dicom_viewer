import numpy as np
from PIL import Image
from pydicom import dcmread


def convert_dicom_to_rgb(case_id, img_id):
    ds = dcmread(f'assets/dcm/{case_id}/{case_id}_{img_id}.dcm')
    img = ds.pixel_array
    # Convert pixel_array (img) to -> gray image (img_2d_scaled)
    # Step 1. Convert to float to avoid overflow or underflow losses.
    img_2d = img.astype(float)

    # Step 2. Rescaling grey scale between 0-255
    img_2d_scaled = (np.maximum(img_2d, 0) / img_2d.max()) * 255.0

    # Step 3. Convert to uint
    img_2d_scaled = np.uint8(img_2d_scaled)

    img_final = Image.fromarray(img_2d_scaled).convert('RGB')

    return img_final
