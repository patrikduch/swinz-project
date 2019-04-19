import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html: any) => {

    savePDF(html, { 
      pageTemplate: 'auto',
      paperSize: 'auto',
      fileName: 'form.pdf',
      margin: 3,
      
      
    })
  }
}

const Doc = new DocService();
export default Doc;