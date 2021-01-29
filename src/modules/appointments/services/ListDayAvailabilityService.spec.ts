import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListDayAvailabilityService from './ListDayAvailabilityService';

let listDayAvailability: ListDayAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListMonthAvaliability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listDayAvailability = new ListDayAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month avaliability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2021, 0, 10, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2021, 0, 10, 10, 0, 0),
    });

    const avaliability = await listDayAvailability.execute({
      provider_id: 'user',
      day: 10,
      month: 1,
      year: 2021,
    });

    expect(avaliability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: true },
        { hour: 10, available: false },
        { hour: 11, available: true },
      ]),
    );
  });
});
