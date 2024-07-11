const conception = new Proxy({"src":"/_astro/conception.DRZQntqV.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/conception.png";
							}
							
							return target[name];
						}
					});

export { conception as default };
