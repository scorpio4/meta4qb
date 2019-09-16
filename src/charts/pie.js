import _ from "lodash";
import dc from "dc";
import Chart from "../chart";

export default function(qb) {

        return {
            title: "Pie",

            create: function(el, slice) {
                var chart = dc.pieChart(el, qb.id);
                slice = qb.chart._configure(chart, "pie", slice);
                console.log("Pie/Donut: ", chart, slice);

                chart.radius(slice.radius)
                    .innerRadius(slice.innerRadius)
                    .slicesCap(slice.slicesCap);

                if (slice.renderLegend) chart.legend(chart.legend || dc.legend())

                return chart;
            },
            defaults: {
                aspectRatio: 250/200,
                width: 250,
                height: 200,
                radius: 90,
                innerRadius: 0,
                slicesCap: 10,
                renderTitle: true,
                showControls: false,
                renderLabel: true,
                renderLegend: false
            }
        }
    };
