from io import BytesIO

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse

from converter.converter import convert_dicom_to_rgb

app = FastAPI()
app.mount("/assets", StaticFiles(directory="assets"), name="assets")
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/{case_id}/{img_id}")
async def get_image(case_id, img_id):
    original_image = convert_dicom_to_rgb(case_id, img_id)
    filtered_image = BytesIO()
    original_image.save(filtered_image, "JPEG")
    filtered_image.seek(0)
    return StreamingResponse(filtered_image, media_type="image/jpeg")
