const closing = new Proxy({"src":"/_astro/closing.DiBg1C1o.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/closing.png";
							}
							
							return target[name];
						}
					});

export { closing as default };
