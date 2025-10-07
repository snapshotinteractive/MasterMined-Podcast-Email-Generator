// Episode storage key for localStorage
const STORAGE_KEY = 'mastermined_episode_history';

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

// Load episode history from localStorage
function loadEpisodeHistory() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error('Error loading episode history:', e);
    }
    return { episodes: [] };
}

// Save episode history to localStorage
function saveEpisodeHistory(history) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
        return true;
    } catch (e) {
        console.error('Error saving episode history:', e);
        return false;
    }
}

// Generate the previous episodes HTML
function generatePreviousEpisodesHTML(episodes) {
    if (!episodes || episodes.length === 0) {
        // Return default episodes if no history
        return getDefaultPreviousEpisodes();
    }
    
    let html = '';
    
    // Generate Episode 1 (most recent)
    if (episodes[0]) {
        const ep1 = episodes[0];
        html += `
    <!-- Episode 1 -->
    <tr>
      <td class="episode-container">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="more-episode-info"
              style="background-position: 50% -25px;background-image: url(${ep1.thumbnail});">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="80%" valign="top">
                    <a href="${ep1.youtubeLink}" style="text-decoration:none;color:#fff;">
                      <div class="episode-date">
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/calendar.png"
                          alt="Calendar Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-right:5px;height:12px;width:12px !important;">
                        ${ep1.date}
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/timer.png"
                          alt="Time Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-left:10px; margin-right:5px;height:12px;width:12px !important;">
                        ${ep1.duration}
                      </div>
                      <div class="episode-title">${ep1.title}</div>
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
                <p>${ep1.description1}</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- /Episode 1 -->`;
    }
    
    // Generate Episode 2 (second most recent)
    if (episodes[1]) {
        const ep2 = episodes[1];
        html += `

    <!-- Episode 2 -->
    <tr>
      <td class="episode-container">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="more-episode-info"
              style="background-position: 50% -25px;background-image: url(${ep2.thumbnail});">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="80%" valign="top">
                    <a href="${ep2.youtubeLink}" style="text-decoration:none;color:#fff;">
                      <div class="episode-date">
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/calendar.png"
                          alt="Calendar Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-right:5px;height:12px;width:12px !important;">
                        ${ep2.date}
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/timer.png"
                          alt="Time Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-left:10px; margin-right:5px;height:12px;width:12px !important;">
                        ${ep2.duration}
                      </div>
                      <div class="episode-title">${ep2.title}</div>
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
                <p>${ep2.description1}</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- /Episode 2 -->`;
    }
    
    return html || getDefaultPreviousEpisodes();
}

