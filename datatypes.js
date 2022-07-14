// PRIMITIVE TYPES

// boolean
const a = true;
const b = false;

// null
const c = null;

// undefined
let d;

// numeric
const e = 456454.3435;
const f = BigInt(Number.MAX_SAFE_INTEGER + 45);
const g = NaN;

//  string
const h = "single quotes";
const i = "double quotes";
const j = `super quotes`;

// symbol
const k = Symbol("foo");
const l = Symbol("foo");

for (const index of [a, b, c, d, e, f, g, h, i, j, k, l]) show(index);

function show(t) {
  console.log(t, typeof t);
}
