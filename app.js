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

// Generate the previous episodes HTML based on form inputs
function generatePreviousEpisodesHTML() {
    let html = '';
    
    // Get Previous Episode 1 data
    const prev1Date = document.getElementById('prev1Date').value;
    const prev1Duration = document.getElementById('prev1Duration').value;
    const prev1Title = document.getElementById('prev1Title').value;
    const prev1Thumbnail = document.getElementById('prev1Thumbnail').value;
    const prev1Youtube = document.getElementById('prev1Youtube').value;
    const prev1Description = document.getElementById('prev1Description').value;
    
    // Generate Episode 1 HTML if data exists
    if (prev1Title && prev1Youtube) {
        html += `
    <!-- Episode 1 -->
    <tr>
      <td class="episode-container">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="more-episode-info"
              style="background-position: center 25%;background-image: url(${prev1Thumbnail || ''});">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="80%" valign="top">
                    <a href="${prev1Youtube}" style="text-decoration:none;color:#fff;">
                      <div class="episode-date">
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/calendar.png"
                          alt="Calendar Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-right:5px;height:12px;width:12px !important;">
                        ${prev1Date || ''}
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/timer.png"
                          alt="Time Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-left:10px; margin-right:5px;height:12px;width:12px !important;">
                        ${prev1Duration || ''}
                      </div>
                      <div class="episode-title">${prev1Title}</div>
                    </a>
                  </td>
                  <td width="20%" class="episode-arrow" valign="middle">
                    <img style="height:auto;width:32px;"
                      src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/arrow-right.png" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="episode-copy" style="padding-top:15px;">
              <div class="episode-description">
                <p>${prev1Description || ''}</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- /Episode 1 -->`;
    }
    
    // Get Previous Episode 2 data
    const prev2Date = document.getElementById('prev2Date').value;
    const prev2Duration = document.getElementById('prev2Duration').value;
    const prev2Title = document.getElementById('prev2Title').value;
    const prev2Thumbnail = document.getElementById('prev2Thumbnail').value;
    const prev2Youtube = document.getElementById('prev2Youtube').value;
    const prev2Description = document.getElementById('prev2Description').value;
    
    // Generate Episode 2 HTML if data exists
    if (prev2Title && prev2Youtube) {
        html += `

    <!-- Episode 2 -->
    <tr>
      <td class="episode-container">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="more-episode-info"
              style="background-position: center 25%;background-image: url(${prev2Thumbnail || ''});">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="80%" valign="top">
                    <a href="${prev2Youtube}" style="text-decoration:none;color:#fff;">
                      <div class="episode-date">
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/calendar.png"
                          alt="Calendar Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-right:5px;height:12px;width:12px !important;">
                        ${prev2Date || ''}
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/timer.png"
                          alt="Time Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-left:10px; margin-right:5px;height:12px;width:12px !important;">
                        ${prev2Duration || ''}
                      </div>
                      <div class="episode-title">${prev2Title}</div>
                    </a>
                  </td>
                  <td width="20%" class="episode-arrow" valign="middle">
                    <img style="height:auto;width:32px;"
                      src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/arrow-right.png" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="episode-copy" style="padding-top:15px;">
              <div class="episode-description">
                <p>${prev2Description || ''}</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- /Episode 2 -->`;
    }
    
    return html;
}

// Form submission handler
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    generateHTML();
});

function generateHTML() {
    // Get form values for new episode
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

    // Generate previous episodes HTML from manual inputs
    const previousEpisodesHTML = generatePreviousEpisodesHTML();

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
        .replace(/\{\{HOST_PROFILES\}\}/g, hostProfilesHTML)
        .replace(/\{\{PREVIOUS_EPISODES\}\}/g, previousEpisodesHTML);

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