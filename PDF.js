
  var url = 'path/to/your/document.pdf';
  var pdfjsLib = window['pdfjs-dist/build/pdf'];
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
  var loadingTask = pdfjsLib.getDocument(url);
  loadingTask.promise.then(function(pdf) {
    console.log('PDF loaded');
    pdf.getPage(1).then(function(page) {
      console.log('Page loaded');
      var scale = 1.5;
      var viewport = page.getViewport({ scale: scale });
      var canvas = document.getElementById('pdf-viewer');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    });
  });
</script>
