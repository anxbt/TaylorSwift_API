const bcrypt = require('bcrypt');

async function hashPassword() {
    const password = 'password';
    const saltRounds = 10;

    const hash = await bcrypt.hash(password, saltRounds);

    console.log({
        password,
        hash
    });
}

hashPassword(); // Call the async function
