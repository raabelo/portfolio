const handleProfilePic = (user) => {
        if (user.nome) {
            let splited = user.nome.split(" ");
            if (splited.length >= 2) {
                return (
                    splited[0].charAt(0).toUpperCase() +
                    splited[splited.length - 1].charAt(0).toUpperCase()
                );
            } else {
                return user.nome.charAt(0).toUpperCase();
            }
        } else {
            return "";
        }

};

export default handleProfilePic;