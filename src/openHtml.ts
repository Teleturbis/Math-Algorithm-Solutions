import { exec } from 'child_process';

exec('start preview.html', (error, stdout, stderr) => {
  if (error) {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    console.error('Fehler beim Öffnen der HTML-Datei: ' + error);
    return;
  }
  console.log('HTML-Datei erfolgreich im Browser geöffnet.');
});
