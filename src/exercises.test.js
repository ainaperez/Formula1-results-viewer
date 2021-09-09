import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { pp1, pp2 } from './exercises';
import counterHtml from './mocks/counter.html';
import dummy_user_list from './mocks/dummy_user_list.html';

describe('PP1', () => {
	beforeEach(() => {
		document.body.innerHTML = dummy_user_list;
	});

	test('should return all the students when called with no parameters', () => {
		expect(pp1()).toEqual(
			expect.arrayContaining([
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/marioasensio.jpg',
					name: 'Mario Asensio Garcia',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/isidrob.jpg',
					name: 'Isidro Barroso Alonso',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/abeitia.jpg',
					name: 'Agustín Beitia Castillo',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/icarranzani.jpg',
					name: 'Isabella Carranzani Borot',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/ggiovannyci.jpg',
					name: 'Govanny Gerardo Castaño Idárraga',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/rcoladoc.jpg',
					name: 'Rocío Colado Chaves',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/cristiandgr.jpg',
					name: 'Cristian Di Grazia',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/carlesescude.jpg',
					name: 'Carles Escudé Comerma',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/raiesbo.jpg',
					name: 'Raimon Espasa Bou',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/luismafergar1989.jpg',
					name: 'Luis Manuel Fernandez Garcia',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/afernandezfernandez5.jpg',
					name: 'Anaís Fernández Villar',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/mgarcia-talavera.jpg',
					name: 'Miguel Garcia-Talavera Roig',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/jguajala.jpg',
					name: 'Jeshua Guajala Ramírez',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/elamar.jpg',
					name: 'Edison Javier Lamar Toapanta',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/miguelmira.jpg',
					name: 'Miguel Martinez Mira',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/imunozlo.jpg',
					name: 'Iván Muñoz López',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/sergio7navarro.jpg',
					name: 'Sergio Navarro Vicente',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/estrellapsanz.jpg',
					name: 'Estrella Parrilla Sanz',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/aperezserr.jpg',
					name: 'Aina Perez Serra',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/jaimeqg.jpg',
					name: 'Jaime Quintana Gutiérrez',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/lrocamonde.jpg',
					name: 'Luis Rocamonde Darriba',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/asanchoca.jpg',
					name: 'Ana Sancho Callealta',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/gvidalgo.jpg',
					name: 'Gerard Vidal González',
				},
			])
		);
	});

	test('should return online students when called with true', () => {
		expect(pp1(true)).toEqual(
			expect.arrayContaining([
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/ggiovannyci.jpg',
					name: 'Govanny Gerardo Castaño Idárraga',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/carlesescude.jpg',
					name: 'Carles Escudé Comerma',
				},
			])
		);
	});

	test('should return offline students when called with false', () => {
		expect(pp1(false)).toEqual(
			expect.arrayContaining([
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/marioasensio.jpg',
					name: 'Mario Asensio Garcia',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/isidrob.jpg',
					name: 'Isidro Barroso Alonso',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/abeitia.jpg',
					name: 'Agustín Beitia Castillo',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/icarranzani.jpg',
					name: 'Isabella Carranzani Borot',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/rcoladoc.jpg',
					name: 'Rocío Colado Chaves',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/cristiandgr.jpg',
					name: 'Cristian Di Grazia',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/raiesbo.jpg',
					name: 'Raimon Espasa Bou',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/luismafergar1989.jpg',
					name: 'Luis Manuel Fernandez Garcia',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/afernandezfernandez5.jpg',
					name: 'Anaís Fernández Villar',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/mgarcia-talavera.jpg',
					name: 'Miguel Garcia-Talavera Roig',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/jguajala.jpg',
					name: 'Jeshua Guajala Ramírez',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/elamar.jpg',
					name: 'Edison Javier Lamar Toapanta',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/miguelmira.jpg',
					name: 'Miguel Martinez Mira',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/imunozlo.jpg',
					name: 'Iván Muñoz López',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/sergio7navarro.jpg',
					name: 'Sergio Navarro Vicente',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/estrellapsanz.jpg',
					name: 'Estrella Parrilla Sanz',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/aperezserr.jpg',
					name: 'Aina Perez Serra',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/jaimeqg.jpg',
					name: 'Jaime Quintana Gutiérrez',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/lrocamonde.jpg',
					name: 'Luis Rocamonde Darriba',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/asanchoca.jpg',
					name: 'Ana Sancho Callealta',
				},
				{
					img: 'https://campus.uoc.edu/UOC/mc-icons/fotos/gvidalgo.jpg',
					name: 'Gerard Vidal González',
				},
			])
		);
	});
});

