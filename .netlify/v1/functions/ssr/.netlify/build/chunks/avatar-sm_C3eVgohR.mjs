const avatarSm = new Proxy({"src":"/_astro/avatar-sm.BXWjsrdh.png","width":120,"height":120,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pdxiii/CODE/website-nova/public/images/avatar-sm.png";
							}
							
							return target[name];
						}
					});

export { avatarSm as default };
