module.exports = {
	async redirects() {
		return [
			{
				source: "/contact",
				destination: "/",
				permanent: true,
			},
		];
	},
};
