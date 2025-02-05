
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("contactButton", () => {
    return `<button type="button" class=contactButton onclick=promptText()> Contact </button>
    
    <script>
      function promptText() {
        prompt('Send the Ship a message!', '');
      }
    </script>`;

  });
};