import { Sequelize } from 'sequelize'

import configDataBase from '../config/database'

import User from '../app/models/User'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

const models = [User, Product, Category]

class DataBase {
    constructor() {
        this.init()
    }
    init() {
        this.connection = new Sequelize(configDataBase)
        models.map((model) => model.init(this.connection))
    }
}

export default new DataBase()