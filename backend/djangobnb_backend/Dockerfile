# FROM python:3.12.2-slim-bullseye

# WORKDIR /usr/src/djangobnb_backend

# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# RUN apt-get update && apt-get install -y netcat

# RUN pip install --upgrade pip
# COPY ./requirements.txt .
# RUN pip install -r requirements.txt

# COPY ./entrypoint.sh .
# RUN sed -i 's/\r$//g' /usr/src/djangobnb_backend/entrypoint.sh
# RUN chmod +x /usr/src/djangobnb_backend/entrypoint.sh

# COPY . .

# ENTRYPOINT [ "/usr/src/djangobnb_backend/entrypoint.sh" ]


FROM python:3.12.2-slim-bullseye

# Working directory inside the container
WORKDIR /usr/src/djangobnb_backend

# Prevent Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install useful system tools
RUN apt-get update && apt-get install -y netcat-traditional iputils-ping && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY ./requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy entrypoint script and fix line endings
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/djangobnb_backend/entrypoint.sh
RUN chmod +x /usr/src/djangobnb_backend/entrypoint.sh

# Copy rest of the backend
COPY ./djangobnb_backend .

ENTRYPOINT ["/usr/src/djangobnb_backend/entrypoint.sh"]



