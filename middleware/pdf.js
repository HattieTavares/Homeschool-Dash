const PDFDocument = require('pdfkit');
const fs = require('fs');

module.exports = {
    generatePdf: function() {
        const doc = new PDFDocument();

        doc.pipe(fs.createWriteStream('grades.pdf'));

        doc
        .fontSize(25)
        .text('Test PDF', 100, 100);

        doc.end();
    }
}