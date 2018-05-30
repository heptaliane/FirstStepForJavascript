const codeStatement = /^```/;
const codeStatementLength = 3;

const extractCodeBlock = function(body) {
  const codeBlocks = [];
  const nonCodeBlocks = [];
  let flg = false;
  let filename = '';
  let filetype = '';
  let stack = [];

  body.forEach((str) => {
    // Line begin with '```'
    if (codeStatement.test(str)) {
      flg = !flg;

      if (flg) {
        [
          filetype,
          filename,
        ] = str.slice(codeStatementLength).split(':');
        nonCodeBlocks.push(stack);

      } else {
        codeBlocks.push({
          filename: filename,
          filetype: filetype,
          body: stack,
        });
      }

      stack = [];

    } else {
      stack.push(str);
    }
  });

  if (flg) {
    codeBlocks.push(stack);

  } else {
    nonCodeBlocks.push(stack);
  }

  return [
    codeBlocks,
    nonCodeBlocks,
  ];
};

export default extractCodeBlock;
