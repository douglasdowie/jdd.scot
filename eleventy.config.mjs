export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("site/css");
    eleventyConfig.addPassthroughCopy("site/images");
    eleventyConfig.setInputDirectory("site");
    eleventyConfig.setTemplateFormats(["njk"]);
};
