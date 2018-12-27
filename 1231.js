function verifySubstrs(mainStr, head, body, tail) {
    var reg = new RegExp("^" + head + "(.*)" + tail + "$");
    if (reg.test(mainStr) && mainStr.indexOf(body) > -1) {
      return  `My head, body, and tail.`;
    } 
    return "Incomplete.";
}

mainStr.match()