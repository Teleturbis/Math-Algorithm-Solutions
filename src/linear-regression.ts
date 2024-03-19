import { exec } from 'child_process';
import { writeFileSync } from 'fs';

export function linearRegression(x: number[], y: number[]): number[] {
  const n = x.length;
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumX2 = 0;

  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumX2 += x[i] * x[i];
  }

  const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const b = (sumY - a * sumX) / n;

  // create html-file and display the linear regression as an simple graph
  const html = `<!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    </head>
    <body>
      <div id="myDiv"></div>
      <script>
        var x = [${x.toString()}];
        var y = [${y.toString()}];
        var a = ${a};
        var b = ${b};
        var yCalc = [];
        for (var i = 0; i < x.length; i++) {
          yCalc.push(a * x[i] + b);
        }
        var trace1 = {
          x: x,
          y: y,
          mode: 'markers',
          type: 'scatter'
        };
        var trace2 = {
          x: x,
          y: yCalc,
          mode: 'lines',
          type: 'scatter'
        };
        var data = [trace1, trace2];
        var layout = {
            showlegend: false,
            xaxis: {
                title: {
                  text: 'x Axis',
                }
              },
              yaxis: {
                title: {
                  text: 'y Axis',
                }
              }
        };
        Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});
      </script>
    </body>
    </html>`;

  writeFileSync('preview.html', html);

  exec('start preview.html', (error, stdout, stderr) => {
    if (error) {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      console.error('Fehler beim Öffnen der HTML-Datei: ' + error);
      return;
    }
    console.log('HTML-Datei erfolgreich im Browser geöffnet.');
  });

  return [a, b];
}
