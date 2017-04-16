Highcharts.chart('highCharts', {
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
        data: [{
          y: 4.63,
          name: 'Arthaud',
          count: 637
        },
        {
          y: 4.27,
          name: 'Asselineau',
          count: 587
        },
        {
          y: 3.84,
          name: 'Cheminade',
          count: 528
        },
        {
          y: 5.14,
          name: 'Dupont-Aignan',
          count: 707
        },
        {
          y: 26.44,
          name: 'Fillon',
          count: 3635
        },
        {
          y: 14.83,
          name: 'Hamon',
          count: 2039
        },
        {
          y: 1.20,
          name: 'Jardin',
          count: 165
        },
        {
          y: 2.28,
          name: 'Juppé',
          count: 313
        },
        {
          y: 5.15,
          name: 'Lassalle',
          count: 708
        },
        {
          y: 4.56,
          name: 'Le Pen',
          count: 627
        },
        {
          y: 13.30,
          name: 'Macron',
          count: 1829
        },
        {
          y: 0.98,
          name: 'Marchandise',
          count: 135
        },
        {
          y: 5.85,
          name: 'Mélenchon',
          count: 805
        },
        {
          y: 4.17,
          name: 'Poutou',
          count: 573
        },
        {
          y: 0.79,
          name: 'Temaru',
          count: 109
        },
        {
          y: 2.57,
          name: 'Rade',
          count: 353
        },
      ],
        count: [637, 587, 528, 707, 3635, 2039, 165, 313, 708, 627, 1829, 135, 805, 573, 109, 353]

    }, {
        name: 'Vosges',
        color:"#43AA8B",
        data: [
          {
            y: 4.17,
            name: 'Arthaud',
            count: 6
          },
          {
            y: 0.69,
            name: 'Asselineau',
            count: 1
          },
          {
            y: 11.11,
            name: 'Cheminade',
            count: 16
          },
          {
            y: 15.97,
            name: 'Dupont-Aignan',
            count: 23
          },
          {
            y: 29.86,
            name: 'Fillon',
            count: 43
          },
          {
            y: 1.39,
            name: 'Hamon',
            count: 2
          },
          {
            y: 4.86,
            name: 'Jardin',
            count: 7
          },
          {
            y: 0.69,
            name: 'Juppé',
            count: 1
          },
          {
            y: 3.47,
            name: 'Lassalle',
            count: 5
          },
          {
            y: 6.94,
            name: 'Le Pen',
            count: 10
          },
          {
            y: 10.42,
            name: 'Macron',
            count: 15
          },
          {
            y: 0.00,
            name: 'Marchandise',
            count: 0
          },
          {
            y: 2.08,
            name: 'Mélenchon',
            count: 3
          },
          {
            y: 3.47,
            name: 'Poutou',
            count: 5
          },
          {
            y: 0.00,
            name: 'Temaru',
            count: 0
          },
          {
            y: 4.86,
            name: 'Rade',
            count: 7
          },
        ],
        // data: [4.17, 0.69, 11.11, 15.97, 29.86, 1.39, 4.86, 0.69, 3.47, 6.94, 10.42, 0.00, 2.08, 3.47, 0.00, 4.86],
        count: [6, 1, 16, 23, 43, 2, 7, 1, 5, 10, 15, 0, 3, 5, 0, 7]

    // }, {
    //     name: 'London',
    //     data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    //
    // }, {
    //     name: 'Berlin',
    //     data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
});
