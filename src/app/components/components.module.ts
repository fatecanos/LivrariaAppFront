import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivHeaderComponent } from './liv-header/liv-header.component';
import { LivFooterComponent } from './liv-footer/liv-footer.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { LivEnderecoFormComponent } from './liv-endereco-form/liv-endereco-form.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InativarClienteDialogComponent } from './dialogs/inativar-cliente-dialog/inativar-cliente-dialog.component';
import { EnderecoSubmitterComponent } from './dialogs/endereco-submitter/endereco-submitter.component';
import { LivCartoesFormComponent } from './liv-cartoes-form/liv-cartoes-form.component';
import { DetalhesPedidoComponent } from './dialogs/detalhes-pedido/detalhes-pedido.component';
import { InativarLivroDialogComponent } from './dialogs/inativar-livro-dialog/inativar-livro-dialog.component';
import { DetalhesLivroComponent } from './dialogs/detalhes-livro/detalhes-livro.component';
import { CurrencyPipe } from '../custom-pipes/formatter.pipe';
import { LivTelefonesManagementComponent } from './liv-telefones-management/liv-telefones-management.component';
import { InativarTelefoneDialogComponent } from './dialogs/inativar-telefone-dialog/inativar-telefone-dialog.component';
import { InativarCartaoDialogComponent } from './dialogs/inativar-cartao-dialog/inativar-cartao-dialog.component';
import { InativarEnderecoDialogComponent } from './dialogs/inativar-endereco-dialog/inativar-endereco-dialog.component';
import { NovoEnderecoFormComponent } from './novo-endereco-form/novo-endereco-form.component';
import { DetalhesPedidoAdminComponent } from './dialogs/detalhes-pedido-admin/detalhes-pedido-admin.component';
import { LivFaturamentoChartComponent } from './liv-faturamento-chart/liv-faturamento-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { LivGeneroChartComponent } from './liv-genero-chart/liv-genero-chart.component';
import { LivRankChartComponent } from './liv-rank-chart/liv-rank-chart.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    LivHeaderComponent,
    LivFooterComponent,
    LivEnderecoFormComponent,
    InativarClienteDialogComponent,
    EnderecoSubmitterComponent,
    LivCartoesFormComponent,
    DetalhesPedidoComponent,
    InativarLivroDialogComponent,
    DetalhesLivroComponent,
    CurrencyPipe,
    LivTelefonesManagementComponent,
    InativarTelefoneDialogComponent,
    InativarCartaoDialogComponent,
    InativarEnderecoDialogComponent,
    NovoEnderecoFormComponent,
    DetalhesPedidoAdminComponent,
    LivFaturamentoChartComponent,
    LivGeneroChartComponent,
    LivRankChartComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    RouterModule,
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule,
    FormsModule,
    GoogleChartsModule
  ],
  exports: [
    LivHeaderComponent,
    LivFooterComponent,
    LivEnderecoFormComponent,
    InativarClienteDialogComponent,
    EnderecoSubmitterComponent,
    LivCartoesFormComponent,
    LivTelefonesManagementComponent,
    NovoEnderecoFormComponent,
    LivFaturamentoChartComponent,
    LivGeneroChartComponent,
    LivRankChartComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }
