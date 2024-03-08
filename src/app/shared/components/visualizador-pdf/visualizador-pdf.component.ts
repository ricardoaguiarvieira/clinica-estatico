import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-visualizador-pdf',
  templateUrl: './visualizador-pdf.component.html',
  styleUrls: ['./visualizador-pdf.component.scss'],
})
export class VisualizadorPdfComponent implements OnInit {
  @ViewChild('pdfFrame')
  pdfFrame: ElementRef | undefined;

  pdf: SafeResourceUrl | undefined;
  innerWidth: number | undefined;

  @Input()
  eventoImpressao: Subject<void> | undefined;
  sucessoDownload: boolean | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if(this.eventoImpressao){
      this.eventoImpressao.subscribe({
        next: () => {
          this.imprimirPDF();
        },
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(Event) {
    this.innerWidth = window.innerWidth;
  }

  imprimirPDF(): void {
    const iframe: HTMLIFrameElement = <HTMLIFrameElement>(
      this.pdfFrame.nativeElement
    );
    iframe.contentWindow?.focus();
    iframe.contentWindow?.print();
  }

  @Input() set base64Pdf(base64Pdf: string) {
    if (base64Pdf) {
      if (innerWidth > 993) {
        const contentType = 'application/pdf';
        const blob = this.b64toBlob(base64Pdf, contentType);
        const blobUrl = URL.createObjectURL(blob);

        this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
      } else if (innerWidth < 992) {

        const linkSource = `data:application/pdf;base64,${base64Pdf}`;
        const downloadLink = document.createElement('a');
        const fileName = 'DOC_DETRAN_DF.pdf';
        downloadLink.href = linkSource;
        //downloadLink.target = '_blank';
        downloadLink.download = fileName;
        downloadLink.click();
        this.sucessoDownload = true;
      }
    }
  }

  b64toBlob(b64Data: string, contentType = '', sliceSize = 512): Blob {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize),
        byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}
