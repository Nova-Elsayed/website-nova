const logo = new Proxy({"src":"/_astro/logo.Byxv003l.png","width":154,"height":28,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/logo.png";
							}
							
							return target[name];
						}
					});

export { logo as default };
