import { toRoman } from './index';
import { strictEqual } from "assert";

describe(('Conversión a números romanos'), () => {
  it('test 1', () => { strictEqual(toRoman(1), "I") });
  it('test 2', () => { strictEqual(toRoman(2), "II") });
  it('test 3', () => { strictEqual(toRoman(3), "III") });
  it('test 4', () => { strictEqual(toRoman(4), "IV") });
  it('test 5', () => { strictEqual(toRoman(5), "V") });
  it('test 7', () => { strictEqual(toRoman(7), "VII") });
  it('test 9', () => { strictEqual(toRoman(9), "IX") });
  it('test 10', () => { strictEqual(toRoman(10), "X") });
  it('test 11', () => { strictEqual(toRoman(11), "XI") });
  it('test 14', () => { strictEqual(toRoman(14), "XIV") });
  it('test 15', () => { strictEqual(toRoman(15), "XV") });
  it('test 18', () => { strictEqual(toRoman(18), "XVIII") });
  it('test 19', () => { strictEqual(toRoman(19), "XIX") });
  it('test 20', () => { strictEqual(toRoman(20), "XX") });
  it('test 35', () => { strictEqual(toRoman(35), "XXXV") });
  it('test 40', () => { strictEqual(toRoman(40), "XL") });
  it('test 45', () => { strictEqual(toRoman(45), "XLV") });
  it('test 48', () => { strictEqual(toRoman(48), "XLVIII") });
  it('test 49', () => { strictEqual(toRoman(49), "XLIX") });
  it('test 54', () => { strictEqual(toRoman(54), "LIV") });
  it('test 89', () => { strictEqual(toRoman(89), "LXXXIX") });
  it('test 90', () => { strictEqual(toRoman(90), "XC") });
  it('test 114', () => { strictEqual(toRoman(114), "CXIV") });
  it('test 400', () => { strictEqual(toRoman(400), "CD") });
  it('test 900', () => { strictEqual(toRoman(900), "CM") });
})

