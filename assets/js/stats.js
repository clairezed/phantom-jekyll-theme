(function($) {

  Chart.defaults.global.maintainAspectRatio = false;
  Chart.defaults.global.responsive = false;

  var parrainageStats = [
    {chartId: "myChart", file:  "stats/20170302.json"},
    {chartId: "chart0307", file:  "stats/20170307.json"}
  ]
  var dataHash = {}
  var franceTotal = 0
  var vosgesTotal = 0

  var createStats = function(nodeId, file) {
    var chartNode = document.getElementById(nodeId).getContext("2d");

    $.get( file , function( stats ) {
      _.forEach(stats, function(item){
        populateDataHash(item, dataHash, franceTotal, vosgesTotal);
      })

      var candidateNames = Object.keys(dataHash);
      var vosgesPercentage = calculatePercentage('vosgesCount', vosgesTotal);
      var francePercentage = calculatePercentage('franceCount', franceTotal);

      var myChart = buildChart(chartNode, candidateNames, vosgesPercentage, francePercentage)
    });
  };

  _.forEach(parrainageStats, function(item){
    console.log(item.chartId);
    createStats(item.chartId, item.file);
  })


  var populateDataHash = function(item) {
    nomCandidat = item['Candidat-e parrainé-e'];
    franceCount = item['Parrainages'].length

    vosgesParrainages = _.filter(item['Parrainages'], function(o) {
      return o.Département == 'Vosges';
    });
    vosgesCount = vosgesParrainages.length
    franceTotal += franceCount
    vosgesTotal += vosgesCount

    dataHash[nomCandidat]={}
    dataHash[nomCandidat]['franceCount']=franceCount
    dataHash[nomCandidat]['vosgesCount']=vosgesCount
  }

  var calculatePercentage = function(countType, total) {
    return _.map(dataHash, function(count, cand) {
        if (count[countType] == 0) {
          return 0
        } else {
          var unrounded = count[countType] / total * 100;
          return Math.round(unrounded * 100) / 100
        }
      }
    );
  }

  var buildChart = function(chartNode, candidateNames, vosgesPercentage, francePercentage) {
    return new Chart(chartNode, {
        type: 'bar',
        data: {
            labels: candidateNames,
            datasets: [
              {
                label: 'Vosges',
                data: vosgesPercentage,
                backgroundColor:"#43AA8B"
            },
            {
              label: 'France',
              data: francePercentage,
              backgroundColor: '#AB4967'
          }
          ]
        },
    });
  }

})(jQuery);
