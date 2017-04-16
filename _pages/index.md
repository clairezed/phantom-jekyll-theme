---
layout: default
title: Parrainages 2017
permalink: /
---

<header>
  <h1>Parrainages présidentelle 2017 : <br> à la recherche de la spécificité vosgienne</h1>
  <p>Travail de statistique comparative rapide de l'attribution des parrainages en France et dans les Vosges.<br>
    Y'a-t-il une spécificité de mon département par rapport au national ?</p>
</header>

<h2>Test</h2>

<div id="highCharts" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

<h2>Parrainages au 10 mars</h2>

<p><i>Comparaison en pourcentage.</i></p>

<canvas id="chart0310" width="1200" height="700"></canvas>

<p><b>Commentaires :</b></p>

<ul>
  <li>
    Dupont-Aignan rétrécie son écart avec Fillon, avec un soutien proprement spectaculaire des Vosgiens. Trois fois plus de parrainages Dupont-Aignan dans les Vosges qu'ailleurs en France. Mais pourquoi ??
  </li>
  <li>
    Pour continuer dans les gros écarts positif par rapport au national : 2 fois plus pour Cheminade, 3 fois plus pour Rama Yade... (mais aussi 4 fois plus pour Alexandre Jardin, même si les chiffres sont bien plus réduits). Ca fait presque relativiser le score vosgien supérieur de Marine Lepen.
  </li>
  <li>
      Dans les différentiels négatifs : l'écart le plus spectaculaire est... 8 fois moins de parrainages pour Hamon. De la à en déduire une coloration politique générale dans le département, non, je n'oserai pas.
  </li>
</ul>

<h2>Parrainages au 7 mars</h2>

<p><i>Comparaison en pourcentage.</i></p>

<canvas id="chart0307" width="1200" height="700"></canvas>

<p><b>Commentaires :</b></p>

<ul>
  <li>
    Finalement, Fillon rattrape Dupont-Aignan,
  </li>
  <li>
    Le Pen fait une très belle entrée,
  </li>
  <li>
      Toujours rien pour Charlotte Marchandise.
  </li>
</ul>


<h2>Parrainages au 3 mars</h2>

<p><i>Comparaison en pourcentage.</i></p>

<canvas id="myChart" width="1200" height="700"></canvas>

<p><b>Commentaires :</b></p>

<ul>
  <li>
    Dans les Vosges, ça soutient moins Mélenchon, Hamon ou Macron qu'au national.
  </li>
  <li>
    Par contre, ça y soutient plus Pierre Larrouturou ou Alexandre Jardin.
  </li>
  <li>
    Mais surtout, ce que je retiens, ce sont les excellents scores de Rama Yade, ou, plus impressionant encore, <b>Cheminade</b> et <b>Dupont-Aignan</b>. Bon sang, Dupont-Aignan est au même niveau que Fillon... AU MEME NIVEAU.
  </li>
</ul>

Source :
<a href="https://presidentielle2017.conseil-constitutionnel.fr/les-parrainages/tous-les-parrainages/">
  presidentielle2017.conseil-constitutionnel.fr/
</a>


<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/parrainages-2017.js"></script>
