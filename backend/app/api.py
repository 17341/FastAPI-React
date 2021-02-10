from fastapi import FastAPI

#Cross Origini Ressource Sharing : possibility that requests can originate from different protocol, IP,...
from fastapi.middleware.cors import CORSMiddleware

#Instanciate an object of the calss FastAPI
app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000", 
]

#Implementing CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}