class Disciplina {
    constructor(codigo, nome, arrayAlunos) {
        this._codigo = codigo;
        this._nome = nome;
        this._arrayAlunos = arrayAlunos;
    }

    //MÉTODOS ACESSORES
    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get arrayAlunos() {
        return this._arrayAlunos;
    }

    set arrayAlunos(novoArrayAlunos){
        this._arrayAlunos = novoArrayAlunos;
    }
}