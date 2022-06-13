test('Must be true', () => {
  const isActive = true;

  if (isActive) {
    throw new Error('Its not active');
  }
});
