const sexpress_yourself = new Proxy({"src":"/_astro/sexpress_yourself.DtIA2td7.png","width":768,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/workshops/sexpress_yourself.png";
							}
							
							return target[name];
						}
					});

export { sexpress_yourself as default };
