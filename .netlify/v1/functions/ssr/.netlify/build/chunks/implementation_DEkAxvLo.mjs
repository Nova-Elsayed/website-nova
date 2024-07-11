const implementation = new Proxy({"src":"/_astro/implementation.CSn2C_cR.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/implementation.png";
							}
							
							return target[name];
						}
					});

export { implementation as default };
