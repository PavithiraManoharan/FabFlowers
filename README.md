# FabFlowers

Dieses Projekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3 entwickelt.

## Einleitung
FabFlowers ist ein Demo Shop für einen potenziellen Kunden der gerne ein E-Commerce Shop mit Angular erstellen möchte. Für diesen potenziellen Auftrag ist ein Demo vorgesehen das die Macht des Angular Frameworks durch eine Single-Page Anwendung darstellt.

## Features
Nachfolgend sind einige Features von diesem Demo Shop:
1. Angular Komponente - basierend auf Rule-of-One und Composition Modelle
2. Routing - Kommunikation zwischen Komponente mit HTML5 History API leicht gemacht
3. Services und Dependency Injection - Saubere Trennung zwischen Controller und Templates, Eine Klasse für mehrere Views
4. Komponente verschachteln durch Input und Output Dekoratoren
5. Form Validierung - mit Reaktive forms sind eine Menge Arbeit für die Validierung der Forms gespart
6. Semantic UI - Ein super leichtes UI Framework, ideal für ein Demo Shop

## Installation
So einfach geht die Installation dieser Anwendung:
1. Wechseln Sie (wenn nicht) im Projektordner FabFlowers
2. Für dieses Projekt ist JSON-Server benutzt. Installieren Sie JSON-Server global durch den Befehl:
``` npm install -g json-server ```
3. Jetzt installieren wir die Projekt-Abhängigkeiten via den Befehl:
``` npm install ```
4. Der JSON-Server muss gestartet werden, damit die Daten an unserer Anwendung gelifert werden. Das machen wir durch den Befehl:
``` json-server --watch .\src\data\db.json ```
5. In einem neuen Terminal kompilieren wir die Anwendung mit Angular CLI:
``` ng serve ``` 
6. Das war's! Jetzt läuft die Anwendung im Browser unter http://localhost:4200

## Credits

Ich bin dankbar für alle Webseiten, Tutorials und externe APIs die in diesem Projekt benutzt wurden. Ich nenne alle Ressourcen die für den erfolgreiche Abschluss dieses Projekts verwendet wurden:

1.  [Semantic UI ](https://semantic-ui.com/)- für die schnellstmögliche HTML und CSS Layouts und Styling
2.  [Mockaroo API ](https://mockaroo.com/)- für die realistische Mitarbeiterdaten
3.  [Robohash API ](https://robohash.org/)- für die coole Avatars unserer Mitarbeitern
4.  [News API ](https://newsapi.org/)- für die aktuelle Nachrichten als JSON Response
5.  [Creative Commons ](https://search.creativecommons.org/)- für die wunderbare Suche nach wiederverwendbaren Bildern
6.  [MusterVorlagen ](https://www.muster-vorlagen.net/impressum/)- Für den Inhalt des Impressums
7.  [Swiper API ](https://idangero.us/swiper/api/)- für die Image-Sliders
8.  [BookMonkey Beispiel ](https://github.com/angular-buch/book-monkey2)- für das Beispiel wo wir eine CRUD Anwendung Schritt für Schritt entwickelt haben
9.  [Flower Ipsum ](https://scoopy68.wordpress.com/2016/05/24/flower-ipsum/)- für den Dummy Text Lorem Ipsum aber mit Blumen
10.  [Open Cage Bildgalerie](http://opencage.info/pics/keyword_534.asp) - für die schöne Orchid Blumenbilder

