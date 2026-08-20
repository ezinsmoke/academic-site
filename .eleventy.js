module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/notes": "notes" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  const isProd = process.env.NODE_ENV === 'production';
  const repoName = 'academic-site';

  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('pathPrefix:', isProd ? `/${repoName}/` : '/');

  return {
    pathPrefix: isProd ? `/${repoName}/` : '/',   
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
