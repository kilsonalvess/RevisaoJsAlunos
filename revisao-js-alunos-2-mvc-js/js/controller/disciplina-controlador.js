class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const codigoDisciplina = document.querySelector("#codigo").value;
        const nomeDisciplina = document.querySelector("#nome").value;
        const arrayAlunos = document.querySelector("#alunos").value;

        const disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina, arrayAlunos);

        if (disciplina) {
            this.mostrarDisciplinaNoHTML(codigoDisciplina, nomeDisciplina, arrayAlunos);
            alert('Disciplina inserida com sucesso');
        }
    }

    mostrarDisciplinaNoHTML(codigo, nome, alunos) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${codigo} - ${nome} - ${alunos}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
            this.removerDisciplinaDaLista(codigo);
            event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.disciplinaServico.remover(codigo);
    }
}