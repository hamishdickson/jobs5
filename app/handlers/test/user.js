/**
 * Created by hamishdickson on 08/07/2014.
 */

function User (user_data) {
    this.person = persons_hdlr.get_persons;
    this.jobs = jobs_hdlr.get_users_jobs_for_status;
    this.jiras = jira_hdlr.get_users_jira;
}

User.prototype.person = null;
User.prototype.jobs = null;
User.prototype.jiras = null;