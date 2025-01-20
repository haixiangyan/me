export const detectMobile = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem));
};

export const resumeUrl =
  "https://eqnps5p81sh.feishu.cn/wiki/I8Onw9IRMiY11uk6qpbcKZBlnvh";
