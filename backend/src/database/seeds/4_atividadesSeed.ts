import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("atividades").del();
    await knex("questoes").del();
    await knex("opcoes").del();
    await knex("questoes_atividade").del();
    await knex("opcoes_questao").del();
    await knex("atividade_aluno").del();

    // Inserts seed entries
    await knex("atividades").insert([
        { id: 1, atividade: "Atividade 1 - Português", id_serie: 1, id_materia: 1},
        { id: 2, atividade: "Atividade 1 - Inglês", id_serie: 1, id_materia: 2},
        { id: 3, atividade: "Atividade 1 - Espanhol", id_serie: 1, id_materia: 3},
    ]);

    await knex("questoes").insert([
        { id: 1, titulo: "Pergunta 1:", descricao: 'Atividade 1'},
        { id: 2, titulo: "Pergunta 2:", descricao: 'Atividade 1'},
        { id: 3, titulo: "Pergunta 3:", descricao: 'Atividade 1'},
        { id: 4, titulo: "Pergunta 4:", descricao: 'Atividade 1'},
        { id: 5, titulo: "Pergunta 5:", descricao: 'Atividade 1'},
        { id: 6, titulo: "Pergunta 1:", descricao: 'Atividade 2'},
        { id: 7, titulo: "Pergunta 2:", descricao: 'Atividade 2'},
        { id: 8, titulo: "Pergunta 3:", descricao: 'Atividade 2'},
        { id: 9, titulo: "Pergunta 4:", descricao: 'Atividade 2'},
        { id: 10, titulo: "Pergunta 5:", descricao: 'Atividade 2'},
        { id: 11, titulo: "Pergunta 1:", descricao: 'Atividade 3'},
        { id: 12, titulo: "Pergunta 2:", descricao: 'Atividade 3'},
        { id: 13, titulo: "Pergunta 3:", descricao: 'Atividade 3'},
        { id: 14, titulo: "Pergunta 4:", descricao: 'Atividade 3'},
        { id: 15, titulo: "Pergunta 5:", descricao: 'Atividade 3'}
    ]);

    await knex("opcoes").insert([
        { id: 1, opcao: "Opção 1 - Atividade 1 - Pergunta 1", certo: true},
        { id: 2, opcao: "Opção 2 - Atividade 1 - Pergunta 1", certo: false},
        { id: 3, opcao: "Opção 3 - Atividade 1 - Pergunta 1", certo: false},
        { id: 4, opcao: "Opção 4 - Atividade 1 - Pergunta 1", certo: false},
        { id: 5, opcao: "Opção 5 - Atividade 1 - Pergunta 1", certo: false},
        { id: 6, opcao: "Opção 1 - Atividade 1 - Pergunta 2", certo: false},
        { id: 7, opcao: "Opção 2 - Atividade 1 - Pergunta 2", certo: true},
        { id: 8, opcao: "Opção 3 - Atividade 1 - Pergunta 2", certo: false},
        { id: 9, opcao: "Opção 4 - Atividade 1 - Pergunta 2", certo: false},
        { id: 10, opcao: "Opção 5 - Atividade 1 - Pergunta 2", certo: false},
        { id: 11, opcao: "Opção 1 - Atividade 1 - Pergunta 3", certo: false},
        { id: 12, opcao: "Opção 2 - Atividade 1 - Pergunta 3", certo: false},
        { id: 13, opcao: "Opção 3 - Atividade 1 - Pergunta 3", certo: true},
        { id: 14, opcao: "Opção 4 - Atividade 1 - Pergunta 3", certo: false},
        { id: 15, opcao: "Opção 5 - Atividade 1 - Pergunta 3", certo: false},
        { id: 16, opcao: "Opção 1 - Atividade 1 - Pergunta 4", certo: false},
        { id: 17, opcao: "Opção 2 - Atividade 1 - Pergunta 4", certo: false},
        { id: 18, opcao: "Opção 3 - Atividade 1 - Pergunta 4", certo: false},
        { id: 19, opcao: "Opção 4 - Atividade 1 - Pergunta 4", certo: true},
        { id: 20, opcao: "Opção 5 - Atividade 1 - Pergunta 4", certo: false},
        { id: 21, opcao: "Opção 1 - Atividade 1 - Pergunta 5", certo: false},
        { id: 22, opcao: "Opção 2 - Atividade 1 - Pergunta 5", certo: false},
        { id: 23, opcao: "Opção 3 - Atividade 1 - Pergunta 5", certo: false},
        { id: 24, opcao: "Opção 4 - Atividade 1 - Pergunta 5", certo: false},
        { id: 25, opcao: "Opção 5 - Atividade 1 - Pergunta 5", certo: true},
        { id: 26, opcao: "Opção 1 - Atividade 2 - Pergunta 1", certo: true},
        { id: 27, opcao: "Opção 2 - Atividade 2 - Pergunta 1", certo: false},
        { id: 28, opcao: "Opção 3 - Atividade 2 - Pergunta 1", certo: false},
        { id: 29, opcao: "Opção 4 - Atividade 2 - Pergunta 1", certo: false},
        { id: 30, opcao: "Opção 5 - Atividade 2 - Pergunta 1", certo: false},
        { id: 31, opcao: "Opção 1 - Atividade 2 - Pergunta 2", certo: false},
        { id: 32, opcao: "Opção 2 - Atividade 2 - Pergunta 2", certo: true},
        { id: 33, opcao: "Opção 3 - Atividade 2 - Pergunta 2", certo: false},
        { id: 34, opcao: "Opção 4 - Atividade 2 - Pergunta 2", certo: false},
        { id: 35, opcao: "Opção 5 - Atividade 2 - Pergunta 2", certo: false},
        { id: 36, opcao: "Opção 1 - Atividade 2 - Pergunta 3", certo: false},
        { id: 37, opcao: "Opção 2 - Atividade 2 - Pergunta 3", certo: false},
        { id: 38, opcao: "Opção 3 - Atividade 2 - Pergunta 3", certo: true},
        { id: 39, opcao: "Opção 4 - Atividade 2 - Pergunta 3", certo: false},
        { id: 40, opcao: "Opção 5 - Atividade 2 - Pergunta 3", certo: false},
        { id: 41, opcao: "Opção 1 - Atividade 2 - Pergunta 4", certo: false},
        { id: 42, opcao: "Opção 2 - Atividade 2 - Pergunta 4", certo: false},
        { id: 43, opcao: "Opção 3 - Atividade 2 - Pergunta 4", certo: false},
        { id: 44, opcao: "Opção 4 - Atividade 2 - Pergunta 4", certo: true},
        { id: 45, opcao: "Opção 5 - Atividade 2 - Pergunta 4", certo: false},
        { id: 46, opcao: "Opção 1 - Atividade 2 - Pergunta 5", certo: false},
        { id: 47, opcao: "Opção 2 - Atividade 2 - Pergunta 5", certo: false},
        { id: 48, opcao: "Opção 3 - Atividade 2 - Pergunta 5", certo: false},
        { id: 49, opcao: "Opção 4 - Atividade 2 - Pergunta 5", certo: false},
        { id: 50, opcao: "Opção 5 - Atividade 2 - Pergunta 5", certo: true},
        { id: 51, opcao: "Opção 1 - Atividade 3 - Pergunta 1", certo: true},
        { id: 52, opcao: "Opção 2 - Atividade 3 - Pergunta 1", certo: false},
        { id: 53, opcao: "Opção 3 - Atividade 3 - Pergunta 1", certo: false},
        { id: 54, opcao: "Opção 4 - Atividade 3 - Pergunta 1", certo: false},
        { id: 55, opcao: "Opção 5 - Atividade 3 - Pergunta 1", certo: false},
        { id: 56, opcao: "Opção 1 - Atividade 3 - Pergunta 2", certo: false},
        { id: 57, opcao: "Opção 2 - Atividade 3 - Pergunta 2", certo: true},
        { id: 58, opcao: "Opção 3 - Atividade 3 - Pergunta 2", certo: false},
        { id: 59, opcao: "Opção 4 - Atividade 3 - Pergunta 2", certo: false},
        { id: 60, opcao: "Opção 5 - Atividade 3 - Pergunta 2", certo: false},
        { id: 61, opcao: "Opção 1 - Atividade 3 - Pergunta 3", certo: false},
        { id: 62, opcao: "Opção 2 - Atividade 3 - Pergunta 3", certo: false},
        { id: 63, opcao: "Opção 3 - Atividade 3 - Pergunta 3", certo: true},
        { id: 64, opcao: "Opção 4 - Atividade 3 - Pergunta 3", certo: false},
        { id: 65, opcao: "Opção 5 - Atividade 3 - Pergunta 3", certo: false},
        { id: 66, opcao: "Opção 1 - Atividade 4 - Pergunta 4", certo: false},
        { id: 67, opcao: "Opção 2 - Atividade 4 - Pergunta 4", certo: false},
        { id: 68, opcao: "Opção 3 - Atividade 4 - Pergunta 4", certo: false},
        { id: 69, opcao: "Opção 4 - Atividade 4 - Pergunta 4", certo: true},
        { id: 70, opcao: "Opção 5 - Atividade 4 - Pergunta 4", certo: false},
        { id: 71, opcao: "Opção 1 - Atividade 5 - Pergunta 5", certo: false},
        { id: 72, opcao: "Opção 2 - Atividade 5 - Pergunta 5", certo: false},
        { id: 73, opcao: "Opção 3 - Atividade 5 - Pergunta 5", certo: false},
        { id: 74, opcao: "Opção 4 - Atividade 5 - Pergunta 5", certo: false},
        { id: 75, opcao: "Opção 5 - Atividade 5 - Pergunta 5", certo: true}
    ]);

    await knex("questoes_atividade").insert([
        { id: 1, id_atividade: 1, id_questao: 1},
        { id: 2, id_atividade: 1, id_questao: 2},
        { id: 3, id_atividade: 1, id_questao: 3},
        { id: 4, id_atividade: 1, id_questao: 4},
        { id: 5, id_atividade: 1, id_questao: 5},
        { id: 6, id_atividade: 2, id_questao: 6},
        { id: 7, id_atividade: 2, id_questao: 7},
        { id: 8, id_atividade: 2, id_questao: 8},
        { id: 9, id_atividade: 2, id_questao: 9},
        { id: 10, id_atividade: 2, id_questao: 10},
        { id: 11, id_atividade: 3, id_questao: 11},
        { id: 12, id_atividade: 3, id_questao: 12},
        { id: 13, id_atividade: 3, id_questao: 13},
        { id: 14, id_atividade: 3, id_questao: 14},
        { id: 15, id_atividade: 3, id_questao: 15},

    ]);

    await knex("opcoes_questao").insert([
        { id: 1, id_questao: 1, id_opcao: 1},
        { id: 2, id_questao: 1, id_opcao: 2},
        { id: 3, id_questao: 1, id_opcao: 3},
        { id: 4, id_questao: 1, id_opcao: 4},
        { id: 5, id_questao: 1, id_opcao: 5},
        { id: 6, id_questao: 2, id_opcao: 6},
        { id: 7, id_questao: 2, id_opcao: 7},
        { id: 8, id_questao: 2, id_opcao: 8},
        { id: 9, id_questao: 2, id_opcao: 9},
        { id: 10, id_questao: 2, id_opcao: 10},
        { id: 11, id_questao: 3, id_opcao: 11},
        { id: 12, id_questao: 3, id_opcao: 12},
        { id: 13, id_questao: 3, id_opcao: 13},
        { id: 14, id_questao: 3, id_opcao: 14},
        { id: 15, id_questao: 3, id_opcao: 15},
        { id: 16, id_questao: 4, id_opcao: 16},
        { id: 17, id_questao: 4, id_opcao: 17},
        { id: 18, id_questao: 4, id_opcao: 18},
        { id: 19, id_questao: 4, id_opcao: 19},
        { id: 20, id_questao: 4, id_opcao: 20},
        { id: 21, id_questao: 5, id_opcao: 21},
        { id: 22, id_questao: 5, id_opcao: 22},
        { id: 23, id_questao: 5, id_opcao: 23},
        { id: 24, id_questao: 5, id_opcao: 24},
        { id: 25, id_questao: 5, id_opcao: 25},
        { id: 26, id_questao: 6, id_opcao: 26},
        { id: 27, id_questao: 6, id_opcao: 27},
        { id: 28, id_questao: 6, id_opcao: 28},
        { id: 29, id_questao: 6, id_opcao: 29},
        { id: 30, id_questao: 6, id_opcao: 30},
        { id: 31, id_questao: 7, id_opcao: 31},
        { id: 32, id_questao: 7, id_opcao: 32},
        { id: 33, id_questao: 7, id_opcao: 33},
        { id: 34, id_questao: 7, id_opcao: 34},
        { id: 35, id_questao: 7, id_opcao: 35},
        { id: 36, id_questao: 8, id_opcao: 36},
        { id: 37, id_questao: 8, id_opcao: 37},
        { id: 38, id_questao: 8, id_opcao: 38},
        { id: 39, id_questao: 8, id_opcao: 39},
        { id: 40, id_questao: 8, id_opcao: 40},
        { id: 41, id_questao: 9, id_opcao: 41},
        { id: 42, id_questao: 9, id_opcao: 42},
        { id: 43, id_questao: 9, id_opcao: 43},
        { id: 44, id_questao: 9, id_opcao: 44},
        { id: 45, id_questao: 9, id_opcao: 45},
        { id: 46, id_questao: 10, id_opcao: 46},
        { id: 47, id_questao: 10, id_opcao: 47},
        { id: 48, id_questao: 10, id_opcao: 48},
        { id: 49, id_questao: 10, id_opcao: 49},
        { id: 50, id_questao: 10, id_opcao: 50},
        { id: 51, id_questao: 11, id_opcao: 51},
        { id: 52, id_questao: 11, id_opcao: 52},
        { id: 53, id_questao: 11, id_opcao: 53},
        { id: 54, id_questao: 11, id_opcao: 54},
        { id: 55, id_questao: 11, id_opcao: 55},
        { id: 56, id_questao: 12, id_opcao: 56},
        { id: 57, id_questao: 12, id_opcao: 57},
        { id: 58, id_questao: 12, id_opcao: 58},
        { id: 59, id_questao: 12, id_opcao: 59},
        { id: 60, id_questao: 12, id_opcao: 60},
        { id: 61, id_questao: 13, id_opcao: 61},
        { id: 62, id_questao: 13, id_opcao: 62},
        { id: 63, id_questao: 13, id_opcao: 63},
        { id: 64, id_questao: 13, id_opcao: 64},
        { id: 65, id_questao: 13, id_opcao: 65},
        { id: 66, id_questao: 14, id_opcao: 66},
        { id: 67, id_questao: 14, id_opcao: 67},
        { id: 68, id_questao: 14, id_opcao: 68},
        { id: 69, id_questao: 14, id_opcao: 69},
        { id: 70, id_questao: 14, id_opcao: 70},
        { id: 71, id_questao: 15, id_opcao: 71},
        { id: 72, id_questao: 15, id_opcao: 72},
        { id: 73, id_questao: 15, id_opcao: 73},
        { id: 74, id_questao: 15, id_opcao: 74},
        { id: 75, id_questao: 15, id_opcao: 75}
    ]);

    await knex("atividade_aluno").insert([
        { id: 1, id_usuario: 1, id_atividade: 1, id_questao: 1, id_opcao: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
        { id: 2, id_usuario: 1, id_atividade: 1, id_questao: 2, id_opcao: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
        { id: 3, id_usuario: 1, id_atividade: 1, id_questao: 3, id_opcao: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
        { id: 4, id_usuario: 1, id_atividade: 1, id_questao: 4, id_opcao: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
        { id: 5, id_usuario: 1, id_atividade: 1, id_questao: 5, id_opcao: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
    ]);

};
