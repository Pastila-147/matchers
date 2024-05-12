import { lifeBar } from '../character';

test.each([
  [55, 'healthy'],
  [16, 'wounded'],
  [14, 'critical']
])(
  ('health %i has result %s'),
  (health, rate) => {
    const result = lifeBar({name: 'Маг', health});
    expect(result).toBe(rate);
  }
)