describe('PP2', () => {
	beforeEach(() => {
		document.body.innerHTML = counterHtml;
	});

	describe('when the checkbox is enabled', () => {
		it('should increment the counter when the user clicks on the increment button', () => {
			pp2();

			expect(screen.queryByText('0', { selector: 'h1' })).toBeVisible();

			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));

			expect(screen.queryByText('2', { selector: 'h1' })).toBeVisible();
		});

		it('should increment the counter when the user clicks on the increment button', () => {
			pp2();

			expect(screen.queryByText('0', { selector: 'h1' })).toBeVisible();

			userEvent.click(screen.queryByText('Decrement', { selector: 'button' }));
			userEvent.click(screen.queryByText('Decrement', { selector: 'button' }));

			expect(screen.queryByText('-2', { selector: 'h1' })).toBeVisible();
		});

		it('should increment the counter when the user clicks on the increment button', () => {
			pp2();

			expect(screen.queryByText('0', { selector: 'h1' })).toBeVisible();

			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));

			expect(screen.queryByText('4', { selector: 'h1' })).toBeVisible();

			userEvent.click(screen.queryByText('Decrement', { selector: 'button' }));
			userEvent.click(screen.queryByText('Decrement', { selector: 'button' }));

			expect(screen.queryByText('2', { selector: 'h1' })).toBeVisible();
		});
	});

	describe('when the checkbox is disabled', () => {
		it('should not increment or decrement the counter when the user clicks on the buttons', () => {
			pp2();
			userEvent.click(screen.queryByLabelText('Enable/Disable counter', { selector: 'input' }));

			expect(screen.queryByText('0', { selector: 'h1' })).toBeVisible();

			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));

			expect(screen.queryByText('0', { selector: 'h1' })).toBeVisible();

			userEvent.click(screen.queryByText('Decrement', { selector: 'button' }));
			userEvent.click(screen.queryByText('Decrement', { selector: 'button' }));

			expect(screen.queryByText('0', { selector: 'h1' })).toBeVisible();
		});

		it('should increment or decrement the counter when the user enables the checkbox and clicks on the buttons ', () => {
			pp2();
			userEvent.click(screen.queryByLabelText('Enable/Disable counter', { selector: 'input' }));

			expect(screen.queryByText('0', { selector: 'h1' })).toBeVisible();

			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));

			expect(screen.queryByText('0', { selector: 'h1' })).toBeVisible();

			userEvent.click(screen.queryByText('Decrement', { selector: 'button' }));
			userEvent.click(screen.queryByText('Decrement', { selector: 'button' }));

			expect(screen.queryByText('0', { selector: 'h1' })).toBeVisible();

			userEvent.click(screen.queryByLabelText('Enable/Disable counter', { selector: 'input' }));

			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));
			userEvent.click(screen.queryByText('Increment', { selector: 'button' }));

			expect(screen.queryByText('2', { selector: 'h1' })).toBeVisible();

			userEvent.click(screen.queryByText('Decrement', { selector: 'button' }));

			expect(screen.queryByText('1', { selector: 'h1' })).toBeVisible();
		});
	});
});

describe('PP3', () => {});

describe('PP4', () => {});

describe('PP5', () => {});
