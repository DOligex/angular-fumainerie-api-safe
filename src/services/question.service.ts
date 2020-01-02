import { QuestionRepository } from './../repository/question.repository';
import { Question } from './../models/question';

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les Witnesss doit apparaitre.
 * Attention ! Mettez le moins possible d'elements dans le controlleur
 */
export class QuestionService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    private repository: QuestionRepository;
    constructor() {
        this.repository = new QuestionRepository();
    }

    // Business logic

    async getAll() {
        const all = await this.repository.findAll();
        return all;
    }

    async getById(id: number) {
        // Vérification des données
        if (!Number.isInteger(id)) {
            throw new Error('error');
        }

        // Récupération d'une Question
        return await this.repository.findById(id);
    }

    // upload d'une Question
    async upload(question: Question) {
        return this.repository.save(question);
    }

    // modification d'une Question
    async modifyQuestion(question: Question, id: number) {
        return this.repository.modifyQuestion(question, id);
    }

    // suppression d'une Question
    async deleteQuestion(id: number) {
        return this.repository.deleteQuestion(id);
    }

}
