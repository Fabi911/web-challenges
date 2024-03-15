# Backend Read: Products

In this challenge (and the upcoming ones), you'll create a fish shop.
You'll read data from your remote MongoDB using `mongoose` and display it in the frontend.

## Task

### Introduction

Run `npm run dev` and open [localhost:3000](http://localhost:3000) on your browser.

Have a look around:

- there is an overview page with all products and a details page for each of them;
- the data is taken from `lib/products.js`.

Your task is to refactor the app so that it fetches the data from a remote MongoDB.

### Read Products from Database

Use MongoDB Atlas to create a database:

- the database should be called `fish-shop`,
- there should be one collection called `products`,
- download and extract the [resources](README.md#resources) and
- use the `products.json` file to import the data into your `products` collection.
- Note: you can use MongoDB Atlas to import the data by clicking on the `Insert Document` button, changing to the view `{}` and copy-pasting the data from the `products.json` file.

Create a schema for the `Product` model in the `db/models` folder.

The schema should have the following fields:

- `name` (String)
- `description` (String)
- `price` (Number)
- `currency` (String)

At the root of the project, create a `.env.local` file which uses the `MONGODB_URI` environment variable and your MongoDB connection string.

- Copy and paste the following into the `.env.local` file: `MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-name>/fish-shop?retryWrites=true&w=majority`.
- Replace `<user>` with your database username, `<password>` with your password and `<cluster-name>` with the name of your cluster. You can find all of this information on the MongoDB Atlas website.

Switch to `pages/api/products/index.js`:

- Delete the import of `lib/products`.
- Import `dbConnect` from the `db/connect.js` file.
- Import the `Product` model.
- Make the `handler` function `async` and `await` the connection to the database.
- If the `request.method` is `GET`,

  - use the `Product` model to find all products and
  - return them as a response.

Switch to `components/ProductList` and adapt the frontend:

- replace all instances of `product.id` with `product._id`.

Check that it works:

- Reload `localhost:3000`; you should still see all fishes.

Switch to `pages/api/products/[id].js` and adapt it as explained above:

- To find a single product by its id, you can use the `Product` model and the `.findById()` method: `Product.findById(id)`.
- Delete `lib/products.js` because it is not used anymore.

Open the browser and check the details pages: they should now work as well!

### Bonus: Populate Reviews

Some of the products already have reviews which are stored in a second collection. Your task is to read from that collection and display the reviews on the right details page.

Open MongoDB Atlas and adapt your `fish-shop` database:

- Add a new collection called `reviews`; insert the data from `bonus-reviews.json`.
- Drop the `products` collection; recreate it with the same name, but now insert data from the `bonus-products.json` file.
  - Note: The data in `bonus-products.json` contain a `reviews` array with `ids` as a reference to the corresponding review in the `review` collection.

Create a schema for the `Review` model in the `db/models` folder.

The schema should have the following fields:

- `title` (String)
- `text` (String)
- `rating` (Number)

Update the `Product` schema to include a reference to the `Review` model:

- Import the `Review` model with `import "./Review";`
- Below the `currency` key, add a new line for the reviews; you want to define that it is an array of Object-Ids and has a reference to the `Review` schema like so: `reviews: { type: [Schema.Types.ObjectId], ref: "Review" },`

Switch to `pages/api/products/[id].js` and use the `.populate` method to integrate the reviews for each product:

- `const product = await Product.findById(id).populate("reviews");`

Finally, update the frontend to display the reviews:

- Switch to `components/Product/index.js`.
- Inside of the return statement, check whether the fetched `data` contain any reviews and if so, display them.
- Feel free to decide which part of the review data you want to display.

### Resources

You can find the fish shop data in [this folder](./resources/).

- The files are already in the correct structure for the app.
  - `products.json` contains the data for the first task, and
  - `bonus-products.json` and `bonus-reviews.json` contain the data for the bonus task.
- Import them into the correct collection of your remote MongoDB when you are asked to.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run dev` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter

Natürlich, hier ist eine Übersetzung:

### Produkte aus der Datenbank lesen

1. **Erstellen einer MongoDB Atlas-Datenbank**:

   - Name: `fish-shop`
   - Sammlung: `products`
   - Importieren Sie Daten aus `products.json` in die `products`-Sammlung.

2. **Schema für Produktmodell erstellen**:

   - Erstellen Sie im Ordner `db/models` ein Schema für das Produktmodell mit den Feldern:
     - `name` (String)
     - `description` (String)
     - `price` (Number)
     - `currency` (String)

3. **Einrichten von Umgebungsvariablen**:
   - Erstellen Sie eine Datei `.env.local` im Stammverzeichnis des Projekts.
   - Fügen Sie `MONGODB_URI` mit Ihrem MongoDB-Verbindungszeichenfolge hinzu.

### Produkte in der API-Route abrufen

4. **API-Route aktualisieren**:
   - Wechseln Sie zu `pages/api/products/index.js`.
   - Importieren Sie `dbConnect` aus `db/connect.js`.
   - Importieren Sie das Produktmodell.
   - Machen Sie die Handler-Funktion `async` und warten Sie auf die Datenbankverbindung.
   - Verwenden Sie das Produktmodell, um alle Produkte zu finden und sie als Antwort zurückzugeben.

### Produkte auf der Frontend-Anzeige

5. **Produktliste-Komponente aktualisieren**:
   - Ersetzen Sie Instanzen von `product.id` durch `product._id`.

### Einzelnes Produkt in der API-Route abrufen

6. **Einzelne Produkt-API-Route aktualisieren**:

   - Wechseln Sie zu `pages/api/products/[id].js`.
   - Passen Sie an, um ein einzelnes Produkt anhand seiner ID mit der Methode `findById()` des Produktmodells abzurufen.

7. **Unbenutzte Datei löschen**:
   - Löschen Sie `lib/products.js`.

### Überprüfen und Testen

8. **Testen der App**:
   - Laden Sie `localhost:3000` neu, um sicherzustellen, dass alle Fische weiterhin sichtbar sind.
   - Überprüfen Sie die Detailseiten, um zu bestätigen, dass sie wie erwartet funktionieren.

### Bonus: Bewertungen einfügen

9. **Reviews-Sammlung erstellen**:

   - Fügen Sie eine neue Sammlung mit dem Namen `reviews` hinzu.
   - Importieren Sie Daten aus `bonus-reviews.json` in die `reviews`-Sammlung.
   - Löschen Sie die `products`-Sammlung.
   - Erstellen Sie die `products`-Sammlung neu und importieren Sie Daten aus `bonus-products.json`.

10. **Schema für Review-Modell erstellen**:

    - Erstellen Sie im Ordner `db/models` ein Schema für das Review-Modell mit den Feldern:
      - `title` (String)
      - `text` (String)
      - `rating` (Number)

11. **Produkt-Schema aktualisieren**:

    - Importieren Sie das `Review`-Modell.
    - Fügen Sie dem `Product`-Schema ein `reviews`-Feld hinzu, um auf das `Review`-Modell zu verweisen.

12. **Bewertungen in der API-Route einfügen**:

    - Aktualisieren Sie die Produkt-API-Route, um die Methode `.populate()` zu verwenden, um Bewertungen für jedes Produkt einzubinden.

13. **Bewertungen auf der Frontend-Anzeige anzeigen**:
    - Aktualisieren Sie die Produktkomponente, um Bewertungen anzuzeigen, die aus der API abgerufen wurden.

### Ressourcen

- Sie finden die Datendateien in der bereitgestellten Ordnerstruktur:
  - `products.json` für die Hauptaufgabe.
  - `bonus-products.json` und `bonus-reviews.json` für die Bonusaufgabe.

Folgen Sie diesen Schritten, und wenn Sie unterwegs auf Probleme stoßen oder Fragen haben, fragen Sie gerne nach!
