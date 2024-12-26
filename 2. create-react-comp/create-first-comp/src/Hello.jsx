function Hello() {
  let myName = 'Harsh';

  let number = 456;

  let fullName = () => {
    return 'Harsh Gandhi';
  }

  return <h3>
    MessageNo: {number} I am your master {fullName()}
  </h3>
}

export default Hello;