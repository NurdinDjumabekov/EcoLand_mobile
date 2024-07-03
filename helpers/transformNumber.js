//// +996( 502 )02 - 49 - 05 => 502024905
export const transformNumber = (phoneNumber) => {
  return phoneNumber.replace(/[^\d]/g, "").slice(-9);
};
