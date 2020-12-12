export const approxTime = time => {
  const now = Date.now();
  let diff = Math.floor((now - Date.parse(time)) / 1000);
  let str = "";
  if (diff < 60) {
    str = `${diff} seconds ago`;
  } else if (diff < 3600 && diff > 60) {
    if (diff < 120) {
      str = `${Math.floor(diff / 60)} minute ago`;
    } else {
      str = `${Math.floor(diff / 60)} minutes ago`;
    }
  } else if (diff > 3600 && diff < 86400) {
    if (diff < 7200) {
      str = `${Math.floor(diff / 3600)} hour ago`;
    } else {
      str = `${Math.floor(diff / 3600)} hours ago`;
    }
  } else if (diff > 86400 && diff < 604800) {
    if (diff < 172800) {
      str = `${Math.floor(diff / 86400)} day ago`;
    } else {
      str = `${Math.floor(diff / 86400)} days ago`;
    }
  } else if (diff > 604800 && diff < 604800) {
    if (diff < 1209600) {
      str = `${Math.floor(diff / 604800)} week ago`;
    } else {
      str = `${Math.floor(diff / 604800)} weeks ago`;
    }
  }
  return str;
};
