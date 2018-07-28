// https://github.com/settings/applications/822442
const searchUser = document.querySelector('#searchUser');
// Initialize GitHub Class
const github = new GitHub();
// Initialize UI Class
const ui = new UI();

// Search input event Listener (get inserted value)
document.addEventListener('keyup', enteringInput);

function enteringInput(e) {
    let userName = e.target.value;

    if ( userName != '' ) {
        github.getUser(userName)
            .then(data => {
                // check if user was found
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    // show repositories
                    ui.showRepos(data.repos);
                }
            })
            .catch(err => console.log(err))
    } else {
        // clear profile
        ui.clearProfile();
    }

}
