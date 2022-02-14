from io import BytesIO, SEEK_SET

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse, JSONResponse

from converter.converter import convert_dicom

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
async def get_image(case_id, img_id, output_type="json", with_metadata=False):
    converted_dicom = convert_dicom(case_id, img_id, output_type, with_metadata)
    if output_type == "json":
        return JSONResponse(content=converted_dicom)
    else:
        filtered_image = BytesIO()
        converted_dicom.save(filtered_image, output_type)
        filtered_image.seek(SEEK_SET)
        return StreamingResponse(filtered_image)