// Get default previous episodes (current hardcoded ones)
function getDefaultPreviousEpisodes() {
    return `
    <!-- Episode 1 -->
    <tr>
      <td class="episode-container">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="more-episode-info"
              style="background-position: 50% -25px;background-image: url(https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/Master%20Mined%20Assets/2025/Thumbnails/Episode_Eighteen_Thumbnail.jpg);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="80%" valign="top">
                    <a href="https://youtu.be/ygg8gMpETdI" style="text-decoration:none;color:#fff;">
                      <div class="episode-date">
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/calendar.png"
                          alt="Calendar Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-right:5px;height:12px;width:12px !important;">
                        September 16, 2025
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/timer.png"
                          alt="Time Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-left:10px; margin-right:5px;height:12px;width:12px !important;">
                        51:44
                      </div>
                      <div class="episode-title">Never Outmatched: Leadership Lessons with Lee Pepper</div>
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
                <p>In this episode of MasterMined, hosts Mark Scrivner and Jeff Skillen flip the mic to their co-host, Lee Pepper, as he shares insights from his new book, Never Outmatched. Drawing from his experiences as a strategist, executive, and coach, Lee unpacks what it means to lead with resilience, courage, and authenticity in the fast-changing world of behavioral health. His lessons bridge personal growth and organizational leadership, offering a roadmap for building culture, navigating uncertainty, and driving sustainable success.</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- /Episode 1 -->

    <!-- Episode 2 -->
    <tr>
      <td class="episode-container">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="more-episode-info"
              style="background-position: 50% -25px;background-image: url(https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/Master%20Mined%20Assets/2025/Thumbnails/Episode_Seventeen_Thumbnail.jpeg);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="80%" valign="top">
                    <a href="https://youtu.be/p8LMP39QK4k" style="text-decoration:none;color:#fff;">
                      <div class="episode-date">
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/calendar.png"
                          alt="Calendar Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-right:5px;height:12px;width:12px !important;">
                        September 9, 2025
                        <img src="https://6370379.fs1.hubspotusercontent-na1.net/hubfs/6370379/timer.png"
                          alt="Time Icon"
                          style="vertical-align:baseline;margin-top:5px;margin-left:10px; margin-right:5px;height:12px;width:12px !important;">
                        55:00
                      </div>
                      <div class="episode-title">How AI & Mobile Tech Are Reshaping Behavioral Health</div>
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
                <p>In this episode of MasterMined, Mark Scrivner, Jeff Skillen, and Lee Pepper sit down with Vincent Phamvan, founder of Vyten and a three-time CMO who has helped brands like Vans, Allbirds, and Calendly scale smart. Vincent shares how mobile apps and AI are changing the behavioral health industry — from simplifying referrals to building stronger patient relationships — and the compliance and culture challenges leaders must address to implement these tools successfully.</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- /Episode 2 -->`;
}

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

    // Load episode history
    const history = loadEpisodeHistory();
    
    // Generate previous episodes HTML
    const previousEpisodesHTML = generatePreviousEpisodesHTML(history.episodes);

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

    // Save current episode to history (rotate episodes)
    const newEpisode = {
        date: formData.episodeDate,
        duration: formData.episodeDuration,
        title: formData.episodeTitle,
        thumbnail: formData.episodeThumbnail,
        description1: formData.episodeDescription1,
        description2: formData.episodeDescription2,
        websiteLink: formData.episodeWebsiteLink,
        youtubeLink: formData.episodeYoutubeLink,
        timestamp: new Date().toISOString()
    };
    
    // Add new episode to beginning, keep only 2 episodes
    history.episodes.unshift(newEpisode);
    history.episodes = history.episodes.slice(0, 2);
    
    // Save updated history
    if (saveEpisodeHistory(history)) {
        showHistoryStatus('Episode saved to history!', 'success');
    }

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

// Export history to JSON file
function exportHistory() {
    const history = loadEpisodeHistory();
    const dataStr = JSON.stringify(history, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `mastermined_history_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showHistoryStatus('History exported successfully!', 'success');
}

// Import history from JSON file
function importHistory(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const history = JSON.parse(e.target.result);
            if (history && Array.isArray(history.episodes)) {
                saveEpisodeHistory(history);
                showHistoryStatus('History imported successfully!', 'success');
                // Reset the file input
                event.target.value = '';
            } else {
                showHistoryStatus('Invalid history file format', 'error');
            }
        } catch (err) {
            showHistoryStatus('Error reading history file', 'error');
        }
    };
    reader.readAsText(file);
}

// Clear history
function clearHistory() {
    if (confirm('Are you sure you want to clear all episode history? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        showHistoryStatus('History cleared', 'success');
    }
}

// Show status message
function showHistoryStatus(message, type) {
    const statusDiv = document.getElementById('historyStatus');
    const statusSpan = statusDiv.querySelector('span');
    
    statusSpan.textContent = message;
    statusDiv.style.display = 'block';
    
    if (type === 'error') {
        statusDiv.style.background = '#ffe4e4';
        statusSpan.style.color = '#d00';
    } else {
        statusDiv.style.background = '#f0f8ff';
        statusSpan.style.color = '#364FA1';
    }
    
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 3000);
}

// Check for existing history on page load
document.addEventListener('DOMContentLoaded', function() {
    const history = loadEpisodeHistory();
    if (history.episodes && history.episodes.length > 0) {
        showHistoryStatus(`Found ${history.episodes.length} episode(s) in history`, 'success');
    }
});