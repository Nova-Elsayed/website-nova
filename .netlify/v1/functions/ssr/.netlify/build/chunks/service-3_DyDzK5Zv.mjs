const service3 = new Proxy({"src":"/_astro/service-3.CK7pyFF_.png","width":532,"height":433,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/service-3.png";
							}
							
							return target[name];
						}
					});

export { service3 as default };
