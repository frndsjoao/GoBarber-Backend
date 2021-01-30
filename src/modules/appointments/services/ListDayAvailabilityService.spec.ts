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
      user_id: '999999',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '999999',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 20, 11).getTime();
    });

    const avaliability = await listDayAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(avaliability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 13, available: true },
        { hour: 14, available: false },
        { hour: 15, available: false },
        { hour: 16, available: true },
      ]),
    );
  });
});
