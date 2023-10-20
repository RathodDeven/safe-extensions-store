interface Permissions {
  [key: string]: number;
}

export const permissions: Permissions = {
  EXECUTE_CALL: 1,
  CALL_TO_SELF: 2,
  EXECUTE_DELEGATECALL: 4,
};

export const perimssionList = [
  "EXECUTE_CALL",
  "CALL_TO_SELF",
  "EXECUTE_DELEGATECALL",
];

export const getListOfPermission: (permissionNumber: BigInt) => string[] = (
  permissionNumber
) => {
  const num = Number(permissionNumber);
  const permissionList = [];
  for (let i = 0; i < perimssionList.length; i++) {
    if (num & (1 << i)) {
      permissionList.push(perimssionList[i]);
    }
  }
  return permissionList;
};
