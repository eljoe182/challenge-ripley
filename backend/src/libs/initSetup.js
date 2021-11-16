import AccountType from '../models/accountType.model';

const createData = async () => {
  try {
    const accountsExist = await AccountType.count();
    if (accountsExist > 0) return;

    await AccountType.create({
      name: 'Corriente',
    });
    await AccountType.create({
      name: 'Ahorro',
    });
    await AccountType.create({
      name: 'Vista',
    });
  } catch (error) {
    console.error(error);
  }
};

export default createData;
