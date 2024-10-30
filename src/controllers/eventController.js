import Event from "../models/Event.js";

class eventController {
  async allEvents(req, res) {
    try {
      const events = await Event.findAll();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar eventos." });
    }
  }

  async createEvent(req, res) {
    const { name, location, date, description, totalTickets } = req.body;
   
    try {
      const event = await Event.create({
        name,
        location,
        date,
        description,
        totalTickets,
      });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar evento." });
    }
  }
}

export default new eventController();
