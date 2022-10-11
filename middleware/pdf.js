const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream')

module.exports = {
    generatePdf: function() {
        const doc = new PDFDocument();

        const stream = doc.pipe(blobStream())

        doc
        .fontSize(25)
        .text('Test PDF', 100, 100);

        doc.end();

        let blob;

        function download() {
            if (!blob) return;
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'test.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
        }

        stream.on("finish", function() {
        // get a blob you can do whatever you like with
        blob = stream.toBlob("application/pdf");

        // or get a blob URL for display in the browser
        const url = stream.toBlobURL("application/pdf");
        const iframe = document.querySelector("iframe");
        iframe.src = url;
        })
    }
}