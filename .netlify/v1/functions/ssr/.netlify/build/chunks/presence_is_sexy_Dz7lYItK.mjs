const presence_is_sexy = new Proxy({"src":"/_astro/presence_is_sexy.C8crHC5N.png","width":768,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/workshops/presence_is_sexy.png";
							}
							
							return target[name];
						}
					});

export { presence_is_sexy as default };
