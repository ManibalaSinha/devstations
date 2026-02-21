# ─── Backend: Python Flask ─────────────────────────────────────────

FROM python:3.11-slim

# set working dir
WORKDIR /app

# copy Python dependencies file
COPY requirements.txt .

# install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# copy server code
COPY . .

# expose Flask port
EXPOSE 5000

# run
CMD ["python", "run.py"]
