(function($) {

  Chart.defaults.global.maintainAspectRatio = false;
  Chart.defaults.global.responsive = false;

  var ctx = document.getElementById("myChart").getContext("2d");
  var dataArray = []
  var dataHash = {}
  var franceTotal = 0
  var vosgesTotal = 0

    $.get( "stats/20170302.json", function( data ) {
      _.forEach(data, function(item){
        nomCandidat = item['Candidat-e parrainé-e'];
        franceCount = item['Parrainages'].length

        vosgesParrainages = _.filter(item['Parrainages'], function(o) {
          return o.Département == 'Vosges';
        });
        vosgesCount = vosgesParrainages.length

        franceTotal += franceCount
        vosgesTotal += vosgesCount

        dataArray.push(
          {candidat: nomCandidat,
          count: [
            {franceCount: franceCount},
            {vosgesCount: vosgesCount}
          ]}
        )

        dataHash[nomCandidat]={}
        dataHash[nomCandidat]['franceCount']=franceCount
        dataHash[nomCandidat]['vosgesCount']=vosgesCount


      })

      console.log(dataHash);

      var candidateNames = Object.keys(dataHash)
      var vosgesPercentage = _.map(dataHash, function(count, cand) {
          if (count.vosgesCount == 0) {
            return 0
          } else {
            var unrounded = count.vosgesCount / vosgesTotal * 100;
            return Math.round(unrounded * 100) / 100
          }
        });
        console.log(vosgesPercentage);

        var francePercentage = _.map(dataHash, function(count, cand) {
            if (count.franceCount == 0) {
              return 0
            } else {
              var unrounded = count.franceCount / franceTotal * 100;
              return Math.round(unrounded * 100) / 100
            }
          });
          console.log(francePercentage);

        // verif = _.reduce(vosgesPercentage, function(sum, n) {
        //   return sum + n;
        // }, 0);
        // console.log("verif");
        // console.log(verif);


      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              // labels: ["Yo", "Truc", "MAM"],
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
          // options: {
          //     scales: {
          //         yAxes: [{
          //             ticks: {
          //                 beginAtZero:true
          //             }
          //         }]
          //     }
          // }
      });




    });




})(jQuery);
