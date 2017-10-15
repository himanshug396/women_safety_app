# SheSafe Backend #

1. Install python3 on your machine.
2. cd backend
2. Setup virtual environment using  "virtualenv -p /usr/bin/python3 venv" in the backend folder.
3. Activate virtual environment using "source venv/bin/activate".
4. Run "pip install -r requirements.txt".
5. cd Shesafe
6. Make migrations : 'python manage.py makemigrations'
7. Migrate : 'python manage.py migrate'
8. SyncDb : 'python manage.py migrate --run-syncdb'
9. StartServer : 'python manage.py runserver 0.0.0.0:8000'
