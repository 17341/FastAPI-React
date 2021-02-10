import uvicorn

#Run the local server and reload it on every saved changes

if __name__ == "__main__":
    uvicorn.run("app.api:app", host="0.0.0.0", port=8000, reload=True)