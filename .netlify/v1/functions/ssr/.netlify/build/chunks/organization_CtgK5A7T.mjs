const organization = new Proxy({"src":"/_astro/organization.ADSrIP0O.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/organization.png";
							}
							
							return target[name];
						}
					});

export { organization as default };
