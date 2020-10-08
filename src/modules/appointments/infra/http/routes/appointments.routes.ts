import { Router } from 'express';
<<<<<<< HEAD
=======
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
>>>>>>> d942840e4ddd910418a62096445224f7f61a55a4

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

<<<<<<< HEAD
appointmentsRouter.post('/', appointmentsController.create);
=======
// appointmentsRouter.get('/', async (request, response) => {
// const appointments = await appointmentsRepository.find();

// return response.json(appointments);
// });

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointment = container.resolve(CreateAppointmentService);

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json(appointment);
});
>>>>>>> d942840e4ddd910418a62096445224f7f61a55a4

export default appointmentsRouter;
