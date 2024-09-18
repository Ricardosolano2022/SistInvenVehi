//Sistema de Inventario de Vehiculos:

export interface Motor{

    tipo: string;
    cilindraje: number;
    
}

export interface Carro{

    marca: string;
    modelo: string;
    color: string;
    motor: Motor;
    
}

export interface Empleado{

    nombre: string;
    identificacion: string;
    carrosVendidos: Carro[];
}

export const empleados: Empleado[]=[

        {   nombre: 'Ricardo Solano', 
            identificacion: '94474030',

            carrosVendidos: [{marca: 'Kia', modelo: 'Spice', color: 'Rojo', motor: {tipo: 'Gasolina', cilindraje: 1250}},
                             { marca: "Tesla", modelo: "Model S", color: 'Plateado', motor: { tipo: "Eléctrico", cilindraje: 1020 }},
                             { marca: "Renaul", modelo: "Logan", color: 'Blanco', motor: { tipo: "Eléctrico", cilindraje: 1600 }}
                            ]

        },
        
        {   nombre: 'Juan Vasquez', 
            identificacion: '1002820056',
            
            carrosVendidos: [{marca: 'Suzuki', modelo: 'Gran Vitara', color: 'Gris', motor: {tipo: 'Hybrido', cilindraje: 1400}},
                             {marca: 'Honda', modelo: 'Pilot', color: 'Azul', motor: {tipo: 'Hybrido', cilindraje: 1800}}

                            ]
        },

        {
            nombre: "Ana Martínez",
            identificacion: '25654789',

            carrosVendidos:[{ marca: "Audi", modelo: "A4", color: 'Blanco',motor: { tipo: "Gasolina", cilindraje: 201 } },
                            { marca: "Mercedes-Benz", modelo: "E-Class", color: 'Blanco', motor: { tipo: "Gasolina", cilindraje: 255 } }
                           ]

        },
    ]





