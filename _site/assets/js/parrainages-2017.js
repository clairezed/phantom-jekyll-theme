// PARRAINAGES POURCENTAGES ====================================================

Highcharts.chart('parrain2017percentage', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Parrainages présidentielle 2017'
    },
    subtitle: {
        text: 'Les Vosges vs la France'
    },
    xAxis: {
        categories: [
            'Arthaud',
            'Asselineau',
            'Cheminade',
            'Dupont-Aignan',
            'Fillon',
            'Hamon',
            'Jardin',
            'Juppé',
            'Lassalle',
            'Lepen',
            'Macron',
            'Marchandise',
            'Mélenchon',
            'Poutou',
            'Temaru',
            'Yade'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Parrainages (%)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:12px, font-weight:bold"><b>{point.key}</b></span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0"><b>{series.name}: </b></td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b> ({point.count} p.)</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'France',
        color: '#AB4967',
        // data: [4.63, 4.27, 3.84, 5.14, 26.44, 14.83, 1.20, 2.28, 5.15, 4.56, 13.30, 0.98, 5.85, 4.17, 0.79, 2.57],
        data: [
          {
            y: 4.63,  name: 'Arthaud',  count: 637
          },
          {
            y: 4.27,  name: 'Asselineau', count: 587
          },
          {
            y: 3.84,  name: 'Cheminade', count: 528
          },
          {
            y: 5.14,  name: 'Dupont-Aignan', count: 707
          },
          {
            y: 26.44, name: 'Fillon', count: 3635
          },
          {
            y: 14.83, name: 'Hamon', count: 2039
          },
          {
            y: 1.20, name: 'Jardin', count: 165
          },
          {
            y: 2.28, name: 'Juppé', count: 313
          },
          {
            y: 5.15, name: 'Lassalle', count: 708
          },
          {
            y: 4.56, name: 'Le Pen', count: 627
          },
          {
            y: 13.30, name: 'Macron', count: 1829
          },
          {
            y: 0.98, name: 'Marchandise', count: 135
          },
          {
            y: 5.85, name: 'Mélenchon', count: 805
          },
          {
            y: 4.17, name: 'Poutou', count: 573
          },
          {
            y: 0.79, name: 'Temaru', count: 109
          },
          {
            y: 2.57, name: 'Rade', count: 353
          },
        ]
      }, {
        name: 'Vosges',
        color:"#43AA8B",
        data: [
          {
            y: 4.17,  name: 'Arthaud',  count: 6
          },
          {
            y: 0.69,  name: 'Asselineau', count: 1
          },
          {
            y: 11.11,  name: 'Cheminade',  count: 16
          },
          {
            y: 15.97,  name: 'Dupont-Aignan',  count: 23
          },
          {
            y: 29.86,  name: 'Fillon', count: 43
          },
          {
            y: 1.39,  name: 'Hamon',  count: 2
          },
          {
            y: 4.86,  name: 'Jardin', count: 7
          },
          {
            y: 0.69,  name: 'Juppé',  count: 1
          },
          {
            y: 3.47,  name: 'Lassalle', count: 5
          },
          {
            y: 6.94,  name: 'Le Pen', count: 10
          },
          {
            y: 10.42,  name: 'Macron', count: 15
          },
          {
            y: 0.00,  name: 'Marchandise',  count: 0
          },
          {
            y: 2.08,  name: 'Mélenchon',  count: 3
          },
          {
            y: 3.47,  name: 'Poutou', count: 5
          },
          {
            y: 0.00,  name: 'Temaru', count: 0
          },
          {
            y: 4.86,  name: 'Rade', count: 7
          },
        ]
    }]
});

// PARRAINAGES DIFFRENTIEL ====================================================


