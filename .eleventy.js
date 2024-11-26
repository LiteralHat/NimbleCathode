module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "public/img": "img",
        "public/fonts": "fonts"
    });
    return {
        dir: {
            input: "src",
            output: "_site",
        },
    };
};