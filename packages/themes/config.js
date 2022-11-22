const baseTokenType = ['color', 'sizing', 'spacing', 'typography', 'fontSizes', 'fontFamilies', 'borderRadius'];

module.exports = {
  source: ["tokens/input.json"],
  platforms: {
    js: {
      buildPath: "dist/",
      transforms: [
        "size/rem"
      ],
      files: [
        {
          filter: (token) => {
            if(!baseTokenType.includes(token.type)){
              console.log(token)
            }
            if(baseTokenType.includes(token.type)){
              if(token.type === 'borderRadius'){
                return true
              }
              if(!token.name.includes('0')){
                return true
              }
            }
            
            return false
          },
          "destination": "index.json",
          "format": "json/nested",
          "options": {
            "outputReferences": true
          }
        }
      ]
    }
  }
}
