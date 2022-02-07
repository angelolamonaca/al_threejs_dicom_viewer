from io import BytesIO

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.responses import StreamingResponse

from converter.converter import convert_dicom_to_rgb

app = FastAPI()
app.mount("/assets", StaticFiles(directory="assets"), name="assets")


@app.get("/img/{img_id}")
async def get_image(img_id):
    original_image = convert_dicom_to_rgb(img_id)
    filtered_image = BytesIO()
    original_image.save(filtered_image, "JPEG")
    filtered_image.seek(0)
    return StreamingResponse(filtered_image, media_type="image/jpeg")
