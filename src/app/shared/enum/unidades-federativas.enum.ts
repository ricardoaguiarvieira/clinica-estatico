import { Enum } from './abstract.enum'
export class EnumUnidadesFederativas extends Enum<string> {

    static readonly ACRE = new EnumUnidadesFederativas('AC','Acre')
    static readonly ALAGOAS = new EnumUnidadesFederativas('AL','Alagoas')
    static readonly AMAPA = new EnumUnidadesFederativas('AP','Amapá')
    static readonly AMAZONAS = new EnumUnidadesFederativas('AM','Amazonas')
    static readonly BAHIA = new EnumUnidadesFederativas('BA','Bahia')
    static readonly CEARÁ = new EnumUnidadesFederativas('CE','Ceará')
    static readonly DISTRITO_FEDERAL = new EnumUnidadesFederativas('DF','Distrito Federal',)
    static readonly ESPIRITO_SANTO = new EnumUnidadesFederativas('ES','Espírito Santo',)
    static readonly GOIAS = new EnumUnidadesFederativas('GO','Goiás')
    static readonly MARANHAO = new EnumUnidadesFederativas('MA','Maranhão')
    static readonly MATO_GROSSO= new EnumUnidadesFederativas('MT','Mato Grosso',)
    static readonly MATO_GROSSO_DO_SUL = new EnumUnidadesFederativas('MS','Mato Grosso do Sul',)
    static readonly MINAS_GERAIS = new EnumUnidadesFederativas('MG','Minas Gerais',)
    static readonly PARA = new EnumUnidadesFederativas('PA','Pará')
    static readonly PARAIBA = new EnumUnidadesFederativas('PB','Paraíba')
    static readonly PARANÁ = new EnumUnidadesFederativas('PR','Paraná')
    static readonly PERNAMBUCO = new EnumUnidadesFederativas('PE','Pernambuco')
    static readonly PIAUI = new EnumUnidadesFederativas('PI','Piauí')
    static readonly RIO_DE_JANEIRO = new EnumUnidadesFederativas('RJ','Rio De Janeiro',)
    static readonly RIO_GRANDE_DO_NORTE = new EnumUnidadesFederativas('RN','Rio Grande do Norte',)
    static readonly RIO_DO_SUL = new EnumUnidadesFederativas('RS','Rio Grande do Sul',)
    static readonly RONDONIA = new EnumUnidadesFederativas('RO','Rondônia')
    static readonly RORAIMA = new EnumUnidadesFederativas('RR','Roraima')
    static readonly SANTA_CATARINA = new EnumUnidadesFederativas('SC','Santa Catarina',)
    static readonly SÃO_PAULO = new EnumUnidadesFederativas('SP','São Paulo',)
    static readonly SERGIPE = new EnumUnidadesFederativas('SE','Sergipe')
    static readonly TOCANTINS = new EnumUnidadesFederativas('TO','Tocantins')


    static readonly values : EnumUnidadesFederativas[] = [        
        EnumUnidadesFederativas.ACRE,
        EnumUnidadesFederativas.ALAGOAS,
        EnumUnidadesFederativas.AMAPA,
        EnumUnidadesFederativas.AMAZONAS,
        EnumUnidadesFederativas.BAHIA,
        EnumUnidadesFederativas.CEARÁ,
        EnumUnidadesFederativas.DISTRITO_FEDERAL,
        EnumUnidadesFederativas.ESPIRITO_SANTO,
        EnumUnidadesFederativas.GOIAS,
        EnumUnidadesFederativas.MARANHAO,
        EnumUnidadesFederativas.MATO_GROSSO,
        EnumUnidadesFederativas.MATO_GROSSO_DO_SUL,
        EnumUnidadesFederativas.MINAS_GERAIS,
        EnumUnidadesFederativas.PARA,
        EnumUnidadesFederativas.PARAIBA,
        EnumUnidadesFederativas.PARANÁ,
        EnumUnidadesFederativas.PERNAMBUCO,
        EnumUnidadesFederativas.PIAUI,
        EnumUnidadesFederativas.RIO_DE_JANEIRO,
        EnumUnidadesFederativas.RIO_GRANDE_DO_NORTE,
        EnumUnidadesFederativas.RIO_DO_SUL,
        EnumUnidadesFederativas.RONDONIA,
        EnumUnidadesFederativas.RORAIMA,
        EnumUnidadesFederativas.SANTA_CATARINA,
        EnumUnidadesFederativas.SÃO_PAULO,
        EnumUnidadesFederativas.SERGIPE,
        EnumUnidadesFederativas.TOCANTINS    
    ]

    public static buildInstance(id: string, desc: string): EnumUnidadesFederativas {        
        return new EnumUnidadesFederativas(id,desc);    
    }    
    
    public transformAllTo(idName: string, descName: string): any[] {        
        return EnumUnidadesFederativas.transformTo(idName, descName, ...EnumUnidadesFederativas.values);    
    }


    public findById(value: string): Enum<string> {        
        for(const i of EnumUnidadesFederativas.values) {           
            if(i.id == value) {                
                return i;            
            }        
        }        
        return new EnumUnidadesFederativas('', '');    
    }    
    
    constructor(uf: string, nome: string) {        
        super(uf, nome);    
    }
}