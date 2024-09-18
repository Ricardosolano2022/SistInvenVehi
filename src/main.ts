import './style.css'
import typescriptLogo from './typescript.svg'
import autoLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { empleados } from './Sist_Inv_Vehi.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${autoLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Sistema de Gestión de Inventarios y Vehiculos
    </p>

    <div id="empleados-lista"></div> <!-- contenedor del HTML -->

    <!-- Renderizar lista de empleados y carros vendidos en la vista web -->
    
  </div>
`;

const empleadosLista = document.querySelector<HTMLDivElement>('#empleados-lista')!;
empleadosLista.innerHTML = `
  <ul>
    ${empleados.map(empleado => `
      <li><strong>El Empleado : ${empleado.nombre}</strong> - Identificación: ${empleado.identificacion}
        <ul>
          ${empleado.carrosVendidos.map(carro => `
            <li>Carro: Marca: ${carro.marca}, Modelo: ${carro.modelo}, Motor: ${carro.motor.tipo} cc)</li>
          `).join('')}
        </ul>
      </li>
    `).join('')}
  </ul>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);