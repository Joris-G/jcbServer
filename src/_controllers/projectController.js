const DB = require("../../database");
const { ProjectError } = require("../_errors/customError");
const moment = require("moment");

const projectController = {
  async create(req, res, next) {
    try {
      const {
        title,
        description,
        projectType,
        startDate,
        estimatedEndDate,
        managerId,
        status,
        priority,
      } = req.body;
      const project = await DB.Project.create({
        title,
        description,
        projectType,
        startDate,
        estimatedEndDate,
        managerId,
        status,
        priority,
      });
      return res.status(201).json(project);
    } catch (error) {
      next();
    }
  },

  async getById(req, res) {
    const id = req.params.id;
    const project = Project.getById(id);

    if (!project) {
      return res.status(404).json({ message: "Ce projet n'existe pas" });
    }
    res.status(200).json(project);
  },
  async getAll(req, res, next) {
    try {
      const projects = await DB.Project.findAll({
        include: {
          model: DB.User,
          as: "manager",
          attributes: { exclude: ["password"] },
        },
      });
      if (!projects) {
        throw new ProjectError("Aucun projet trouvé");
      }
      console.log(projects);
      res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = projectController;
