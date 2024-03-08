import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataInvoice } from 'src/app/shared/model/transferencia-eletronica/data.invoice';
import { logoImageBase64 } from './logo-base64.util';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}
  imagemCodigoBarras: SafeResourceUrl;

  @Input() dataInvoice: DataInvoice;

  logoImageBase64: SafeResourceUrl;

  ngOnInit(): void {
    this.imagemCodigoBarras = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.dataInvoice.codigoBarraImg64
    );
    this.logoImageBase64 =
      this.sanitizer.bypassSecurityTrustResourceUrl(logoImageBase64);
  }

  public converterFloat(valor: any) {
    const valorRetorno = parseFloat(valor);

    return valorRetorno;
  }

  formatDate(data: string): string {
    if (data && data.length < 10) {
      const all = data
      const y = all.slice(0,4)
      const m = all.slice(4,6)
      const d = all.slice(6,8)
      return `${d}/${m}/${y}`
    }
    return data;
  }

  formatPlaca(placa: string): string {
    if(!placa) return placa;
    return placa.slice(0, 3) + '-' + placa.slice(3);
  }

  public onPrint(): void {
    window.print();
  }

  
}
