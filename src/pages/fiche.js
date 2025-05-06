 <script>
    document.getElementById('openPdfLink').addEventListener('click', function(event) {
      event.preventDefault();
      // Remplacez 'votre-fichier.pdf' par le chemin de votre fichier PDF
      window.open('/path/to/votre-fichier.pdf', '_blank');
    });
  </script>