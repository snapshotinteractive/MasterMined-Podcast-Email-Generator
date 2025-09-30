// Define host profiles HTML
const hostProfiles = {
    host1: `<!-- First Host Profile -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" class="host-profile">
                <tr>
                  <td valign="top" class="host-image">
                    <img
                      src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/Master%20Mined%20Assets/2025/Hosts/mark.jpeg"
                      alt="Host 1">
                  </td>
                  <td valign="middle" class="host-info">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td class="host-name">
                          Mark Scrivner
                        </td>
                      </tr>
                      <tr>
                        <td class="host-title">
                          Founder & CEO of Snapshot
                        </td>
                      </tr>
                      <tr>
                        <td class="host-bio">
                          As the Founder of Snapshot, Mark leads a team focused on delivering
                          marketing solutions that drive real results. With over 20 years of
                          experience, he helps organizations grow through strategic
                          storytelling. Mark also advises emerging businesses and is
                          passionate about endurance sports, and community impact.
                          <br>
                          <a href="mailto:mark@snapshotinteractive.com" style="color: #EC5A2B;">Email Mark</a> | <a
                            href="https://www.linkedin.com/in/markscrivner/" target="_blank"
                            style="color: #EC5A2B;">Connect</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`,
    
    host2: `<!-- Second Host Profile -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" class="host-profile">
                <tr>
                  <td valign="top" class="host-image">
                    <img
                      src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/Master%20Mined%20Assets/2025/Hosts/lee.jpeg"
                      alt="Host 2">
                  </td>
                  <td valign="top" class="host-info">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td class="host-name">
                          Lee Pepper
                        </td>
                      </tr>
                      <tr>
                        <td class="host-title">
                          Speaker, Author, C-Suite Coach & Veteran
                        </td>
                      </tr>
                      <tr>
                        <td class="host-bio">
                          Lee has leveraged his service in the United States Army, his
                          multiple C-Level roles, and his experience as a staff member on Ross
                          Perot's Presidential Campaigns into building great teams that solve
                          technology challenges & grow market share through digital marketing.
                          Check out his upcoming book release <a href="https://www.neveroutmatched.com" target="_blank"
                            style="color: #EC5A2B;">here</a>.
                          <br>
                          <a href="mailto:lee.pepper@peprallygroup.com" style="color: #EC5A2B;">Email Lee</a> | <a
                            href="https://www.linkedin.com/in/leepepper/" target="_blank"
                            style="color: #EC5A2B;">Connect</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`,
    
    host3: `<!-- Third Host Profile -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" class="host-profile">
                <tr>
                  <td valign="top" class="host-image">
                    <img
                      src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/Master%20Mined%20Assets/2025/Hosts/Jeff.png"
                      alt="Host 3">
                  </td>
                  <td valign="top" class="host-info">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td class="host-name">
                          Jeff Skillen
                        </td>
                      </tr>
                      <tr>
                        <td class="host-title">
                          Trusted Advisor, Founder of SkillSet Enterprises
                        </td>
                      </tr>
                      <tr>
                        <td class="host-bio">
                          Jeff Skillen is the founder of SkillSet Enterprises, LLC, known for
                          bringing clarity, strategy, and results to fast-changing industries.
                          With executive experience across healthcare, media, tech, and more,
                          he's a trusted advisor and thought leader in growth, transformation,
                          and complex challenges.
                          <br>
                          <a href="mailto:jeff@skillsetenterprises.com" style="color: #EC5A2B;">Email Jeff</a> | <a
                            href="https://www.skillsetenterprises.com/" target="_blank" style="color: #EC5A2B;">Learn
                            More</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`
};

// Form submission handler
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    generateHTML();
});

function generateHTML() {
    // Get form values
    const formData = {
        episodeDate: document.getElementById('episodeDate').value,
        episodeDuration: document.getElementById('episodeDuration').value,
        episodeTitle: document.getElementById('episodeTitle').value,
        episodeThumbnail: document.getElementById('episodeThumbnail').value,
        episodeDescription1: document.getElementById('episodeDescription1').value,
        episodeDescription2: document.getElementById('episodeDescription2').value,
        episodeWebsiteLink: document.getElementById('episodeWebsiteLink').value,
        episodeYoutubeLink: document.getElementById('episodeYoutubeLink').value
    };

    // Get selected hosts
    const selectedHosts = [];
    if (document.getElementById('host1').checked) selectedHosts.push(hostProfiles.host1);
    if (document.getElementById('host2').checked) selectedHosts.push(hostProfiles.host2);
    if (document.getElementById('host3').checked) selectedHosts.push(hostProfiles.host3);

    // Join selected host profiles
    const hostProfilesHTML = selectedHosts.join('\n\n');

    // Replace placeholders in template (emailTemplateBase is defined in email-template.js)
    let generatedHTML = emailTemplateBase
        .replace(/\{\{NEW_EPISODE_RELEASE_DATE\}\}/g, formData.episodeDate)
        .replace(/\{\{NEW_EPISODE_DURATION\}\}/g, formData.episodeDuration)
        .replace(/\{\{NEW_EPISODE_TITLE\}\}/g, formData.episodeTitle)
        .replace(/\{\{NEW_EPISODE_THUMBNAIL\}\}/g, formData.episodeThumbnail)
        .replace(/\{\{NEW_EPISODE_DESCRIPTION\}\}/g, formData.episodeDescription1)
        .replace(/\{\{NEW_EPISODE_DESCRIPTION_SECOND_PARAGRAPH\}\}/g, formData.episodeDescription2)
        .replace(/\{\{NEW_EPISODE_WEBSITE_LINK\}\}/g, formData.episodeWebsiteLink)
        .replace(/\{\{NEW_EPISODE_YOUTUBE_LINK\}\}/g, formData.episodeYoutubeLink)
        .replace(/\{\{HOST_PROFILES\}\}/g, hostProfilesHTML);

    // Display generated HTML
    document.getElementById('outputHTML').value = generatedHTML;
    
    // Show output container, hide form
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('outputContainer').classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function copyToClipboard() {
    const outputTextarea = document.getElementById('outputHTML');
    outputTextarea.select();
    outputTextarea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        
        // Show success message
        const successMsg = document.getElementById('copySuccess');
        successMsg.classList.add('show');
        
        // Hide after 3 seconds
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 3000);
    } catch (err) {
        alert('Failed to copy. Please select the text and copy manually.');
    }
}

function backToForm() {
    document.getElementById('outputContainer').classList.remove('active');
    document.getElementById('formContainer').style.display = 'block';
    window.scrollTo(0, 0);
}

function resetForm() {
    if (confirm('Are you sure you want to reset all fields?')) {
        document.getElementById('emailForm').reset();
    }
}