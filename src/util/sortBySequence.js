const sortBySequence = (arr) => {
  return arr.sort((a, b) => a.sequence - b.sequence);
};

export default sortBySequence;
