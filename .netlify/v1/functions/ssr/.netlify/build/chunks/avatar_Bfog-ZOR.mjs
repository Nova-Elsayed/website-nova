const avatar = new Proxy({"src":"/_astro/avatar.DeQDKSwT.png","width":194,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/avatar.png";
							}
							
							return target[name];
						}
					});

export { avatar as default };
