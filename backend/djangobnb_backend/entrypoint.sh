#!/bin/sh

# if [ "$DATABASE" = "postgres" ] 
# then
#     echo "Check if database is running..."

#     while ! nc -z $SQL_HOST $SQL_PORT; do
#         sleep 0.1
#     done

#     echo "The database is up and running :-D"
# fi

# python manage.py makemigrations
# python manage.py migrate

# exec "$@"

#!/bin/sh

echo "🚀 Starting entrypoint script..."

if [ "$DATABASE" = "postgres" ]
then
    echo "⏳ Waiting 2 seconds for Docker network..."
    sleep 2

    echo "⏳ Waiting for PostgreSQL to start on $SQL_HOST:$SQL_PORT..."
    until nc -z $SQL_HOST $SQL_PORT; do
      echo "❗ Database not ready, waiting..."
      sleep 1
    done

    echo "✅ PostgreSQL started successfully!"
fi

python manage.py makemigrations --noinput
python manage.py migrate --noinput

exec "$@"
