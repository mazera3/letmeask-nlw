type User = {
  name: string;
  address: {
    city: string;
    uf: string;
  };
};

function showWelconmeMessage(user: User) {
  return `Welcome ${user.name}  (${user.address.city}) - ${user.address.uf}`;
}

showWelconmeMessage({
  name: "Édio",
  address: {
    city: "Nova Trento",
    uf: "SC",
  },
});
