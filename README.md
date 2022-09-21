# Leaflet demo

Une démonstration d'intégration de données ponctuelles GeoJSON dans une carte [Leaflet](https://github.com/Leaflet/Leaflet) en utilisant le plugin [Marker Cluster](https://github.com/Leaflet/Leaflet.markercluster)

# Les fichiers
## index.html
Ce fichier charge les CSS et les JS nécessaires. 

Il contient uniqueent un `<div>` qui contient la carte et appelle `drawMap()`, la fonction principale du fichier `scdript.js`. 

## style.css
C'est la feuille de style qui définit la taille du `<div>`.

## script.js
la fonction `drawMap()` charge le fichier GeoJSON et affiche les points dans la carte leaflet.

## leaflet_demo.geojson
Ce fichier GeoJSON contient une `FeatureCollection` qui est une liste de `Feature`.

Chaque `Feature` est un point avec :
- ses coordonnées (dans une `geometry` de type `Point`)
- ses propriétés notament:
  - labelContent qui est affiché lors du survol de la souris et 
  - popupContent qui est affiché lors du click sur l'objet.
