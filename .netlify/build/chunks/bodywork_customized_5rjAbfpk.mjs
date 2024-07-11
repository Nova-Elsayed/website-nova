const bodywork_customized = new Proxy({"src":"/_astro/bodywork_customized.DWiwvbcG.png","width":768,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/workshops/bodywork_customized.png";
							}
							
							return target[name];
						}
					});

export { bodywork_customized as default };
