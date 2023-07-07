class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome, arrayAlunos) {
        const disciplina = new Disciplina(codigo, nome, arrayAlunos);
        return this.repositorio.inserir(disciplina);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }
}
