const favicon = new Proxy({"src":"/_astro/favicon.C1-wf8m0.png","width":829,"height":789,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/favicon.png";
							}
							
							return target[name];
						}
					});

export { favicon as default };
