function StarRating(str) {
  let str_len = Number(str);

  let result = "";
  let counter = 0;

  // subtract by either 1 or a fraction of its value until we reach zero
  while (counter < 5) {
    // if greater than or equal to one this will result in a full star
    if (str_len >= 1) {
      result += "full ";

      // update our str_len
      str_len -= 1;
    } else if (str_len > 0) {
      if (str_len + 0.25 >= 1) {
        result += "full ";
      } else if (str_len + 0.25 >= 0.5) {
        result += "half ";
      } else {
        result += "empty ";
      }

      str_len -= str_len;
    } else {
      // empty star
      result += "empty ";
    }

    counter++;
  }

  console.log(result);

  return result;
}

// keep this function call here
StarRating(3.5);
