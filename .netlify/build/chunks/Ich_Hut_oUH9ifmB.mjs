const Ich_Hut = new Proxy({"src":"/_astro/Ich_Hut.B5bwZMiN.jpg","width":1736,"height":1737,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/Ich_Hut.jpg";
							}
							
							return target[name];
						}
					});

export { Ich_Hut as default };
