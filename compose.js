// @ts-check

/** @param  {...function} fs */
export default function compose(...fs) {
	return initialValue => fs.reduceRight((value, f) => f(value), initialValue);
}
