define(["underscore", "dc", "chart" ], function (_, dc, chart) {

    // chart type definition

    return function(qb) {

        return {
            title: "Donut Chart",

            create: function(el, slice) {
                var chart = dc.pieChart(el, qb.id);
                slice = qb.chart._configure(chart, "donut", slice);
                console.log("Donut: %o", slice);

                chart.radius(slice.radius)
                    .innerRadius(slice.innerRadius)
                    .slicesCap(slice.slicesCap);

                if (slice.renderLegend) {
                    chart.legend(chart.legend || dc.legend());
                }

                return chart;
            },

            defaults: {
                aspectRatio: 250/200,
                width: 250,
                height: 200,
                radius: 90,
                innerRadius: 20,
                slicesCap: 10,
                renderTitle: true,
                showControls: false,
                renderLabel: true,
                renderLegend: false
            }
        }
    }

});