Highcharts.chart('parrain2017diff', {
    chart: {
        type: 'column'
    },
    legend:
      {enabled: false},
    title: {
        text: 'Différentiel dans les pourcentages de parrainage'
    },
    xAxis: {
        categories: [
            'Arthaud',
            'Asselineau',
            'Cheminade',
            'Dupont-Aignan',
            'Fillon',
            'Hamon',
            'Jardin',
            'Juppé',
            'Lassalle',
            'Lepen',
            'Macron',
            'Mélenchon',
            'Poutou',
            'Yade'
        ]
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Différentiel',
        data: [
          {
            y: -1.11,  name: 'Arthaud',  color:'tomato'
          },
          {
            y: -6.15,  name: 'Asselineau', color:'tomato'
          },
          {
            y: 2.89,  name: 'Cheminade',  color:'palegreen'
          },
          {
            y: 3.11,  name: 'Dupont-Aignan',  color:'palegreen'
          },
          {
            y: 1.13,  name: 'Fillon', color:'palegreen'
          },
          {
            y: -10.68,  name: 'Hamon',  color:'tomato'
          },
          {
            y: 4.05,  name: 'Jardin', color:'palegreen'
          },
          {
            y: -3.28,  name: 'Juppé',  color:'tomato'
          },
          {
            y: -1.48,  name: 'Lassalle', color:'tomato'
          },
          {
            y: 1.52,  name: 'Le Pen', color:'palegreen'
          },
          {
            y: -1.28,  name: 'Macron', color:'tomato'
          },
          {
            y: -2.81,  name: 'Mélenchon',  color:'tomato'
          },
          {
            y: -1.20,  name: 'Poutou', color:'tomato'
          },
          {
            y: 1.89,  name: 'Rade', color:'palegreen'
          },
        ]
    }]
});


// TABLEAU =====================================================================

(function($) {

  function parseResult(result) {
    var resultArray = [];
    result.split("\n").forEach(function(row) {
        var rowArray = [];
        row.split(",").forEach(function(cell) {
            rowArray.push(cell);
        });
        resultArray.push(rowArray);
    });
    return resultArray;
  }

  function santizeArray(array) {
    // remove empty row
    _.remove(array, function(row) {
      return row == "";
    })
    // remove lat, long, departement
    return _.each(array, function(row) {
      return _.remove(row, function(cell, idx) {
        return (idx == 6 || idx == 7 || idx == 5)
      })
    })
    // console.table(array)
  }


  function createTable(tableData) {
    var table = document.createElement('table');
    table.setAttribute("id", "parrain-table");
    var tableBody = document.createElement('tbody');
    tableData.forEach(function(rowData, idx) {
      // thead ---------------------------------
      if (idx == 0) {
        var thead = document.createElement('thead')
        var row = document.createElement('tr');
        rowData.forEach(function(cellData, idx) {
          var cell = document.createElement('th');
          cell.appendChild(document.createTextNode(cellData));
          row.appendChild(cell);
        });
        thead.appendChild(row)
        table.appendChild(thead)


      } else {
        var row = document.createElement('tr');
        // tbody ------------------------------------
        rowData.forEach(function(cellData, idx) {
          var cell = document.createElement('td');
          cell.appendChild(document.createTextNode(cellData));
          row.appendChild(cell);
        });

        tableBody.appendChild(row);
      }


    });

    table.appendChild(tableBody);
    return table;
  }



  // Entry Point ---------------------------------------------------------------
  $.get( "stats/parrainages-vosges.csv" , function( lines ) {
    var array = parseResult(lines)
    var sanitizedArray = santizeArray(array)
    // console.table(array)
    var finalTable = createTable(array)
    console.log(finalTable);
    $("#parrain-table-wrapper").append(finalTable)
    $("#parrain-table").DataTable( {
      "language": {
            "lengthMenu": "Voir _MENU_ lignes par page",
            "zeroRecords": "bin non, rien en stock, désolée",
            "info": "Voici la page _PAGE_ sur _PAGES_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)",
            "search": "Rechercher",
            "paginate": {
              "first":      "Premier",
              "last":       "Dernier",
              "next":       "Suivant",
              "previous":   "Précédent"
          },
        }
    } )

  });




})(jQuery);
