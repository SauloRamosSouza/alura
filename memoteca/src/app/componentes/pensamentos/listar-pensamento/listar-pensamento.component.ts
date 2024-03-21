import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input',
      autoria: 'Componente filho',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo2'
    },
    {
      conteudo: 'A felicidade de sua vida depende da qualidade de seus pensamentos.',
      autoria: 'Marco Aurélio',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Tente mover o mundo - o primeiro passo será mover a si mesmo.',
      autoria: 'Platão',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia a repe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia a repe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia a repe.',
      autoria: '',
      modelo: 'modelo1'
    },
  ];
}
