Notiz Anwendung Docker<br><br>

Die Anwendung besteht aus:<br>

Frontend: Ein React-Interface, das eine einfache Benutzeroberfläche zum Hinzufügen und Anzeigen von Notizen bietet.<br>
Backend: Ein Express-Server, der die Notizen verarbeitet und als API-Backend für das Frontend dient.<br>
MongoDB: Zum Speichern der Notizen-Daten.<br>
Redis: Für das Caching von Daten, um die Backend-Anfragen effizienter zu gestalten.<br><br>

Installation:<br>

Repository klonen:<br>
git clone https://github.com/kraxnerh/notiz-app.git und cd notiz-app <br><br>
Docker-Images bauen und starten: <br>
docker-compose up -d<br><br>


Frontend aufrufen: http://localhost:3000<br>
API-Tests für das Backend: http://localhost:5000/api/notes
